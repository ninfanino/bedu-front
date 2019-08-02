import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerFindPartner from '../components/dashboard/findPartner/containerFindPartner';

class FindPartnerContainer extends Component {
    render(){
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
}

export default FindPartnerContainer