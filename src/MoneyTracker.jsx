import { useState } from 'react';
import "./MoneyTracker.css";
import Modal from './components/Modal/Modal.jsx';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function MoneyTracker() {

    const [isOpen, setIsOpen] = useState(false);

    const [entries, setEntries] = useState([]);
    const handleNewEntry = (entry) => {
        setEntries(prev => [entry, ...prev]);
    };

    return (
        <div>
            <header className="header">
                <h1>Money Tracker</h1>
            </header>

            <section>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={() => setIsOpen(true)}
                    >
                        <AddIcon/>
                    </Fab>
                </Box>
            </section>

            <div>
                <ul>
                    {entries.map((entry, id) => (
                        <li key={id}>
                            {entry.type} - {entry.selectedCurrency}{entry.amount} - {entry.source} {entry.date}
                        </li>
                    ))}
                </ul>
            </div>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleNewEntry}
            />
        </div>
    )
}

export default MoneyTracker