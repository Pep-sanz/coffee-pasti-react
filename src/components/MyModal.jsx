import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const MyModal = ({ isOpen, onClose, modalBody }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent className="custom-modal-content">
        <ModalBody>{modalBody}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
