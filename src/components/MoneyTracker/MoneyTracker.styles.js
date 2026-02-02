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
    fontSize: "1.5rem",
    fontWeight: 400,
    marginTop: "0.25rem",
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