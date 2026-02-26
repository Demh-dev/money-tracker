import { useState, useEffect, useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

export default function useEntries() {

    // state
    const [entries, setEntries] = useState(() => {
        const saved = localStorage.getItem("entries");
        return saved ? JSON.parse(saved) : [];
    });

    // effects
    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    // helpers (pure functions)
    const getMonthData = (date) => {
        const dateObj = new Date(`${date}T00:00:00`);
        const month = dateObj.toLocaleString("default", { month: "long" });
        const year = dateObj.getFullYear();

        return {
            monthLabel: `${month} - ${year}`,
            monthKey: `${year}-${String(dateObj.getMonth() + 1).padStart(2, "0")}`
        };
    };

    // handlers
    const handleNewEntry = (entry) => {
        const { monthLabel, monthKey } = getMonthData(entry.date);

        const newEntry = {
            ...entry,
            id: uuidv4(),
            monthLabel: monthLabel,
            monthKey: monthKey,
        };

        setEntries(prev => [newEntry, ...prev]);
    };

    const requestDelete = (id) => {
        setIdToDelete(id);
        setIsConfirmOpen(true);
    };

    const confirmDelete = () => {
        setEntries(prev =>
            prev.filter(entry => entry.id !== idToDelete)
        );
        cancelDelete();
    };

    const cancelDelete = () => {
        setIsConfirmOpen(false);
        setIdToDelete(null);
    };

    // derived data (memoized)
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

    const total = useMemo(() => {
        return entries.reduce((acc, entry) => {
            const amount = entry.rawAmount;
            return entry.type === "income"
                ? acc + amount
                : acc - amount;
        }, 0);
    }, [entries]);

    // public API
    return {
        // states
        isConfirmOpen,

        // derived data
        total,
        grouped,
        sortedMonths,

        // handlers
        handleNewEntry,
        requestDelete,
        confirmDelete,
        cancelDelete,
    };
}