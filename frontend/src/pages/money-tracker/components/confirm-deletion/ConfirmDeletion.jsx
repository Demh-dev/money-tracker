import * as styles from './ConfirmDeletion.styles.js';

import DeleteIcon from '@mui/icons-material/Delete';

import { Box, Button, Typography } from '@mui/material';

export default function ConfirmDeletion({ isConfirmOpen, onConfirm, onCancel }) {

    if (!isConfirmOpen) return null;

    return (
        <Box sx={styles.confirmDeletionModalOverlaySx}>
            <Box sx={styles.confirmDeletionBoxSx}>

                <Box sx={styles.confirmDeletionTopSx}>
                    <Box sx={styles.confirmDeletionIconWrapSx}>
                        <DeleteIcon sx={{ fontSize: '1.25rem', color: '#f87171' }}/>
                    </Box>

                    <Typography sx={styles.confirmDeletionTitleSx}>
                        Delete this entry?
                    </Typography>

                    <Typography sx={styles.confirmDeletionSubtitleSx}>
                        This action cannot be undone.
                    </Typography>
                </Box>

                <Box sx={styles.confirmDeletionFooterSx}>
                    <Button
                        onClick={onCancel}
                        sx={styles.cancelButtonDeletionSx}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={onConfirm}
                        sx={styles.confirmButtonDeletionSx}
                    >
                        Delete
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}