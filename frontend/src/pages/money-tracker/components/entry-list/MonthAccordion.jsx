import EntryRow from "./EntryRow.jsx";
import MonthlySummary from "./MonthlySummary.jsx";

import * as styles from "./EntryList.styles.js";

import { formatSignedAmount } from '@/helpers/transactionData.js';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

export default function MonthAccordion({ monthGroup, requestDelete }) {
    return (
        <Accordion sx={styles.accordionSx}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                sx={styles.accordionSummarySx}
            >
                <Typography sx={styles.accordionMonthLabelSx}>
                    {monthGroup.monthLabel}
                </Typography>

                <Typography sx={styles.accordionMonthNetSx(monthGroup.netWorth)}>
                    {formatSignedAmount(monthGroup.netWorth, { showPlus: true })}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={styles.accordionDetailsSx}>
                {monthGroup.entries.map(entry => (
                <EntryRow
                    key={entry.id}
                    entry={entry}
                    requestDelete={requestDelete}
                />
                ))}

                <MonthlySummary monthGroup={monthGroup}/>
            </AccordionDetails>
        </Accordion>
    );
}