import React from 'react'

/****
 * Necesita conectarse al back
 ***/

const Adopciones = () => (
    <div className="Adopciones">
        <div className="title">
            Adopciones
        </div>
        <div className="lineGreen"></div>
        <div className="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="AdopcionesContainer">
            <div className="AdopcionesItem">
                <img src="/images/adopciones1.jpg" className="AdopcionesImg" />
                <div className="AdopcionesName">
                    Max
                </div>
                <div className="mask">
                    <img src="/images/icon-more.png" className="iconMore" />
                </div>
            </div>
            <div className="AdopcionesItem">
                <img src="/images/adopciones2.jpg" className="AdopcionesImg" />
                <div className="AdopcionesName">
                    Yuki
                </div>
                <div className="mask">
                    <img src="/images/icon-more.png" className="iconMore" />
                </div>
            </div>
            <div className="AdopcionesItem">
                <img src="/images/adopciones3.jpg" className="AdopcionesImg" />
                <div className="AdopcionesName">
                    Gandalf
                </div>
                <div className="mask">
                    <img src="/images/icon-more.png" className="iconMore" />
                </div>
            </div>
            <div className="AdopcionesItem">
                <img src="/images/adopciones4.jpg" className="AdopcionesImg" />
                <div className="AdopcionesName">
                    Marcelin
                </div>
                <div className="mask">
                    <img src="/images/icon-more.png" className="iconMore" />
                </div>
            </div>
        </div>
    </div>
)

export default Adopciones