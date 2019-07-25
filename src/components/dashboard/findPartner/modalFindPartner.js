import React from 'react'

const ModalFindPartner = (props) => {
    const { modalInfo, handleLike, like, handleInputChange } = props
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
                            <button className="photoLike" onClick={handleLike}>
                                {
                                    like ? <img src="../images/icon-dates-hover.png" alt="Dog" width={30} /> :
                                    <img src="../images/icon-dates.png" alt="Dog" width={30} />
                                }
                                
                            </button>
                            <textarea className="photoMessage" placeholder="Envia un mensaje" name="Mensaje" onChange={handleInputChange}></textarea>
                            <button className="btnRed">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFindPartner