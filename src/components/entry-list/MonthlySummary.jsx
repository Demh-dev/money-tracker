import * as styles from "./EntryList.styles.js";

import Formatter from "../../utils/FormatterAmount.js";

import { Box, Typography } from "@mui/material";

export default function MonthlySummary({ monthGroup }) {
    return (
        <Box sx={styles.entryMonthlyAmountBoxSx}>
            <Typography variant="h6">
                Income: L{Formatter(monthGroup.income)}
            </Typography>
            <Typography variant="h6">
                Expenses: L{Formatter(monthGroup.expenses)}
            </Typography>
            <Typography variant="h6">
                Net Worth: L{Formatter(monthGroup.netWorth)}
            </Typography>
        </Box>
    );
}