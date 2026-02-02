import { useState } from 'react';
import { currencies } from './currencies';

export default function useModalForm(onSubmit, onClose) {
    
    // 1. state
    const [form, setForm] = useState({
        type: "income",
        currency: "LPS",
        visualAmount: "",
        rawAmount: "",
        date: null,
    });
    const [messages, setMessages] = useState({
        rawAmount: "",
        date: ""
    });

    // 2. Derived values
    const selectedCurrency = currencies.find(c => c.value === form.currency)?.label;

    // 3. helpers
    const buildEntry = () => ({
        ...form,
        selectedCurrency,
        rawAmount: Number(form.rawAmount),
        date: form.date?.format("YYYY-MM-DD")
    });
    const validateForm = () => {
        const errors = {};

        if (!form.rawAmount) errors.rawAmount = "Amount is required";
        if (!form.date) errors.date = "Date is required";
        
        return errors;
    };

    // 4. handlers
    const handleTabValue = (newValue) => {
        setForm(prev => ({
            ...prev,
            type: newValue,
        }));
    };

    const handleSelectValue = (newValue) => {
        setForm(prev => ({
            ...prev,
            currency: newValue,
        }));
    };

    const formatWithCommas = (value) => {
        if (!value) return "";

        const [integer, decimal] = value.split(".");

        const formattedInt = Number(integer).toLocaleString("en-US");

        return decimal !== undefined
            ? `${formattedInt}.${decimal}`
            : formattedInt;
    };

    const handleKeyDown = (e) => {
        const input = e.target;
        const value = input.value;
        const cursorPos = input.selectionStart;
        const key = e.key;

        const isNumber = /^[0-9]$/.test(key);
        const containsDot = value.includes(".");

        if (containsDot) {
            const [, decimals] = value.split(".");
            const dotIndex = value.indexOf(".");

            if (cursorPos > dotIndex && decimals.length === 2 && isNumber) {
                e.preventDefault();
            };
        };
    };

    const handleAmountChange = (e) => {
        const input = e.target;
        const cursorPos = input.selectionStart;

        const raw = input.value
            .replace(/,/g, "") // remove commas first
            .replace(/[^0-9.]/g, "") // digits + dot
            .replace(/(\..*)\./g, "$1") // only one dot
            .replace(/^(\d+)(\.\d{0,2})?.*$/, "$1$2"); // only two numbers after dot

        const formatted = formatWithCommas(raw);

        const diff = formatted.length - input.value.length;
        const newCursorPos = cursorPos + diff;

        setForm(prev => ({
            ...prev,
            rawAmount: raw,
            visualAmount: formatted,
        }));

        requestAnimationFrame(() => {
            input.setSelectionRange(newCursorPos, newCursorPos);
        });

        setMessages(prev => ({ ...prev, rawAmount: "" }));
    };

    const handleDateChange = (newValue) => {
        setForm(prev => ({ ...prev, date: newValue }));
        setMessages(prev => ({ ...prev, date: "" }));
    };

    const resetForm = () => {
        setForm({
            type: "income",
            currency: "LPS",
            visualAmount: "",
            rawAmount: "",
            date: null,
        });
    };

    const handleSend = () => {
        const errors = validateForm()
        setMessages(errors);
        if (Object.keys(errors).length > 0) return;

        onSubmit(buildEntry());
        onClose();
        resetForm();
    };

    return {
        form,
        messages,
        selectedCurrency,
        handleTabValue,
        handleSelectValue,
        handleKeyDown,
        handleAmountChange,
        handleDateChange,
        handleSend
    };
}