import * as styles from "./EntryList.styles.js";

import { formatSignedAmount } from '@/helpers/transactionData.js';

import { Box, Typography } from "@mui/material";

const SUMMARY_ITEMS = [
    { key: 'income', label: 'Income', field: 'income' },
    { key: 'expense', label: 'Expenses', field: 'expenses' },
    { key: 'net', label: 'Net', field: 'netWorth' },
];

export default function MonthlySummary({ monthGroup }) {
    return (
        <Box sx={styles.entryMonthlyAmountBoxSx}>
            {SUMMARY_ITEMS.map(({ key, label, field }) => (
                <Box key={key}>
                    <Typography sx={styles.monthlySummaryLabelSx(key)}>
                        {label}
                    </Typography>
                    <Typography sx={styles.monthlySummaryValueSx}>
                        {formatSignedAmount(monthGroup[field])}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}