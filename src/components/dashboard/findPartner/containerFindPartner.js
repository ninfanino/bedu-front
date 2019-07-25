import React, { Component } from 'react'
import ItemFindPartner from './itemGrid';
import ModalFindPartner from './modalFindPartner';

class containerFindPartner extends Component {  
    state = {
        modalFindPartner: false,
        modalInfo:'',
        like:false,
        data: []
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
        this.setState({
            modalFindPartner: !this.state.modalFindPartner,
            modalInfo: this.state.data[key]
        })
    }
    handleCloseModal = (e) => {
        this.setState({
            modalFindPartner: false,
            modalInfo:'',
            like:false
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
                    this.state.modalFindPartner ? <ModalFindPartner handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} handleLike={this.handleLike} like={this.state.like} handleInputChange={this.handleInputChange} /> : ''
                }
                
            </div>
        )
    }
    
}

export default containerFindPartner;