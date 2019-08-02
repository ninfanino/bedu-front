import React, { Component } from 'react'
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
                
            }
            else{
                
            }
        })
    }
    render() {
        // const grid = this.state.data.map((item, key) => 
        //     <ItemGrid key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        // );

        const grid = this.state.data.map((item, key) => 
            <div className="MessageContainer" key={key}>
                <div className="photoMessage">
                    <img src={item.picture} alt={item.mascota} />
                </div>
                <div className="MessageBox">
                    <div className="sloganMessage">Remitente: {item.remitente}</div>
                    <div className="sloganMessage">Destinatario: {item.destinatario}</div>
                    <div className="sloganMessage">Mascota: {item.mascota}</div>
                    <div className="sloganMessage" id="messageMessage">Mensaje: {item.mensaje}</div>
                </div>
            </div>
        );
        return(
            <div className="Container">
                <div className="title">Centro de Mensajes</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>
                
                <div className="ContainerGridMessage">
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