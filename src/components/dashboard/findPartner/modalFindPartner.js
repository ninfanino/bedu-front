import React from 'react'

const ModalFindPartner = (props) => (
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
                    <img src="../images/adopciones1.jpg" alt="Dog" />
                </div>

                <div className="photoDetails">
                    <div>
                        <div className="photoName">Nombre perro</div>
                        <div className="photoInfo">
                            Edad: 2 años <br/>
                            Raza: Pastor alemán <br/>
                            Genero: Macho
                        </div>
                    </div>
                    <div>
                        <button className="photoLike">
                            <img src="../images/icon-dates.png" alt="Dog" width={30} />
                        </button>
                        <textarea className="photoMessage" placeholder="Envia un mensaje"></textarea>
                        <button className="btnRed">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ModalFindPartner