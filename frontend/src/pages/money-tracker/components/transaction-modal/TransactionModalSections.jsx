import * as styles from "./TransactionModal.styles.js";

import { currencies } from '@/helpers/transactionData.js';

import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';

import { Box, Tabs, Tab, Fab, Button, FormControl, MenuItem, InputAdornment, TextField, InputLabel, Select, Alert, Typography } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function ModalHeader({ form, handleTabValue, onClose }) {
    return (
        <Box sx={styles.modalHeaderSx}>
            <Tabs
                value={form.type}
                onChange={(_, type) => handleTabValue(type)}
                sx={styles.modalTabsSx}
            >
                <Tab
                    value="income"
                    label="Income"
                    sx={styles.modalTabSx('income', form.type)}
                />
                <Tab
                    value="expense"
                    label="Expense"
                    sx={styles.modalTabSx('expense', form.type)}
                />
            </Tabs>

            <Fab
                onClick={onClose}
                sx={styles.modalCloseButtonSx}
            >
                <ClearIcon sx={{ fontSize: '1.1rem' }}/>
            </Fab>
        </Box>
    );
}

function FieldMessage({ message }) {
    if (!message) return null;

    return (
        <Alert severity="info" sx={styles.modalMessagesSx}>
            {message}
        </Alert>
    );
}

export function ModalContent({ state, handlers }) {
    const { form, messages } = state;

    const {
        handleSelectValue,
        handleAmountKeyDown,
        handleAmountChange,
        handleDateChange
    } = handlers;

    return (
        <Box sx={styles.modalContentSx}>
            <Box sx={styles.modalFieldGroupSx}>
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
            </Box>

            <Box sx={styles.modalFieldGroupSx}>
                <TextField
                    label="Amount"
                    value={form.visualAmount}
                    onKeyDown={handleAmountKeyDown}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    slotProps={{
                        input: {
                            startAdornment:
                                <InputAdornment position="start">
                                    <Typography
                                        sx={styles.modalAmountTypographySx}
                                    >
                                        {currencies.map((option) =>
                                            (option.label)
                                        )}
                                    </Typography>
                                </InputAdornment>
                        }
                    }}
                    sx={styles.modalAmountTextFieldSx(form.type)}
                />
                <FieldMessage message={messages.rawAmount}/>
            </Box>
            
            <Box sx={styles.modalFieldGroupSx}>
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
                <FieldMessage message={messages.date}/>
            </Box>
        </Box>
    );
}

export function ModalFooter({ type, handleSend }) {
    return (
        <Box sx={styles.modalFooterSx}>
            <Typography sx={styles.modalFooterHintSx}>
                Press Enter to send
            </Typography>

            <Button
                onClick={handleSend}
                endIcon={<SendIcon sx={{ fontSize: '1rem' }}/>}
                sx={styles.modalSendButtonSx(type)}
            >
                {type === 'income' ? 'Add income' : 'Add expense'}
            </Button>
        </Box>
    );
}