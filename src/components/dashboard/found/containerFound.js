import React, { Component } from 'react'
import ItemFound from './itemGrid';
import ModalFound from './modalFound';

class ContainerFound extends Component {  
    state = {
        modalFound: false,
        modalInfo:'',
        data: [],
        Mensaje:''
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
        this.setState({
            modalFound: !this.state.modalFound,
            modalInfo: this.state.data[key],
            destinatario: this.state.data[key].owner
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
        console.log('enviar mensaje')
    }
    render() {
        const grid = this.state.data.map((item, key) => 
            <ItemFound key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
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
                    this.state.modalFound ? <ModalFound activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleInputChange={this.handleInputChange} /> : ''
                }
            </div>
        )
    }
    
}

export default ContainerFound;