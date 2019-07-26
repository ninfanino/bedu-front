import React, { Component } from 'react'
import ItemGrid from '../general/itemGrid';
import Modal from '../general/modal';

class ContainerAdoptions extends Component {  
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
        fetch('http://localhost:3001/adoption')
        .then(response => response.json())
        .then(data=> {
          this.setState({
            data: data
          });
          
        });
    };
    handleSendMessage = () => {
        console.log('Mensaje enviado')
    }
    render() {
        const grid = this.state.data.map((item, key) => 
            <ItemGrid key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        );
        return(
            <div className="Container">
                <div className="title">adopciones</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
                {
                    this.state.modalAdoptions ? <Modal activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleInputChange={this.handleInputChange} /> : ''
                }
            </div>
        )
    }
    
}

export default ContainerAdoptions;