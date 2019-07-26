import React from 'react'

const ModalLike = (props) => {
    const { modalInfo, handleInputChange, handleSendMessage, activeBtn } = props
    return(
        <div className="ModalBox dashboard">  
            <div className="Modal">
                    <button 
                        className="Modal-close"
                        onClick={props.handleClick}
                    > 
                        x
                    </button>       
                <div className="ModalContent">
                    <div className="photoModal">
                        <img src={modalInfo.picture} alt={modalInfo.name} />
                    </div>

                    <div className="photoDetails">
                        <div>
                            <div className="photoName">{modalInfo.name}</div>
                            <div className="photoInfo">
                                Edad: {modalInfo.age} años <br/>
                                Raza: {modalInfo.race} <br/>
                                Genero: {modalInfo.gender}
                            </div>
                        </div>
                        <div>
                            
                            <textarea className="photoMessage" placeholder="Envia un mensaje" name="Mensaje" onChange={handleInputChange}></textarea>
                            
                            <button className={activeBtn ? "btnRed" : "btnRed disabled" } onClick={handleSendMessage}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLike