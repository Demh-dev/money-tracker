import { useState, useEffect } from 'react';

export default function useEntries() {

    const [entries, setEntries] = useState(() => {
        const saved = localStorage.getItem("entries");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const handleNewEntry = (entry) => {
        const dateObj = new Date (`${entry.date}T00:00:00`);
        const month = dateObj.toLocaleString("default", { month: "long" });
        const year = dateObj.getFullYear();

        const monthLabel = `${month} - ${year}`;
        const monthKey = `${year}-${String(dateObj.getMonth() + 1).padStart(2, "0")}`;

        const newEntry = {
            ...entry,
            id: crypto.randomUUID(),
            monthLabel: monthLabel,
            monthKey: monthKey,
        };

        setEntries(prev => [newEntry, ...prev]);
    };

    const grouped = {};
    entries.forEach(entry => {
        const { monthKey, monthLabel } = entry;

        if (!grouped[monthKey]) {
            grouped[monthKey] = {
                monthLabel,
                entries: [],
                income: 0,
                expenses: 0,
                netWorth: 0
            };
        };

        grouped[monthKey].entries.push(entry);

        if (entry.type === "income") {
            grouped[monthKey].income += entry.rawAmount;
        } else {
            grouped[monthKey].expenses += entry.rawAmount;
        }
    });

    Object.values(grouped).forEach(monthGroup => {
        monthGroup.netWorth = monthGroup.income - monthGroup.expenses;
    });

    Object.values(grouped).forEach(monthGroup => {
    monthGroup.entries.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    });

    const sortedMonths = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

    const total = entries.reduce((acc, entry) => {
        const amount = entry.rawAmount;

        return entry.type === "income"
            ? acc + amount : acc - amount;
    }, 0);

    const handleDeleteEntry = () => {
        setEntries(prev =>
            prev.filter(entry => entry.id !== idToDelete)
        );

        setIdToDelete(null);
        setIsConfirmOpen(false);
    };

    return {
        total,
        grouped,
        sortedMonths,
        handleNewEntry,
        handleDeleteEntry,
        setIdToDelete,
        isConfirmOpen,
        setIsConfirmOpen
    };
}