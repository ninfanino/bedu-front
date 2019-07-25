import React from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerFindPartner from '../components/dashboard/findPartner/containerFindPartner';

const FindPartnerContainer = (props) => {
    if(!sessionStorage.getItem('user')) {
        return <Redirect to='/home' />
    }
    return(
    <div className="Dashboard">
        <MenuDashboard/>
        <ContainerFindPartner/>
        <Ads/>
    </div>
    )
}

export default FindPartnerContainer