import React, { Component } from 'react'
import ItemFindPartner from './itemGrid';
import ModalFindPartner from './modalFindPartner';

class containerFindPartner extends Component {  
    state = {
        modalFindPartner: false,
        modalInfo:'',
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
            modalInfo:''
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
                    this.state.modalFindPartner ? <ModalFindPartner handleClick={this.handleCloseModal} modalInfo={this.state.modalInfo} /> : ''
                }
                
            </div>
        )
    }
    
}

export default containerFindPartner;