import { useState } from 'react';

import { Box, Typography } from "@mui/material";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from '../Modal/Modal.jsx';
import EntryList from './EntryList.jsx';

import { moneyTrackerAddFabSx, moneyTrackerHeaderSx, moneyTrackerAmountSx } from './MoneyTracker.styles.js';

function MoneyTracker() {

    const [isOpen, setIsOpen] = useState(false);

    const [entries, setEntries] = useState([]);
    const handleNewEntry = (entry) => {
        const newEntry = {
            ...entry,
            id: crypto.randomUUID(),
        };

        setEntries(prev => [newEntry, ...prev]);
    };

    const total = entries.reduce((acc, entry) => {
        const amount = entry.rawAmount;

        return entry.type === "income"
            ? acc + amount : acc - amount;
    }, 0);

    return (
        <div>
            <header>
                <Box sx={moneyTrackerHeaderSx}>
                    <Typography sx={moneyTrackerAmountSx}>
                        L{total.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </Typography>
                </Box>
            </header>

            <Fab
                onClick={() => setIsOpen(true)}
                sx={moneyTrackerAddFabSx}
            >
                <AddIcon/>
            </Fab>

            <EntryList entries={entries} />

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleNewEntry}
            />
        </div>
    );
}

export default MoneyTracker