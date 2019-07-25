import React, { Component } from 'react'
import ItemFindPartner from './itemGrid';
import ModalFindPartner from './modalFindPartner';

class containerFindPartner extends Component {  
    state = {
        modalFindPartner: false,
        modalInfo:'',
        like:false,
        data: [],
        Mensaje:''
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
        this.setState({
            modalFindPartner: !this.state.modalFindPartner,
            modalInfo: this.state.data[key],
            destinatario: this.state.data[key].owner
        })
    }
    handleCloseModal = (e) => {
        this.setState({
            modalFindPartner: false,
            modalInfo:'',
            like:false,
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
        fetch('http://localhost:3001/lovers')
        .then(response => response.json())
        .then(data=> {
          this.setState({
            data: data
          });
          
        });
        
      };

    handleLike = () => {
        this.setState({
            like: !this.state.like
        })
    }

    handleSendMessage = () => {
        let envia = sessionStorage.getItem('user');
        let like = this.state.like;
        let mensaje = this.state.Mensaje;
        let destinatario = this.state.destinatario;
        
        /* aqui se manda al endpoint */
    }

    render() {
        const grid = this.state.data.map((item, key) => 
            <ItemFindPartner key={key} handleOpenModal={() => {this.handleOpenModal(key)}} item={item}/>
        );
        return(
            <div className="Container">
                <div className="title">encuentra pareja</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
                {
                    this.state.modalFindPartner ? <ModalFindPartner activeBtn={this.state.Mensaje} handleSendMessage={this.handleSendMessage} handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleLike={this.handleLike} like={this.state.like} handleInputChange={this.handleInputChange} /> : ''
                }
                
            </div>
        )
    }
    
}

export default containerFindPartner;