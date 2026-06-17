import * as styles from './EntryList.styles.js';

import { formatterAmount } from '@/helpers/transactionData.js';

import DeleteIcon from "@mui/icons-material/Delete";

import { Box, Typography, IconButton } from "@mui/material";

export default function EntryRow({ entry, requestDelete }) {
    return (
        <Box sx={styles.entryCardSx}>
            <Box sx={styles.entryTypeDotSx(entry.type)}/>

            <Typography sx={styles.entryTypeLabelSx(entry.type)}>
                {entry.type}
            </Typography>

            <Typography sx={styles.entryAmountTextSx}>
                {entry.selectedCurrency}{formatterAmount(entry.rawAmount)}
            </Typography>

            <Typography sx={styles.entryDateTextSx}>
                {entry.displayDate}
            </Typography>

            <IconButton
                aria-label="delete"
                sx={styles.entryDeleteButtonSx}
                size="small"
                onClick={() => requestDelete(entry.id)}
            >
                <DeleteIcon sx={{ fontSize: "1.4rem" }}/>
            </IconButton>
        </Box>
    );
}