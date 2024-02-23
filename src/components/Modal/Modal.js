import React from 'react';
import Modal from 'react-modal';
import { ButtonClose, IconClose, ModalCar, customStyles } from './Modal.styled';

Modal.setAppElement('#root');

const ModalWindow = ({ children, isOpen, onRequestClose }) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <ModalCar
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <ButtonClose onClick={onRequestClose}>
        <IconClose name="icon-cross" />
      </ButtonClose>
      {children}
    </ModalCar>
  );
};

export default ModalWindow;




