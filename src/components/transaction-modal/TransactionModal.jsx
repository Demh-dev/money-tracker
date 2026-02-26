import * as styles from './TransactionModal.styles';

import useModalForm from '../../hooks/useModalForm';

import { Box } from '@mui/material';

import { ModalHeader, ModalContent, ModalFooter } from './TransactionModalSections';

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
                tabIndex={0}
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
                    handleSend={handleSend}
                />
            </Box>
        </Box>
    );
}