// Entry Card Container
export const entryListCardSx = {
    maxWidth: "1000px",
    mx: "auto",
    px: 2,
};

// Accordion Container
export const accordionSx = {
    backgroundColor: "#454545",
    color: "#fff",

    mb: 2,
    boxShadow: "none",
};
export const accordionSummarySx = {
    px: 4,
    py: 1.5,

    fontWeight: 700,
    fontSize: "1.2rem",

    "&.Mui-expanded": {
        minHeight: "unset",
    },
    "& .MuiAccordionSummary-content": {
        margin: 0,
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
        margin: 0,
    },
    "&:hover": {
        backgroundColor: "#3e3e3e",
    },

    "& .MuiAccordionSummary-expandIconWrapper": {
        color: "#fff",
    },
};
export const accordionDetailsSx = {
    px: 0,
    py: 2,
    backgroundColor: "#5b5b5b",
};

// Entries Card Container
export const entryCardSx = {
    display: "flex",
    alignItems: "center",

    px: 2,
    py: 1,
    mb: 2,
    mx: "auto",

    backgroundColor: "#444444",
    borderRadius: 3,

    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",

    maxWidth: 420,
    width: "100%",

    gap: 4,
};

// Entry Type
export const entryTypeBadgeSx = (type) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: type === "expense" ? "#c62828" : "#2e7d32",
    borderRadius: "999px",

    minWidth: "5rem",
    padding: "0.25rem 0.5rem",
});
export const entryTypeTextSx = {
    color: "#fff",
    fontWeight: 600,
    fontSize: "0.80rem",
    textTransform: "uppercase",
};

// Entry Amount
export const entryAmountTextSx = {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
};

// Entry Date
export const entryDateTextSx = {
    color: "#b0b0b0",
};

// Delete Button
export const entryDeleteButtonSx = {
    color: "#fff",
};

// Entry Monthly Amounts
export const entryMonthlyAmountBoxSx = {
    display: "flex",
    alignItems: "center",
    
    justifyContent: "space-around",

    gap: 8,

    px: 3,
    py: 2,
    mt: 4,
};