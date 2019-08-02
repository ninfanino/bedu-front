import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerAdoptions from '../components/dashboard/adoptions/containerAdoptions';



class AdoptionsContainer extends Component {
    render() {
        if(!sessionStorage.getItem('user')) {
            return <Redirect to='/home' />
        }
        return(
        <div className="Dashboard">
            <MenuDashboard/>
            <ContainerAdoptions/>
            <Ads/>
        </div>
        )
    }
}

export default AdoptionsContainer