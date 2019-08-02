import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerFound from '../components/dashboard/found/containerFound';


class FoundContainer extends Component {
    render() {
        if(!sessionStorage.getItem('user')) {
            return <Redirect to='/home' />
        }
        return(
        <div className="Dashboard">
            <MenuDashboard/>
            <ContainerFound/>
            <Ads/>
        </div>
        )
    }
}

export default FoundContainer