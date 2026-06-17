import MonthAccordion from './MonthAccordion.jsx';

import * as styles from "./EntryList.styles.js";

import { Box } from "@mui/material";

export default function EntryList({ sortedMonths, grouped, requestDelete }) {

    return (
        <Box sx={styles.entryListCardSx}>
            {sortedMonths.map(monthKey => {
                const monthGroup = grouped[monthKey];
                return (
                    <MonthAccordion
                        key={monthKey}
                        monthGroup={monthGroup}
                        requestDelete={requestDelete}
                    />
                );
            })}
        </Box>
    );
}