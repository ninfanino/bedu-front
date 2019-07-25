import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Container from '../components/dashboard/container';
import Ads from '../components/dashboard/ads';


class Dashboard extends Component {
    
    render() {
        
        if(!sessionStorage.getItem('user')) {
            return <Redirect to='/home' />
        }
        return(
            <div className="Dashboard">
            <MenuDashboard/>
            <Container
                user={this.props.user}
                petName={this.props.petName}
                petAge={this.props.petAge}
                petRace={this.props.petRace}
                petCertificate={this.props.petCertificate}
                petEmergency={this.props.petEmergency}
                petGender={this.props.petGender}
                petAdopt={this.props.petAdopt}
                petLost={this.props.petLost}
                petFound={this.props.petFound}
                petInLove={this.props.petInLove}
                updateAttribute={this.props.updateAttribute}
                updateFlag={this.props.updateFlag}
                handlerSaveDash={this.props.handlerSaveDash}
                handlerGetImageURL={this.props.handlerGetImageURL}
            />
            <Ads/>
        </div>
        )
    }
}

export default Dashboard