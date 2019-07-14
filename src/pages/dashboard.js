import React from 'react'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Container from '../components/dashboard/container';
import Ads from '../components/dashboard/ads';

import MapContainer from '../components/general/mapContainer'

const Dashboard = (props) => (
    <div className="Dashboard">
        <MenuDashboard/>
        <Container
            user={props.user}
        />
        <Ads/>
        <MapContainer/>
    </div>
)

export default Dashboard