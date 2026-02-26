import EntryRow from "./EntryRow";
import MonthlySummary from "./MonthlySummary";

import * as styles from "./EntryList.styles.js";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

export default function MonthAccordion({ monthGroup, requestDelete }) {
    return (
        <Accordion sx={styles.accordionSx}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                sx={styles.accordionSummarySx}
            >
                {monthGroup.monthLabel}
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