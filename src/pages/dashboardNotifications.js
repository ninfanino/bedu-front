import React from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerNotifications from '../components/dashboard/notifications/containerNotifications';



const NotificationsContainer = (props) => {
    if(!sessionStorage.getItem('user')) {
        return <Redirect to='/home' />
    }
    console.log("Entrando a notifications previo")
    return(
    <div className="Dashboard">
        <MenuDashboard/>
        <ContainerNotifications/>
        <Ads/>
    </div>
    )
}

export default NotificationsContainer