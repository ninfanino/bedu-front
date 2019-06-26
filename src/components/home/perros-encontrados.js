import React from 'react'

/****
 * Necesita conectarse al back
 ***/

const PerrosEncontrados = () => (
    <div className="PerrosEncontrados">
        <div className="title">
            perros encontrados
        </div>
        <div className="lineGreen"></div>
        <div className="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="PerrosEncontradosContainer">
            <div className="PerroEncontradoItem">
                <img src="/images/slidder1.jpg" className="PerroEncontradoImg" alt="Encontrados" />
                <div className="mask">
                    <img src="/images/icon-location.png" className="iconLocation" alt="Encontrados" />
                    <div className="addressLocation">
                        Zapopan, Jal <br/>3311771791
                    </div>
                </div>
            </div>

            <div className="PerroEncontradoItem">
                <img src="/images/slidder2.jpg" className="PerroEncontradoImg" alt="Encontrados" />
                <div className="mask">
                    <img src="/images/icon-location.png" className="iconLocation" alt="Encontrados" />
                    <div className="addressLocation">
                        Zapopan, Jal <br/>3311771791
                    </div>
                </div>
            </div>

            <div className="PerroEncontradoItem">
                <img src="/images/slidder3.jpg" className="PerroEncontradoImg" alt="Encontrados" />
                <div className="mask">
                    <img src="/images/icon-location.png" className="iconLocation" alt="Encontrados" />
                    <div className="addressLocation">
                        Zapopan, Jal <br/>3311771791
                    </div>
                </div>
            </div>

            <div className="PerroEncontradoItem">
                <img src="/images/slidder4.jpg" className="PerroEncontradoImg" alt="Encontrados" />
                <div className="mask">
                    <img src="/images/icon-location.png" className="iconLocation" alt="Encontrados" />
                    <div className="addressLocation">
                        Zapopan, Jal <br/>3311771791
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default PerrosEncontrados