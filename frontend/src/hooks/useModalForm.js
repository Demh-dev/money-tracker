import { useState } from 'react';
import { cleanRawAmount, formatWithCommas, adjustCursor } from '@/helpers/sanitizeInput.js';

// constants
const INITIAL_FORM_STATE = {
    type: "income",
    currency: "LPS",
    visualAmount: "",
    rawAmount: "",
    date: null,
};

export default function useModalForm(onSubmit, onClose) {
    
    // state
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    const [messages, setMessages] = useState({
        rawAmount: "",
        date: ""
    });

    // builders
    const buildEntry = () => ({
            type: form.type,
            currency: form.currency,
            rawAmount: Number(form.rawAmount),
            date: form.date?.format("YYYY-MM-DD")
        });

    // validation
    const validateForm = () => {
        const errors = {};
        const amount = Number(form.rawAmount);

        if (!form.rawAmount || Number.isNaN(amount) || amount <= 0) {
            errors.rawAmount = "Enter a valid amount";
        }

        if (!form.date || !form.date.isValid?.()) {
            errors.date = "Enter a valid date";
        }

        return errors;
    };

    // handlers
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleTabValue = (type) => setForm(prev => ({ ...prev, type }));

    const handleSelectValue = (currency) => setForm(prev => ({ ...prev, currency }));

    const handleAmountKeyDown = (e) => {
        const { value, selectionStart: cursorPos } = e.target; // object destructuring
        const { key } = e; // object destructuring
        if (!/^[0-9]$/.test(key)) return null; // allow only digits

        const dotIndex = value.indexOf(".");
        if (dotIndex === -1) return null;

        const decimals = value.slice(dotIndex + 1); // get decimals after dot
        if (cursorPos > dotIndex && decimals.length >= 2) {
            e.preventDefault();
        };
    };

    const handleAmountChange = (e) => {
        const { value } = e.target; // object destructuring

        const raw = cleanRawAmount(value);
        const formatted = formatWithCommas(raw);

        setForm(prev => ({
            ...prev,
            rawAmount: raw,
            visualAmount: formatted,
        }));

        adjustCursor(e, value, formatted);
        setMessages(prev => ({ ...prev, rawAmount: "" }));
    };

    const handleDateChange = (newValue) => {
        setForm(prev => ({ ...prev, date: newValue }));
        setMessages(prev => ({ ...prev, date: "" }));
    };

    const resetForm = () => {
        setForm(INITIAL_FORM_STATE);
        setMessages({ rawAmount: "", date: "" });
    };

    const handleSend = () => {
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setMessages(errors);
            return;
        }

        onSubmit(buildEntry());

        onClose();
        resetForm();
    };

    // public API
    return {
        // states
        form,
        messages,

        // handlers
        handleTabValue,
        handleSelectValue,
        handleAmountKeyDown,
        handleAmountChange,
        handleDateChange,
        handleKeyDown,
        handleSend
    };
}