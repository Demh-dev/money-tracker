import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { entryCardSx, entryTypeBadgeSx, entryTypeTextSx, entryAmountBoxSx, entryAmountTextSx, entryDateTextSx } from "./MoneyTracker.styles";

export default function EntryList({ entries }) {

    const copiedEntries = [...entries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <ul>
            {copiedEntries.map((entry) => (
                <li key={entry.id}>
                    <Box sx={entryCardSx}>
                        <Box sx={{
                            ...entryTypeBadgeSx,
                            backgroundColor: entry.type === "income" ? "#2e7d32" : "#c62828"
                            }}
                        >
                            <Typography sx={entryTypeTextSx}>
                                {entry.type}
                            </Typography>
                        </Box>

                        <Box sx={entryAmountBoxSx}>
                            <Typography sx={entryAmountTextSx}>
                                {entry.selectedCurrency}{entry.rawAmount.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </Typography>
                        </Box>

                        <Typography sx={entryDateTextSx}>
                            {entry.date}
                        </Typography>
                    </Box>
                </li>
            ))}
        </ul>
    );
}