import dayjs from 'dayjs';

export const currencies = [
    { value: "LPS", label: 'L' },
];

export function formatterAmount(value) {
    return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

// useEntries.js
export const getMonthData = (date) => {
    const dateObj = new Date(`${date}T00:00:00`); // We use T00:00:00 to avoid timezone issues
    const month = dateObj.toLocaleString("default", { month: "long" }); // We use default locale to ensure month names are in the user's language
    const year = dateObj.getFullYear();

    return {
        monthLabel: `${month} - ${year}`,
        monthKey: `${year}-${String(dateObj.getMonth() + 1).padStart(2, "0")}`
    };
};

export const formatEntryForUI = (entry) => {

    const dateObj = dayjs(entry.date);

    const { monthLabel, monthKey } = getMonthData(dateObj.format("YYYY-MM-DD"));

    return {
        ...entry,
        id: entry.id,
        rawAmount: Number(entry.raw_amount),
        date: dateObj.format("YYYY-MM-DD"),
        selectedCurrency: currencies.find(c => c.value === entry.currency)?.label,
        displayDate: dateObj.format("MMMM DD, YYYY"),
        monthLabel,
        monthKey
    };
};

export function formatSignedAmount(amount, { showPlus = false } = {}) {
    const isNegative = amount < 0;
    const sign = isNegative ? '-' : showPlus && amount > 0 ? '+' : '';

    return `${sign}L${formatterAmount(Math.abs(amount))}`;
}