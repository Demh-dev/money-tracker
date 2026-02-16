import * as styles from "../styles/Modal.styles";
import '../styles/Modal.css';

import useModalForm from '../hooks/useModalForm';
import { currencies } from '../utils/Currencies';

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
                            sx={styles.modalTabsSx}
                        >
                            <Tab
                                value="income"
                                label="Income"
                                sx={styles.modalTabSx}
                            />
                            <Tab
                                value="expense"
                                label="Expense"
                                sx={styles.modalTabSx}
                            />
                        </Tabs>
                    </div>

                    <Fab
                        onClick={onClose}
                        sx={styles.modalCloseButtonSx}
                    >
                        <ClearIcon/>
                    </Fab>
                </div>
                
                <div className="modal-content">
                    <FormControl
                        sx={styles.modalCurrencyFormControlSx}
                    >
                        <InputLabel
                            id="currency-label"
                            sx={styles.modalCurrencyInputLabelSx}
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
                                    sx: styles.modalCurrencySelectSx,
                                },
                            }}
                        >
                            {currencies.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                    sx={styles.modalCurrencyMenuItemSx}
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
                                                sx={styles.modalAmountTypographySx}
                                            >
                                                {selectedCurrency}
                                            </Typography>
                                        </InputAdornment>
                                }
                            }}
                            sx={styles.modalAmountTextFieldSx}
                        />

                        {messages.rawAmount && (
                            <Alert
                                severity="info"
                                sx={styles.modalMessagesSx}
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
                                        sx: styles.modalDatePickerTextFieldSx,
                                    },

                                    popper: {
                                        sx: styles.modalDatePickerPopperSx,
                                    },

                                    layout: {
                                        sx: styles.modalDatePickerLayoutSx,
                                    },

                                    yearButton: {
                                        sx: styles.modalDatePickerYearButtonSx,
                                    },
                                }}
                            />
                        </LocalizationProvider>

                        {messages.date && (
                            <Alert
                                severity="info"
                                sx={styles.modalMessagesSx}
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