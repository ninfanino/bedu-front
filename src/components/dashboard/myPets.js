import React from 'react'
import './checkbox.css'

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import './upload.css'
import MyRegisteredPets from './general/myRegisteredPets'
import Mapa from './general/mapa'


// let  headerObj =      {
//     "access-control-allow-origin": "*",
//     "access-control-allow-credentials": "false",
//     mode: "no-cors"
// } 

const MyPets = (props) => {
    let urlImage=''
    let { handlerGetImageURL } = props 
    console.log('Mascotas en MyPets',props.registeredData )
    return(
    <div>
        <div className="title">mis mascotas</div>
        <div className="lineGreen left"></div>
        <div className="slogan">Aquí podrás ver y editar la información de las mascotas asosiadas a tu cuenta: {sessionStorage.user}</div>

        {/* <div className="containerPhotos">
            
            <div className="slidderPhotos">
                El slidder va aqui
            </div>
            <div className="addMore">
                <img src="/images/icon-add.png" width="50" alt="Add more pets" />
            </div>
        </div> */}
        <MyRegisteredPets registerData={props.registerData}/>

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
                                urlImage=res
                                handlerGetImageURL(res)
                                if (err) {
                                    console.error('XUXO-ERROR: ', err);
                                }
                            }}
                            
                            />
                        </div>
                    </div>
                    <div className="item1">
                        <input className="input big" placeholder="Nombre"
                            name="petName"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item2">
                        <input className="input" placeholder="Edad"
                            name="petAge"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item3">
                        <input className="input" placeholder="Raza"
                            name="petRace"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item4">
                        <input className="input big" placeholder="Certificado"
                            name="petCertificate"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item5">
                        <input className="input" placeholder="Emergencia"
                            name="petEmergency"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item6">
                        <input className="input" placeholder="Genero"
                            name="petGender"
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.petName}
                        />
                    </div>
                    <div className="item7">
                        <label className="itemCheck">En adopcion
                            <input type="checkbox"
                                name="petAdopt"
                                onChange={e => props.updateFlag(e.target)}
                                checked={props.petName}
                            /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item8">
                        <label className="itemCheck">Perdido
                            <input type="checkbox"
                                name="petLost"
                                onChange={e => props.updateFlag(e.target)}
                                checked={props.petLost}
                            /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item9">
                        <label className="itemCheck">Encontrado
                            <input type="checkbox"
                                name="petFound"
                                onChange={e => props.updateFlag(e.target)}
                                checked={props.petFound}
                            /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item10">
                        <label className="itemCheck">Buscando pareja
                            <input type="checkbox"
                                name="petInLove"
                                onChange={e => props.updateFlag(e.target)}
                                checked={props.petName}
                            /> 
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item11">
                        <Mapa />
                    </div>
                </div>
                <button className="btnRed" onClick={e=>props.handlerSaveDash(e,urlImage)}>Guardar</button>
                
                
            </form>
        </div>
    </div>
    )
}

export default MyPets