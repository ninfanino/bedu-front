import React, { Component } from 'react'
import ItemGrid from '../general/itemGrid';
import Modal from '../general/modal';


class ContainerLost extends Component {  
    state = {
        modalLost: false,
        modalInfo:'',
        data: [],
        Mensaje:''
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
         this.setState({
            modalLost: !this.state.modalLost,
            modalInfo: this.state.data[key],
            destinatario: this.state.data[key].owner
        })
    }
    handleCloseModal = (e) => {
        this.setState({
            modalLost: false,
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
        console.log('perdidos')
        fetch('http://localhost:3001/lost')
        .then(response => response.json())
        .then(data=> {
          this.setState({
            data: data
          });
          
        });
    };
    handleSendMessage = () => {
        console.log('enviar mensaje')
    }
    render() {
        const grid = this.state.data.map((item, key) => 
            <ItemGrid key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        );
        return(
            <div className="Container">
                <div className="title">perros perdidos</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
                {
                    this.state.modalLost ? <Modal activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleInputChange={this.handleInputChange} /> : ''
                }
            </div>
        )
    }
    
}

export default ContainerLost;