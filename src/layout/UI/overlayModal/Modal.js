import React from 'react';
import Classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => <div className={Classes.backdrop} onClick={props.onClick}> </div>
const ModalOverlay = (props) =>   <div className={Classes.modal}>{props.children}</div> 

const Modal = (props) =>{
    return(
        <>
          {ReactDOM.createPortal(<Backdrop onClick={props.onClick}></Backdrop>, document.getElementById('overlay'))}
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay'))}
        </>
    )
}

export default Modal;