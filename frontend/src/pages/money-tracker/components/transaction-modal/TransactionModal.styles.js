// Overlay
export const modalOverlaySx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'fixed',
    inset: 0,
    zIndex: 1300,

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: { xs: 'none', md: 'blur(2px)' },
};

// Modal Box
export const modalBoxSx = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '#111122',
    color: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',

    width: '95%',
    maxWidth: '480px',
};

// Modal Header
export const modalHeaderSx = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    px: 2,
    backgroundColor: '#0f0f1e',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
};

// Tabs
export const modalTabsSx = {
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent', // Handled per-tab via selected color
    },
};

export const modalTabSx = (type, activeType) => {
    const isActive = type === activeType;
    const activeColor = type === 'income' ? '#4ade80' : '#f87171';

    return {
        color: isActive ? activeColor : 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        textTransform: 'none',
        letterSpacing: '0.04rem',
        minHeight: '60px',
        pb: '10px',

        borderBottom: isActive
            ? `2px solid ${activeColor}`
            : '2px solid transparent',

        transition: 'color 0.15s ease, border-color 0.15s ease',

        '&:hover': {
            color: isActive ? activeColor : 'rgba(255, 255, 255, 0.6)',
        },

        '&.Mui-selected': {
            color: activeColor,
        },
    };
};

// Close Button
export const modalCloseButtonSx = {
    width: '36px',
    height: '36px',
    minHeight: 'unset',
    borderRadius: '6px',
    mb: '12px',

    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: 'rgba(255, 255, 255, 0.4)',
    boxShadow: 'none',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
    },
};

// Modal Content
export const modalContentSx = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    px: 3,
    pt: 4,
    pb: 3,
    gap: 2,
};

export const modalFieldGroupSx = {
    display: 'flex',
    flexDirection: 'column',
};

// Currency Select
export const modalCurrencyFormControlSx = {
    minWidth: 120,

    '& .MuiInputBase-root': {
        backgroundColor: '#0d0d1e',
        color: 'rgba(255, 255, 255, 0.85)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '& .MuiSelect-icon': {
        color: 'rgba(255, 255, 255, 0.3)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiSelect-icon': {
        color: 'rgba(255, 255, 255, 0.6)',
    },
};

export const modalCurrencyInputLabelSx = {
    color: 'rgba(255, 255, 255, 0.35)',
    fontSize: '0.82rem',
    '&.Mui-focused': {
        color: 'rgba(255, 255, 255, 0.6)',
    },
};

export const modalCurrencySelectSx = {
    backgroundColor: '#0d0d1e',
    color: 'rgba(255, 255, 255, 0.85)',
    border: 'none',
    '& .MuiMenu-list': {
        padding: 0,
    },
};

export const modalCurrencyMenuItemSx = {
    backgroundColor: '#0d0d1e',
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.85rem',

    '&.Mui-selected': {
        backgroundColor: '#16162a',
    },
    '&.Mui-selected:hover': {
        backgroundColor: '#1c1c35',
    },
    '&:hover': {
        backgroundColor: '#13132a',
    },
};

// Amount Field
export const modalAmountTypographySx = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '0.85rem',
};

export const modalAmountTextFieldSx = (type) => {
    const focusColor = type === 'income'
        ? 'rgba(74, 222, 128, 0.5)'
        : 'rgba(248, 113, 113, 0.5)';

    return {
        '& .MuiInputBase-root': {
            backgroundColor: '#0d0d1e',
            color: 'rgba(255, 255, 255, 0.85)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: focusColor,
        },
        '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.35)',
            fontSize: '0.82rem',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.6)',
        },
    };
};

// Date Picker
export const modalDatePickerTextFieldSx = {
    '& .MuiPickersInputBase-root': {
        backgroundColor: '#0d0d1e',
        color: 'rgba(255, 255, 255, 0.85)',
    },
    '& .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& .MuiPickersOutlinedInput-root:hover .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.35)',
        fontSize: '0.82rem',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiIconButton-root': {
        color: 'rgba(255, 255, 255, 0.3)',
    },
    '& .MuiIconButton-root:hover': {
        color: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
};

export const modalDatePickerPopperSx = {
    '& .MuiPaper-root': {
        backgroundColor: '#111122',
        color: 'rgba(255, 255, 255, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    '& .MuiPickersCalendarHeader-root': {
        color: 'rgba(255, 255, 255, 0.85)',
    },
    '& .MuiIconButton-root': {
        color: 'rgba(255, 255, 255, 0.4)',
    },
    '& .MuiIconButton-root:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    },
    '& .MuiPickersDay-root': {
        color: 'rgba(255, 255, 255, 0.75)',
        backgroundColor: 'transparent',
    },
    '& .MuiPickersDay-root:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    },
    '&& .MuiPickersDay-root.Mui-selected': {
        backgroundColor: '#a78bfa',
        color: '#fff',
    },
    '& .MuiPickersDay-root.Mui-selected:hover': {
        backgroundColor: '#9061f9',
    },
    '&&  .MuiPickersDay-today': {
        backgroundColor: 'rgba(167, 139, 250, 0.1)',
        borderColor: '#a78bfa',
    },
    '& .MuiDayCalendar-weekDayLabel': {
        color: 'rgba(255, 255, 255, 0.4)',
        fontWeight: 500,
    },
};

export const modalDatePickerLayoutSx = {
    '& .MuiYearCalendar-root': {
        backgroundColor: '#111122',
    },
    '& .MuiYearCalendar-root::-webkit-scrollbar': {
        width: '0',
    },
};

export const modalDatePickerYearButtonSx = {
    color: 'rgba(255, 255, 255, 0.75)',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    },
    '&&.Mui-selected': {
        backgroundColor: '#a78bfa',
        color: '#fff',
    },
    '&.Mui-selected:hover': {
        backgroundColor: '#9061f9',
    },
    '&[aria-current="date"]': {
        backgroundColor: 'rgba(167, 139, 250, 0.1)',
    },
};

// Messages
export const modalMessagesSx = {
    backgroundColor: 'rgba(167, 139, 250, 0.1)',
    color: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid rgba(167, 139, 250, 0.2)',
    '& .MuiAlert-icon': {
        color: '#a78bfa',
    },
};

// Footer
export const modalFooterSx = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    px: 3.5,
    py: 2,
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
};

export const modalFooterHintSx = {
    fontSize: '0.72rem',
    color: 'rgba(255, 255, 255, 0.2)',
    pointerEvents: 'none',
    userSelect: 'none',
};

export const modalSendButtonSx = (type) => {
    const isIncome = type === 'income';
    const color = isIncome ? '#4ade80' : '#f87171';
    const bg = isIncome
        ? 'rgba(74, 222, 128, 0.12)'
        : 'rgba(248, 113, 113, 0.12)';
    const bgHover = isIncome
        ? 'rgba(74, 222, 128, 0.22)'
        : 'rgba(248, 113, 113, 0.22)';
    const borderColor = isIncome
        ? 'rgba(74, 222, 128, 0.3)'
        : 'rgba(248, 113, 113, 0.3)';

    return {
        backgroundColor: bg,
        color,
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        px: 2.5,
        py: 1,
        fontSize: '0.82rem',
        fontWeight: 500,
        textTransform: 'none',
        boxShadow: 'none',

        '&:hover': {
            backgroundColor: bgHover,
            boxShadow: 'none',
        },
    };
};