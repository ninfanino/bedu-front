import React, { Component } from 'react'
import ItemFindPartner from './itemGrid';

class containerFindPartner extends Component {
    render() {
        const grid = [];
        for(let i = 0; i < 9; i++) {
            grid.push(<ItemFindPartner/>);
        }
        return(
            <div className="Container">
                <div className="title">encuentra pareja</div>
                <div className="lineGreen left"></div>
                <div className="slogan">Lorem ipsum</div>

                <div className="ContainerGrid">
                    { grid }
                </div>
            </div>
        )
    }
    
}

export default containerFindPartner;