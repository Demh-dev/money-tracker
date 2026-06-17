// Entry List Container
export const entryListCardSx = {
    maxWidth: '1000px',
    mx: 'auto',
};

// Accordion
export const accordionSx = {
    backgroundColor: '#111122',
    color: 'rgba(255, 255, 255, 0.85)',

    mb: 1.6,
    boxShadow: 'none',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    overflow: 'hidden',

    '&:before': {
        display: 'none', // Removes MUI's default top divider line between accordions
    },
};

export const accordionSummarySx = {
    px: { xs: 2, sm: 3 },
    py: 1,

    borderLeft: '3px solid #a78bfa',

    '&.Mui-expanded': {
        minHeight: 'unset',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0',
    },
    '&:hover': {
        backgroundColor: 'rgba(167, 139, 250, 0.04)',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: 'rgba(255, 255, 255, 0.3)',
    },
};

export const accordionMonthLabelSx = {
    fontSize: { xs: '0.9rem', sm: '1.16rem' },
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.85)',
};

export const accordionMonthNetSx = (netWorth) => ({
    fontSize: '1rem',
    fontWeight: 600,
    color: netWorth >= 0 ? '#4ade80' : '#f87171',
    mr: 1,
});

export const accordionDetailsSx = {
    px: { xs: 0.6, sm: 2 },
    py: 1.6,
    backgroundColor: '#0d0d1f',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
};

// Entry Row
export const entryCardSx = {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 1, sm: 2 },

    px: { xs: 1.4, sm: 2 },
    py: { xs: 1.6, sm: 1.2 },

    backgroundColor: '#13132a',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',

    transition: 'border-color 0.15s ease',
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
};

export const entryTypeDotSx = (type) => ({
    width: { xs: '8px', sm: '12px' },
    height: { xs: '8px', sm: '12px' },
    borderRadius: '50%',
    flexShrink: 0,
    backgroundColor: type === 'income' ? '#4ade80' : '#f87171',
});

export const entryTypeLabelSx = (type) => ({
    fontSize: { xs: '0.76rem', sm: '0.88rem' },
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    minWidth: { xs: '57px', sm: '70px' },
    color: type === 'income' ? '#4ade80' : '#f87171',
});

export const entryAmountTextSx = {
    fontSize: { xs: '0.9rem', sm: '1.1rem' },
    fontWeight: 600,
    letterSpacing: '0.02rem',
    color: 'rgba(255, 255, 255, 0.88)',
};

export const entryDateTextSx = {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    color: 'rgba(255, 255, 255, 0.3)',
    ml: 'auto',
};

export const entryDeleteButtonSx = {
    color: 'rgba(255, 255, 255, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '6px',
    padding: '4px',
    transition: 'all 0.15s ease',

    '&:hover': {
        color: '#f87171',
        borderColor: 'rgba(248, 113, 113, 0.3)',
        backgroundColor: 'rgba(248, 113, 113, 0.08)',
    },
};

// Monthly Summary
export const entryMonthlyAmountBoxSx = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    px: { xs: 0.1, sm: 2 },
    py: 1.6,
    mt: 1.6,

    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
};

export const monthlySummaryValueSx = {
    fontSize: { xs: '0.9rem', sm: '1.2rem' },
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    mb: '-2px',
};

export const monthlySummaryLabelSx = (type) => ({
    fontSize: { xs: '0.88rem', sm: '1.2rem' },
    fontWeight: 600,
    color: type === 'income'
        ? '#4ade80'
        : type === 'expense'
            ? '#f87171'
            : '#a78bfa',
});