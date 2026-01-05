import { useState } from 'react';
import './Modal.css';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, MenuItem, InputAdornment, Fab, TextField, InputLabel, Select, Button, Tabs, Tab, Alert, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const currencies = [
    { value: 'USD', label: '$', },
    { value: 'EUR', label: '€', },
    { value: "LPS", label: 'L' },
];

export default function Modal({ isOpen, onClose, onSubmit }) {

    // 1. state
    const [form, setForm] = useState({
        type: "income",
        currency: "LPS",
        amount: "",
        source: "cash",
        date: null,
    });
    const [messages, setMessages] = useState({
        amount: "",
        date: ""
    });

    // 2. derived values
    const selectedCurrency = currencies.find(prev => prev.value === form.currency)?.label;

    // 3. helpers
    const buildEntry = () => ({
        ...form,
        selectedCurrency,
        date: form.date?.format("YYYY-MM-DD")
    });
    const validateForm = () => {
        const errors = {};

        if (!form.amount) errors.amount = "Amount is required";
        if (!form.date) errors.date = "Date is required";
        
        return errors;
    };

    // 4. handlers
    const handleAmountChange = (e) => {
        const value = e.target.value;

        const cleaned = value
            .replace(/[^0-9.]/g, '') //Keeps only digits and periods
            .replace(/(\..*?)\..*/g, '$1') //Only one decimal point
            .replace(/^(\d+)(\.\d{0,2})?.*$/, "$1$2") //Limit to 2 decimals
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Add commas

        setForm(prev => ({ ...prev, amount: cleaned }));
        setMessages(prev => ({
            ...prev,
            amount: ""
        }));
    };
    const handleDateChange = (newValue) => {
        setForm(prev => ({
            ...prev,
            date: newValue
        }));

        setMessages(prev => ({
            ...prev,
            date: ""
        }));
    };
    const handleSend = () => {
        const errors = validateForm()
        setMessages(errors);
        if (Object.keys(errors).length > 0) return;

        onSubmit(buildEntry());
        onClose();
        resetForm();
    };
    const resetForm = () => {
        setForm({
            type: "income",
            currency: "LPS",
            amount: "",
            source: "cash",
            date: null,
        });
    };

    if (!isOpen) return null;

    // 5. return
    return (
        <div className="modal-overlay">
            <div
                className="modal-box"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                tabIndex={0}
            >
                <Fab
                    color="primary"
                    onClick={onClose}
                >
                    <ClearIcon/>
                </Fab>

                <Tabs
                    value={form.type}
                    onChange={(_event, newValue) => setForm(prev => 
                        ({ ...prev, type: newValue }))}
                >
                    <Tab
                        value="income"
                        label="Income"
                    />
                    <Tab
                        value="expense"
                        label="Expense"
                    />
                </Tabs>
                
                <FormControl sx={{ width: 100 }}>
                    <InputLabel id="currency-label">
                        Currency
                    </InputLabel>
                    <Select
                        labelId="currency-label"
                        value={form.currency}
                        onChange={(e) => setForm(prev => 
                            ({ ...prev, currency: e.target.value }))}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Amount"
                    value={form.amount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    slotProps={{
                        input: {
                            startAdornment:
                                <InputAdornment
                                    position="start"
                                >
                                    {selectedCurrency}
                                </InputAdornment>
                        }
                    }}
                />

                {messages.amount && (
                <Stack>
                    <Alert severity="info">
                        {messages.amount}
                    </Alert>
                </Stack>
                )}

                <FormControl sx={{ width: 100 }}>
                    <InputLabel id="source-label">
                        Source
                    </InputLabel>
                    <Select
                        labelId="source-label"
                        value={form.source}
                        onChange={(e) => setForm(prev => 
                            ({ ...prev, source: e.target.value }))}
                    >
                        <MenuItem
                            value="cash"
                        >
                            Cash
                        </MenuItem>
                        <MenuItem
                            value="bank"
                        >
                            Bank
                        </MenuItem>
                    </Select>
                </FormControl>

                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                >
                    <DatePicker
                        label="Date"
                        value={form.date}
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>

                {messages.date && (
                <Stack>
                    <Alert severity="info">
                        {messages.date}
                    </Alert>
                </Stack>
                )}

                <Button
                    variant="contained"
                    onClick={handleSend}
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
            </div>
        </div>
    )
}