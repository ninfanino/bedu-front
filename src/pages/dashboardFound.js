import React from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerFound from '../components/dashboard/found/containerFound';


const FoundContainer = (props) => {
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

export default FoundContainer