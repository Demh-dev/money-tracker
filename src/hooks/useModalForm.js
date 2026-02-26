import { useState, useMemo } from 'react';
import { currencies } from '../utils/Currencies';

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

    // derived data
    const selectedCurrency = useMemo(() => {
        return currencies.find(c => c.value === form.currency)?.label;
    }, [form.currency]);

    // helpers
    const cleanRawAmount = (value) => {
        return value
            .replace(/,/g, "") // remove commas first
            .replace(/[^0-9.]/g, "") // digits + dot
            .replace(/(\..*)\./g, "$1") // only one dot
            .replace(/^(\d+)(\.\d{0,2})?.*$/, "$1$2"); // only two numbers after dot
    };

    const formatWithCommas = (value) => {
        if (value === "") return "";

        const [integer, decimal] = value.split(".");

        const formattedInt = integer ? Number(integer).toLocaleString("en-US") : "0";

        return decimal != null
            ? `${formattedInt}.${decimal}`
            : formattedInt;
    };

    const adjustCursor = (e, value, formatted) => {
        const diff = formatted.length - value.length;
        const newCursorPos = e.target.selectionStart + diff;
        requestAnimationFrame(() => {
            e.target.setSelectionRange(newCursorPos, newCursorPos);
        });
    };

    const buildEntry = () => ({
        ...form,
        selectedCurrency,
        rawAmount: Number(form.rawAmount),
        date: form.date?.format("YYYY-MM-DD")
    });

    const validateAndSetMessages = () => {
        const errors = {};
        const amount = Number(form.rawAmount);

        if (!form.rawAmount || isNaN(amount) || Number(amount <= 0)) {
            errors.rawAmount = "Enter a valid amount";
        }

        if (!form.date || !form.date.isValid?.()) {
            errors.date = "Enter a valid date";
        }

        setMessages(errors);
        return Object.keys(errors).length === 0;
    };

    // handlers
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleTabValue = (type) => setForm(prev => ({ ...prev, type: type }));

    const handleSelectValue = (currency) => setForm(prev => ({ ...prev, currency: currency }));

    const handleAmountKeyDown = (e) => {
        const { value, selectionStart: cursorPos } = e.target;
        const { key } = e;
        if (!/^[0-9]$/.test(key)) return;

        const dotIndex = value.indexOf(".");
        if (dotIndex === -1) return;

        const decimals = value.slice(dotIndex + 1);
        if (cursorPos > dotIndex && decimals.length >= 2) {
            e.preventDefault();
        };
    };

    const handleAmountChange = (e) => {
        const { value } = e.target;

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
        if (!validateAndSetMessages()) return;

        onSubmit(buildEntry());
        onClose();
        resetForm();
    };

    // public API

    return {
        // states
        form,
        messages,

        // derived data
        selectedCurrency,

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