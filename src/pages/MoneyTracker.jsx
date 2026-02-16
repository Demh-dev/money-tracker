import { useState } from 'react';

import { Box, Typography } from "@mui/material";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from '../components/Modal.jsx';
import EntryList from '../components/EntryList.jsx';
import ConfirmDeletion from '../components/ConfirmDeletion.jsx';

import useEntries from '../hooks/useEntries.js';

import Formatter from '../utils/Formatter.js';

import { moneyTrackerAddFabSx, moneyTrackerHeaderSx, moneyTrackerAmountSx } from '../styles/MoneyTracker.styles.js';

function MoneyTracker() {

    const [isOpen, setIsOpen] = useState(false);

    const {
        total,
        grouped,
        sortedMonths,
        handleNewEntry,
        handleDeleteEntry,
        setIdToDelete,
        isConfirmOpen,
        setIsConfirmOpen
    } = useEntries();

    return (
        <div>
            <header>
                <Box sx={moneyTrackerHeaderSx}>
                    <Typography sx={moneyTrackerAmountSx}>
                        Total Revenue: L{Formatter(total)}
                    </Typography>
                </Box>
            </header>

            <Fab
                onClick={() => setIsOpen(true)}
                sx={moneyTrackerAddFabSx}
            >
                <AddIcon/>
            </Fab>

            <EntryList
                sortedMonths={sortedMonths}
                grouped={grouped}
                setIsConfirmOpen={setIsConfirmOpen}
                setIdToDelete={setIdToDelete}
            />

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleNewEntry}
            />

            <ConfirmDeletion
                isConfirmOpen={isConfirmOpen}
                handleDeleteEntry={handleDeleteEntry}
                setIsConfirmOpen={setIsConfirmOpen}
            />
        </div>
    );
}

export default MoneyTracker