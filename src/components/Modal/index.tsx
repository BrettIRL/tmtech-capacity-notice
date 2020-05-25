import React, { useState } from 'react';

interface ModalProps {
  buttonText: string;
  children: React.ReactNode;
}

function Modal({ buttonText, children }: ModalProps) {
  const [toggleModal, setModal] = useState(false);

  return (
    <>
      <button
        className="button is-tmtech is-medium"
        onClick={() => {
          setModal(true);
        }}
      >
        {buttonText}
      </button>
      <div className={`modal ${toggleModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content">{children}</div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModal(false)}
        ></button>
      </div>
    </>
  );
}

export default Modal;
