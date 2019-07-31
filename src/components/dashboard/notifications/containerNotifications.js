import React, { Component } from 'react'
import ItemGrid from '../general/itemGrid';
import Modal from '../general/modal';
import '../checkbox.css'
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import '../upload.css'

class ContainerNotifications extends Component {  
    state = {
        modalAdoptions: false,
        modalInfo:'',
        data: [],
        Mensaje:'',
        mascota:'',
        destinatario: ''
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
        this.setState({
            modalAdoptions: !this.state.modalAdoptions,
            modalInfo: this.state.data[key],
            destinatario: this.state.data[key].owner,
            mascota: this.state.data[key].name
        })
    }
    handleCloseModal = (e) => {
        this.setState({
            modalAdoptions: false,
            modalInfo:'',
            destinatario:'',
            Mensaje:''
        })
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value,
        })
    }
    getInfo() {
        let obj = {
            email : sessionStorage.getItem('user')
        }
        fetch("http://localhost:3001/get-messages", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method : 'POST',
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data=> {
            console.log('Los mensajes: ', data)
          this.setState({
            data: data
          });
          
        });
    };
    handleSendMessage = () => {
        let newDate = new Date()
        let obj = {
            envia : sessionStorage.getItem('user'),
            like : this.state.like,
            mensaje : this.state.Mensaje,
            destinatario : this.state.destinatario,
            mascota: this.state.mascota,
            fecha: newDate
        }
        fetch("http://localhost:3001/post-message", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method : 'POST',
            body: JSON.stringify(obj)
        })
        .then(res => {
            if (res.status === 200) {
                console.log('Mensaje enviado')
            }
            else{
                console.log('Error')
            }
        })
    }
    render() {
        // const grid = this.state.data.map((item, key) => 
        //     <ItemGrid key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        // );

        const grid = this.state.data.map((item, key) => 
            <div>
                <div className="photoModal">
                    <img src={item.picture} alt={item.mascota} />
                </div>
                <h3>Remitente: {item.remitente}</h3>
                <h3>Destinatario: {item.destinatario}</h3>
                <h3>Mascota: {item.mascota}</h3>
                <h3>Mensaje: {item.mensaje}</h3>

            </div>
        );
        console.log("Entrando a notifications")
        return(
            <div className="Container">
                <div className="title">Centro de Mensajes</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>
                
                <div className="ContainerGrid">
                    { grid }
                    
                </div>
                {/* {
                    this.state.modalAdoptions ? <Modal activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleInputChange={this.handleInputChange} /> : ''
                } */}
            </div>
        )
    }
    
}

export default ContainerNotifications;