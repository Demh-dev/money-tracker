import * as styles from './ConfirmDeletion.styles';

import { Box, Button, Typography } from '@mui/material';

export default function ConfirmDeletion({ isConfirmOpen, onConfirm, onCancel }) {

    if (!isConfirmOpen) return null;

    return (
        <Box sx={styles.confirmDeletionModalOverlaySx}>
            <Box sx={styles.confirmDeletionBoxSx}>
                <Typography variant="h6">
                    Are you sure you want to delete this amount?
                </Typography>

                <Box sx={styles.confirmDeletionButtonsLayoutSx}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onConfirm}
                        sx={styles.confirmButtonDeletionSx}
                    >
                        Confirm
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={onCancel}
                        sx={styles.cancelButtonDeletionSx}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}