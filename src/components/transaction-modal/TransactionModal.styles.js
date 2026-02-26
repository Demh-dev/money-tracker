// Modal Overlay and Box
export const modalOverlaySx = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "fixed",
    inset: 0,
    zIndex: "1300",

    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(2px)",
};
export const modalBoxSx = {
    position: "relative",
    display: "flex",
    flexDirection: "column",

    background: "#1e1e1e",
    color: "#eaeaea",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.6)",
    padding: "2rem",
    paddingTop: "5rem",
    borderRadius: "16px",

    width: "95%",
    maxWidth: "520px",
    minHeight: "420px",
};

// Modal Header
export const modalHeaderSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",

    top: "0",
    left: "0",
    padding: "1rem 1rem",

    width: "100%",
    borderBottom: "1px solid #2a2a2a",
};

// Tabs
export const modalTabsSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "#f5c518",
    },
};
export const modalTabSx = {
    color: "#b0b0b0",
    "&.Mui-selected": {
        color: "#f5c518",
    },
};

// Close Modal Button
export const modalCloseButtonSx = {
    backgroundColor: "#434343",
    color: "#cfcfcf",
    "&:hover": {
        backgroundColor: "#484848",
        color: "#fbfbfb",
    },
};

// Modal Content
export const modalContentSx = {
    display: "flex",
    flexDirection: "column",
    flex: 1,

    padding: "1.5rem",
    gap: "1.25rem",
};
export const modalFieldGroupSx = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};

// Currency Select
export const modalCurrencyFormControlSx = {
    minWidth: 120,
    
    "& .MuiInputBase-root": {
        backgroundColor: "#2a2a2a",
        color: "#eaeaea",
    },

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3a3a3a",
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#454545",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#848484",
    },

    "& .MuiSelect-icon": {
        color: "#b0b0b0",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiSelect-icon": {
        color: "#eaeaea",
    },
};
export const modalCurrencyInputLabelSx = {
    color: "#b0b0b0",
    "&.Mui-focused": {
        color: "#eaeaea",
    },
};
export const modalCurrencySelectSx = {
    backgroundColor: "#2a2a2a",
    color: "#eaeaea",
    border: "none",
    "& .MuiMenu-list": {
        padding: 0,
    }
};
export const modalCurrencyMenuItemSx = {
    backgroundColor: "#2a2a2a",
    color: "#eaeaea",

    "&.Mui-selected": {
        backgroundColor: "#3a3a3a",
    },

    "&.Mui-selected:hover": {
        backgroundColor: "#454545",
    },

    "&:hover": {
        backgroundColor: "#333333",
    },
};

// Input Currency Amount
export const modalAmountTypographySx = {
    color: "#eaeaea",
    fontWeight: 500,
    opacity: 1,
};
export const modalAmountTextFieldSx = {
    "& .MuiInputBase-root": {
        backgroundColor: "#2a2a2a",
        color: "#eaeaea",
    },

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3a3a3a",
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#454545",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" : {
        borderColor: "#848484",
    },

    "& .MuiInputLabel-root": {
        color: "#b0b0b0",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "#eaeaea",
    },
};

// Messages
export const modalMessagesSx = {
    backgroundColor: "#dcb423",
    color: "#000000",
    "& .MuiAlert-icon": {
        color: "#000000",
    },
};

// Date Picker
export const modalDatePickerTextFieldSx = {
    "& .MuiPickersInputBase-root": {
        backgroundColor: "#2a2a2a",
        color: "#eaeaea",
    },

    "& .MuiPickersOutlinedInput-notchedOutline": {
        borderColor: "#3a3a3a",
    },

    "& .MuiPickersOutlinedInput-root:hover .MuiPickersOutlinedInput-notchedOutline": {
        borderColor: "#454545",
    },

    "&& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
        borderColor: "#848484",
    },

    "& .MuiInputLabel-root": {
        color: "#b0b0b0",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "#eaeaea",
    },

    "& .MuiIconButton-root": {
        color: "#b0b0b0",
    },

    "& .MuiIconButton-root:hover": {
        color: "#eaeaea",
        backgroundColor: "#2a2a2a",
    },
};
export const modalDatePickerPopperSx = {
    "& .MuiPaper-root": {
        backgroundColor: "#1e1e1e",
        color: "#eaeaea",
    },

    "& .MuiPickersCalendarHeader-root": {
        color: "#eaeaea",
    },

    "& .MuiIconButton-root": {
        color: "#b0b0b0",
    },

    "& .MuiIconButton-root:hover": {
        backgroundColor: "#2a2a2a",
    },

    "& .MuiPickersDay-root": {
        color: "#eaeaea",
    },

    "& .MuiPickersDay-root:hover": {
        backgroundColor: "#2a2a2a",
    },

    "&& .MuiPickersDay-root.Mui-selected": {
        backgroundColor: "#f5c518",
        color: "#111",
    },

    "& .MuiPickersDay-root.Mui-selected:hover": {
        backgroundColor: "#e0b400",
    },

    "&& .MuiPickersDay-today": {
        backgroundColor: "#2a2a2a",
        borderColor: "#f5c518",
    },

    "& .MuiDayCalendar-weekDayLabel":
    {
        color: "#ffffff",
        fontWeight: 600,
    },
};
export const modalDatePickerLayoutSx = {
    "& .MuiYearCalendar-root": {
        backgroundColor: "#1e1e1e",
    },

    "& .MuiYearCalendar-root::-webkit-scrollbar": {
        width: "0",
    },
};
export const modalDatePickerYearButtonSx = {
    color: "#eaeaea",
    
    "&:hover": {
        backgroundColor: "#2a2a2a",
    },

    "&&.Mui-selected": {
        backgroundColor: "#f5c518",
        color: "#111",
    },

    "&.Mui-selected:hover": {
        backgroundColor: "#e0b400",
    },

    "&[aria-current='date']": {
        backgroundColor: "#2a2a2a",
    },
};

// Modal Footer
export const modalFooterSx = {
    display: "flex",
    justifyContent: "flex-start",
};
export const modalSendButtonSx = {
    backgroundColor: "#f5c518",
    color: "#111",
    fontWeight: "500",

    "&:hover": {
        backgroundColor: "#e0b400",
    },
};