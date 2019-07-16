import React from 'react'
import './checkbox.css'

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import './upload.css'

let  headerObj =      {
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": "false",
    mode: "no-cors"
} 
const MyPets = (props) => (       
    <div>
        <div className="title">mis mascotas</div>
        <div className="lineGreen left"></div>
        <div className="slogan">Aquí podrás ver y editar la información de tus mascotas asosiadas a tu cuenta: {props.user}</div>

        <div className="containerPhotos">
            <div className="slidderPhotos">
                El slidder va aqui
            </div>
            <div className="addMore">
                <img src="/images/icon-add.png" width="50" alt="Add more pets" />
            </div>
        </div>

        <div className="formMyPets">
            <form>
                
                <div className="my-pets-grid-container">
                    <div className="item0">
                        <div className="addPhoto">
                        <ImagesUploader
                            //headers = {headerObj}
                            url="http://localhost:3001/image-upload"
                            optimisticPreviews
                            multiple={false}
                            onLoadEnd={(err,res) => {
                                console.log('Esta es la URL que regresa: ', res)
                                if (err) {
                                    console.error('XUXO-ERROR: ', err);
                                }
                            }}
                            
                            />
                        </div>
                    </div>
                    <div className="item1">
                        <input className="input big" placeholder="Nombre" />
                    </div>
                    <div className="item2">
                        <input className="input" placeholder="Edad" />
                    </div>
                    <div className="item3">
                        <input className="input" placeholder="Raza" />
                    </div>
                    <div className="item4">
                        <input className="input big" placeholder="Certificado" />
                    </div>
                    <div className="item5">
                        <input className="input" placeholder="Emergencia" />
                    </div>
                    <div className="item6">
                        <input className="input" placeholder="Genero" />
                    </div>
                    <div className="item7">
                        <label className="itemCheck">En adopcion
                            <input type="checkbox" /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item8">
                        <label className="itemCheck">Perdido
                            <input type="checkbox" /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item9">
                        <label className="itemCheck">Encontrado
                            <input type="checkbox" /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item10">
                        <label className="itemCheck">Buscando pareja
                            <input type="checkbox" /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <button className="btnRed">Guardar</button>
            </form>
        </div>
    </div>
)

export default MyPets