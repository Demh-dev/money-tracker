import * as styles from './EntryList.styles.js';

import Formatter from '../../utils/FormatterAmount.js';

import DeleteIcon from "@mui/icons-material/Delete";

import { Box, Typography, IconButton } from "@mui/material";

export default function EntryRow({ entry, requestDelete }) {
    return (
        <Box sx={styles.entryCardSx}>
            <Box sx={styles.entryTypeBadgeSx(entry.type)}>
                <Typography sx={styles.entryTypeTextSx}>
                    {entry.type}
                </Typography>
            </Box>

            <Typography sx={styles.entryAmountTextSx}>
                {entry.selectedCurrency}{Formatter(entry.rawAmount)}
            </Typography>

            <Typography sx={styles.entryDateTextSx}>
                {entry.date}
            </Typography>

            <IconButton
                aria-label="delete"
                sx={styles.entryDeleteButtonSx}
                size="small"
                onClick={() => requestDelete(entry.id)}
            >
                <DeleteIcon/>
            </IconButton>
        </Box>
    );
};