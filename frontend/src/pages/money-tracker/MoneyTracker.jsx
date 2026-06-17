import { useState } from 'react';

import { Box, Typography, Alert, LinearProgress } from "@mui/material";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TransactionModal from './components/transaction-modal/TransactionModal.jsx';
import EntryList from './components/entry-list/EntryList.jsx';
import ConfirmDeletion from './components/confirm-deletion/ConfirmDeletion.jsx';

import useEntries from '@/hooks/useEntries.js';

import { formatSignedAmount } from '@/helpers/transactionData.js';

import * as styles from './MoneyTracker.styles.js';

const BALANCE_CARDS = [
    { key: 'income', label: 'Income' },
    { key: 'expense', label: 'Expenses' },
    { key: 'net', label: 'Net' },
];

function MoneyTracker() {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const {
        // states
        isConfirmOpen,
        serverMessages,
        isLoading,

        // derived data
        netBalance,
        totalIncome,
        totalExpenses,
        grouped,
        sortedMonths,

        // handlers
        createEntry,
        requestDelete,
        confirmDelete,
        cancelDelete,
    } = useEntries();

    const balanceValues = {
        income: totalIncome,
        expense: totalExpenses,
        net: netBalance,
    };

    return (
        <Box sx={styles.moneyTrackerContainerSx}>

            <Box sx={styles.moneyTrackerHeaderSx}>
                <Typography sx={styles.moneyTrackerHeaderLabelSx}>
                    Money Tracker
                </Typography>

                <Typography sx={styles.moneyTrackerAmountSx}>
                    {formatSignedAmount(netBalance)}
                </Typography>

                <Box sx={styles.moneyTrackerBalanceGridSx}>
                    {BALANCE_CARDS.map(({ key, label }) => (
                        <Box key={key} sx={styles.moneyTrackerBalanceCardSx}>
                            <Typography sx={styles.moneyTrackerBalanceCardLabelSx}>
                                {label}
                            </Typography>
                            <Typography sx={styles.moneyTrackerBalanceCardValueSx(key)}>
                                {formatSignedAmount(balanceValues[key])}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={styles.moneyTrackerContentSx}>
                <EntryList
                    sortedMonths={sortedMonths}
                    grouped={grouped}
                    requestDelete={requestDelete}
                />
            </Box>

            {serverMessages.success && (
                <Alert
                    variant="filled"
                    severity="success"
                    sx={styles.moneyTrackerAlertSx}
                >
                    {serverMessages.success}
                </Alert>
            )}

            {serverMessages.error && (
                <Alert
                    variant="filled"
                    severity="error"
                    sx={styles.moneyTrackerAlertSx}
                >
                    {serverMessages.error}
                </Alert>
            )}

            <Fab
                onClick={handleOpenModal}
                sx={styles.moneyTrackerAddFabSx}
            >
                <AddIcon/>
            </Fab>

            <TransactionModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSubmit={createEntry}
            />

            <ConfirmDeletion
                isConfirmOpen={isConfirmOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            {isLoading && (
                <Box sx={styles.moneyTrackerLoadingLayoutSx}>
                    <LinearProgress sx={styles.moneyTrackerLoadingBarSx}/>
                </Box>
            )}
        </Box>
    );
}

export default MoneyTracker;