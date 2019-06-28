import React from 'react';

/****
 * Necesita conectarse al back
 ***/

var found = [
    {
        path:     "/images/slidder1.jpg",
        address:  "Zapopan, JAL",
        phone:      "3331529751"
    },
    {
        path: "/images/slidder2.jpg",
        address:  "Guadalajara, JAL",
        phone:      "3238951365"
    },
    {
        path: "/images/slidder3.jpg",
        address:  "Tonalá, JAL",
        phone:      "3326598512"
    },
    {
        path: "/images/slidder4.jpg",
        address:  "Zapopan, JAL",
        phone:      "3314589654"
    }
]

const PerrosEncontrados = () => {

    return (
        <div className="PerrosEncontrados">
            <div className="title">
                perros encontrados
            </div>
            <div className="lineGreen"></div>
            <div className="slogan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div className="PerrosEncontradosContainer">
                <div className="glide" id="found">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                        {
                            found.map((item, i) => 
                                <div className="glide__slide PerroEncontradoItem" key={i}>
                                    <img src={item.path} alt={item.address} className="PerroEncontradoImg" />
                                    <div className="mask">
                                        <img src="/images/icon-location.png" className="iconLocation" alt="icon"/>
                                        <div className="addressLocation">
                                            {item.address}<br/>{item.phone}
                                        </div>
                                    </div>
                                </div>
                            )
                        }   
                        </ul>
                    </div>
                </div>                               
            </div>
        </div>
)}

export default PerrosEncontrados