import React from 'react';
import Modal from 'react-modal';

const CustomPromptModal = ({ isOpen, message, onCancel, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Varningsmeddelande"
    >
      <div>
        <p>{message}</p>
        <button onClick={onCancel}>Avbryt</button>
        <button onClick={onConfirm}>OK</button>
      </div>
    </Modal>
  );
}

export default CustomPromptModal;
