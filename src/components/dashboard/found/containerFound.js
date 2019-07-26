import React, { Component } from 'react'
import ItemGrid from '../general/itemGrid';
import Modal from '../general/modal';

class ContainerFound extends Component {  
    state = {
        modalFound: false,
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
            modalFound: !this.state.modalFound,
            modalInfo: this.state.data[key],
            destinatario: this.state.data[key].owner,
            mascota: this.state.data[key].name
        })
    }
    handleCloseModal = (e) => {
        this.setState({
            modalFound: false,
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
        fetch('http://localhost:3001/found')
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
                console.log('Mensaje enviado')
            }
            else{
                console.log('Error')
            }
        })
    }
    render() {
        const grid = this.state.data.map((item, key) => 
            <ItemGrid key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        );
        return(
            <div className="Container">
                <div className="title">perros encontrados</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
                {
                    this.state.modalFound ? <Modal activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleInputChange={this.handleInputChange} /> : ''
                }
            </div>
        )
    }
    
}

export default ContainerFound;