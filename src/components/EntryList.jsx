import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Formatter from '../utils/Formatter.js';

import * as styles from "../styles/MoneyTracker.styles";

export default function EntryList({ sortedMonths, grouped, setIsConfirmOpen, setIdToDelete }) {

    return (
        <Box sx={{ maxWidth: "1000px", mx: "auto", px: 2 }}>
            {sortedMonths.map(monthKey => {
                const monthGroup = grouped[monthKey];

                return (
                    <Accordion key={monthKey} sx={styles.accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                            sx={styles.accordionSummarySx}
                        >
                            {monthGroup.monthLabel}
                        </AccordionSummary>

                        <AccordionDetails sx={styles.accordionDetailsSx}>
                            {monthGroup.entries.map(entry => (
                                <Box
                                    key={entry.id}
                                    sx={styles.entryCardSx}
                                >
                                    <Box sx={{
                                        ...styles.entryTypeBadgeSx,
                                        backgroundColor: entry.type === "income" ? "#2e7d32" : "#c62828"
                                        }}
                                    >
                                        <Typography sx={styles.entryTypeTextSx}>
                                            {entry.type}
                                        </Typography>
                                    </Box>

                                    <Box sx={styles.entryAmountBoxSx}>
                                        <Typography sx={styles.entryAmountTextSx}>
                                            {entry.selectedCurrency}{Formatter(entry.rawAmount)}
                                        </Typography>
                                    </Box>

                                    <Typography sx={styles.entryDateTextSx}>
                                        {entry.date}
                                    </Typography>

                                    <IconButton
                                        aria-label="delete"
                                        sx={{ color: "#ffffff" }}
                                        size="small"
                                        onClick={() => {
                                            setIdToDelete(entry.id);
                                            setIsConfirmOpen(true);
                                        }}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </Box>
                            ))}
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
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
}