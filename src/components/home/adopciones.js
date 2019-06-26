import React from 'react'

/****
 * Necesita conectarse al back
 ***/

 var adopted = [
    {
       path:    "/images/adopciones1.jpg",
       dogname: "Max"
    },
    {
       path:    "/images/adopciones2.jpg",
       dogname: "Yuki"
    },
    {
       path:    "/images/adopciones3.jpg",
       dogname: "Gandalf"
    },
    {
       path:    "/images/adopciones4.jpg",
       dogname: "Marcelin"
    }
 ]

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
            {
                adopted.map((item, i) =>
                    <div className="AdopcionesItem" key={i}>
                        <img src={item.path} className="AdopcionesImg" alt={item.dogname}/>
                        <div className="AdopcionesName">
                            {item.dogname}
                        </div>
                        <div className="mask">
                            <img src="/images/icon-more.png" className="iconMore" alt="icon"/>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
)

export default Adopciones