// Add Button
export const moneyTrackerAddFabSx = {
    position: "fixed",
    bottom: 24,
    right: 24,
    backgroundColor: "#f5c518",
    color: "#111",

    "&:hover": {
        backgroundColor: "#e0b400",
    },
};

// Header
export const moneyTrackerHeaderSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "1.5rem 1rem",
    marginBottom: "1rem",

    borderBottom: "1px solid rgb(93, 93, 93)",
};
export const moneyTrackerAmountSx = {
    fontSize: "1.6rem",
    fontWeight: 500,
    marginTop: "0.25rem",
};

// Accordion Component
export const accordionSx = {
    width: "100%",
    backgroundColor: "#454545",
    color: "#fff",
    mb: 2,
    boxShadow: "none",
};

// Accordion Header
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
};

// Accordion Body
export const accordionDetailsSx = {
    px: 0,
    py: 2,
    backgroundColor: "#5b5b5b",
};

// Entry Card Container
export const entryCardSx = {
    display: "flex",
    alignItems: "center",

    padding: "0.5rem 0.75rem",
    margin: "0 auto 1rem auto",

    backgroundColor: "#444444",
    borderRadius: "12px",

    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",

    gap: "2rem",

    maxWidth: "420px",
    width: "100%",
};

// Entry Type
export const entryTypeBadgeSx = {
    minWidth: "90px",
    padding: "0.25rem 0.5rem",

    borderRadius: "999px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
export const entryTypeTextSx = {
    color: "#fff",
    fontWeight: 600,
    fontSize: "0.80rem",
    textTransform: "uppercase",
};

// Entry Amount
export const entryAmountBoxSx = {
    flexGrow: 1,
};
export const entryAmountTextSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
};

// Entry Date
export const entryDateTextSx = {
    color: "#b0b0b0",
};

// Entry Monthly Amounts
export const entryMonthlyAmountBoxSx = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",

    gap: "2rem",

    padding: "1rem 2rem",
    marginTop: "2rem",
};
export const entryMonthlyIncomeAmountSx = {
    color: "#1bd321",
};
export const entryMonthlyExpensesAmountSx = {
    color: "#d23118",
};
export const entryMonthlyNetWorthAmountSx = {
    color: "#FFFFFF",
};

// Deletion Cancel Button
export const DeletionCancelButton = {
    borderColor: "#444",
    color: "#bbb",

    "&:hover": {
        borderColor: "#444",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    }, 
};