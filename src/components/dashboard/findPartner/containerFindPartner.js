import React, { Component } from 'react'
import ItemFindPartner from './itemGrid';
import ModalFindPartner from './modalFindPartner';

class containerFindPartner extends Component {
    
    state = {
        modalFindPartner: false
    }
    handleOpenModal = (e) => {
        this.setState({modalFindPartner: !this.state.modalFindPartner})
    }
    handleCloseModal = (e) => {
        this.setState({modalFindPartner: false})
    }

    render() {
        
        const grid = [];
        for(let i = 0; i < 9; i++) {
            grid.push(<ItemFindPartner key={i} handleOpenModal={this.handleOpenModal} />);
        }
        return(
            <div className="Container">
                <div className="title">encuentra pareja</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
                {
                    this.state.modalFindPartner ? <ModalFindPartner handleClick={this.handleCloseModal}/> : ''
                }
                
            </div>
        )
    }
    
}

export default containerFindPartner;