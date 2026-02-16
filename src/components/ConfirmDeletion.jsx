import '../styles/ConfirmDeletion.css';
import { DeletionCancelButton } from '../styles/MoneyTracker.styles';

import { Button, Typography } from '@mui/material';

export default function ConfirmDeletion({ isConfirmOpen, handleDeleteEntry, setIsConfirmOpen }) {

    if (!isConfirmOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="confirm-box">
                <Typography variant="h6">
                    Are you sure you want to delete this amount?
                </Typography>

                <div className="buttons-layout">
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteEntry}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#b71c1c",
                            }
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setIsConfirmOpen(false)}
                        sx={DeletionCancelButton}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}