import React, { Component } from 'react'
import ItemFound from './itemGrid';
/*import ItemFindPartner from './itemGrid';
import ModalFindPartner from './modalFindPartner';*/

class ContainerFound extends Component {  
    state = {
        data: []
    }
    componentDidMount(){
        this.getInfo()
    }
    handleOpenModal = (key) => {
        console.log(key)
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
                
            </div>
        )
    }
    
}

export default ContainerFound;