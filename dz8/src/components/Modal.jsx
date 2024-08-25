import React from 'react';

const Modal = ({message, closeModal}) => {
    return (
        <div className='modal'>
            <p>{message}</p>
            <button onClick={closeModal}>закрыть</button>
        </div>
    );
};

export default Modal;