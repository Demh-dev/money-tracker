import { useState } from 'react';

import { Box, Typography } from "@mui/material";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TransactionModal from '../components/transaction-modal/TransactionModal.jsx';
import EntryList from '../components/entry-list/EntryList.jsx';
import ConfirmDeletion from '../components/confirm-deletion/ConfirmDeletion.jsx';

import useEntries from '../hooks/useEntries.js';

import FormatterAmount from '../utils/FormatterAmount.js';

import { moneyTrackerAddFabSx, moneyTrackerHeaderSx, moneyTrackerAmountSx } from './MoneyTracker.styles.js';

function MoneyTracker() {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const {
        total,
        grouped,
        sortedMonths,
        handleNewEntry,
        requestDelete,
        confirmDelete,
        cancelDelete,
        isConfirmOpen,
    } = useEntries();

    return (
        <div>
            <Box sx={moneyTrackerHeaderSx}>
                <Typography sx={moneyTrackerAmountSx}>
                    Total Revenue: L{FormatterAmount(total)}
                </Typography>
            </Box>

            <Fab
                onClick={handleOpenModal}
                sx={moneyTrackerAddFabSx}
            >
                <AddIcon/>
            </Fab>

            <EntryList
                sortedMonths={sortedMonths}
                grouped={grouped}
                requestDelete={requestDelete}
            />

            <TransactionModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSubmit={handleNewEntry}
            />

            <ConfirmDeletion
                isConfirmOpen={isConfirmOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </div>
    );
}

export default MoneyTracker