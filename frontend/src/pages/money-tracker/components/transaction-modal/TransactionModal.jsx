import * as styles from './TransactionModal.styles.js';

import useModalForm from '@/hooks/useModalForm.js';

import { Box } from '@mui/material';

import { ModalHeader, ModalContent, ModalFooter } from './TransactionModalSections.jsx';

export default function TransactionModal({ isOpen, onClose, onSubmit }) {

    const {
        form,
        messages,
        selectedCurrency,
        handleTabValue,
        handleSelectValue,
        handleAmountKeyDown,
        handleAmountChange,
        handleDateChange,
        handleKeyDown,
        handleSend
    } = useModalForm(onSubmit, onClose);

    if (!isOpen) return null;

    return (
        <Box sx={styles.modalOverlaySx}>
            <Box
                sx={styles.modalBoxSx}
                onKeyDown={handleKeyDown}
                tabIndex={0} // Listens for key events when the modal is focused
            >
                <ModalHeader
                    form={form}
                    handleTabValue={handleTabValue}
                    onClose={onClose}
                />

                <ModalContent
                    state={{
                        form,
                        messages,
                        selectedCurrency
                    }}
                    handlers={{
                        handleSelectValue,
                        handleAmountKeyDown,
                        handleAmountChange,
                        handleDateChange
                    }}
                />

                <ModalFooter
                    type={form.type}
                    handleSend={handleSend}
                />
            </Box>
        </Box>
    );
}