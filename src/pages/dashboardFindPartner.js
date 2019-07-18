import React from 'react'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Ads from '../components/dashboard/ads';
import ContainerFindPartner from '../components/dashboard/findPartner/containerFindPartner';

const FindPartnerContainer = (props) => {
    
    return(
    <div className="Dashboard">
        <MenuDashboard/>
        <ContainerFindPartner/>
        <Ads/>
    </div>
    )
}

export default FindPartnerContainer