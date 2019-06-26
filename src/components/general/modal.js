import React from 'react'
import './modal.css'

function Modal(props) {
    const { type } = props
    
    return(
        <div className="ModalBox">
            <div className="Modal">
                <div className="ModalHeader">
                    <div className="ModalName">
                        { type === 'registro' ? 'Registro' : 'Inicia sesion' }
                    </div>
                    <button 
                        className="Modal-close"
                        onClick={props.handleClick}
                    > 
                        x
                    </button>
                </div>
                <div className="ModalContent">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;