import { modalTabsSx, modalTabSx, modalCloseButtonSx, modalCurrencyFormControlSx, modalCurrencyInputLabelSx, modalCurrencySelectSx, modalCurrencyMenuItemSx, modalAmountTypographySx, modalAmountTextFieldSx, modalMessagesSx, modalDatePickerTextFieldSx, modalDatePickerPopperSx, modalDatePickerLayoutSx, modalDatePickerYearButtonSx } from "./Modal.styles";
import './Modal.css';

import useModalForm from './useModalForm';
import { currencies } from './currencies';

import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';

import { FormControl, MenuItem, InputAdornment, Fab, TextField, InputLabel, Select, Button, Tabs, Tab, Alert, Typography } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Modal({ isOpen, onClose, onSubmit }) {

    const {
        form,
        messages,
        selectedCurrency,
        handleTabValue,
        handleSelectValue,
        handleKeyDown,
        handleAmountChange,
        handleDateChange,
        handleSend
    } = useModalForm(onSubmit, onClose);

    if (!isOpen) return null;

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
                <div className="modal-header">
                    <div className="modal-tabs">
                        <Tabs
                            value={form.type}
                            onChange={(_event, newValue) => handleTabValue(newValue)}
                            sx={modalTabsSx}
                        >
                            <Tab
                                value="income"
                                label="Income"
                                sx={modalTabSx}
                            />
                            <Tab
                                value="expense"
                                label="Expense"
                                sx={modalTabSx}
                            />
                        </Tabs>
                    </div>

                    <Fab
                        className="modal-close"
                        onClick={onClose}
                        sx={modalCloseButtonSx}
                    >
                        <ClearIcon/>
                    </Fab>
                </div>
                
                <div className="modal-content">
                    <FormControl
                        sx={modalCurrencyFormControlSx}
                    >
                        <InputLabel
                            id="currency-label"
                            sx={modalCurrencyInputLabelSx}
                        >
                            Currency
                        </InputLabel>
                        <Select
                            labelId="currency-label"
                            value={form.currency}
                            label="Currency"
                            onChange={(e) => handleSelectValue(e.target.value)}
                            MenuProps={{
                                PaperProps: {
                                    sx: modalCurrencySelectSx,
                                },
                            }}
                        >
                            {currencies.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                    sx={modalCurrencyMenuItemSx}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div className="field-group">
                        <TextField
                            label="Amount"
                            value={form.visualAmount}
                            onKeyDown={handleKeyDown}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            slotProps={{
                                input: {
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <Typography
                                                sx={modalAmountTypographySx}
                                            >
                                                {selectedCurrency}
                                            </Typography>
                                        </InputAdornment>
                                }
                            }}
                            sx={modalAmountTextFieldSx}
                        />

                        {messages.rawAmount && (
                            <Alert
                                severity="info"
                                sx={modalMessagesSx}
                            >
                                {messages.rawAmount}
                            </Alert>
                        )}
                    </div>
                    
                    <div className="field-group">
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                        >
                            <DatePicker
                                label="Date"
                                value={form.date}
                                onChange={handleDateChange}
                                slotProps={{
                                    textField: {
                                        sx: modalDatePickerTextFieldSx,
                                    },

                                    popper: {
                                        sx: modalDatePickerPopperSx,
                                    },

                                    layout: {
                                        sx: modalDatePickerLayoutSx,
                                    },

                                    yearButton: {
                                        sx: modalDatePickerYearButtonSx,
                                    },
                                }}
                            />
                        </LocalizationProvider>

                        {messages.date && (
                            <Alert
                                severity="info"
                                sx={modalMessagesSx}
                            >
                                {messages.date}
                            </Alert>
                        )}
                    </div>
                </div>

                <div className="modal-footer">
                    <Button
                        variant="contained"
                        onClick={handleSend}
                        endIcon={<SendIcon/>}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}