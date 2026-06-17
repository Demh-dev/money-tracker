import { useState, useEffect, useMemo, useCallback } from 'react';
import { formatEntryForUI } from '@/helpers/transactionData.js';
import useApi from '@/utils/useApi.js';

export default function useEntries() {

    // state
    const [entries, setEntries] = useState([]);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    // external hooks
    const { serverMessages, isLoading, makeRequest, showMessage } = useApi();

    // API
    const fetchTransactions = useCallback(async () => {
        const result = await makeRequest('/api/transactions/GetTransactions');

        if (result.success) {
            setEntries(result.data.map(formatEntryForUI));
            showMessage('success', result.message, 3000);
        }
    }, [makeRequest, showMessage]);

    const createEntry = useCallback(async (entry) => {
        const result = await makeRequest('/api/transactions/CreateTransaction', {
            method: 'POST',
            body: JSON.stringify(entry)
        });

        if (result.success) {
            setEntries(prev => [formatEntryForUI(result.data), ...prev]);
            showMessage('success', result.message, 3000);
        }
    }, [makeRequest, showMessage]);

    const confirmDelete = useCallback(async () => {
        const result = await makeRequest('/api/transactions/DeleteTransaction', {
            method: 'DELETE',
            body: JSON.stringify({ id: idToDelete })
        });

        if (result.success) {
            setEntries(prev => prev.filter(entry => entry.id !== idToDelete));
            showMessage('success', result.message, 3000);
        }

        cancelDelete();
    }, [makeRequest, showMessage, idToDelete]);

    // handlers
    const requestDelete = (id) => {
        setIdToDelete(id);
        setIsConfirmOpen(true);
    };

    const cancelDelete = () => {
        setIsConfirmOpen(false);
        setIdToDelete(null);
    };

    // effects
    useEffect(() => {
        fetchTransactions();
    }, []);

    // derived data
    const { grouped, sortedMonths } = useMemo(() => {
        const groupedData = {};

        entries.forEach(entry => {
            const { monthKey, monthLabel } = entry;

            if (!groupedData[monthKey]) {
                groupedData[monthKey] = {
                    monthLabel,
                    entries: [],
                    income: 0,
                    expenses: 0,
                    netWorth: 0
                };
            }

            groupedData[monthKey].entries.push(entry);

            if (entry.type === "income") {
                groupedData[monthKey].income += entry.rawAmount;
            } else {
                groupedData[monthKey].expenses += entry.rawAmount;
            }
        });

        Object.values(groupedData).forEach(monthGroup => {
            monthGroup.netWorth = monthGroup.income - monthGroup.expenses;

            monthGroup.entries.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
        });

        const sorted = Object.keys(groupedData).sort(
            (a,b) => b.localeCompare(a)
        );

        return {
            grouped: groupedData,
            sortedMonths: sorted,
        };

    }, [entries]);

    const { netBalance, totalIncome, totalExpenses } = useMemo(() => {
        return entries.reduce((acc, entry) => {
            if (entry.type === 'income') {
                acc.totalIncome += entry.rawAmount;
                acc.netBalance += entry.rawAmount;
            } else {
                acc.totalExpenses += entry.rawAmount;
                acc.netBalance -= entry.rawAmount;
            }
            return acc;
        }, { netBalance: 0, totalIncome: 0, totalExpenses: 0 });
    }, [entries]);

    // public API
    return {
        // states
        isConfirmOpen,
        serverMessages,
        isLoading,

        // derived data
        netBalance,
        totalIncome,
        totalExpenses,
        grouped,
        sortedMonths,

        // handlers
        createEntry,
        requestDelete,
        confirmDelete,
        cancelDelete,
    };
}