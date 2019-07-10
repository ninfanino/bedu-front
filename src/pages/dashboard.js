import React from 'react'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Container from '../components/dashboard/container';
import Ads from '../components/dashboard/ads';

const Dashboard = () => (
    <div className="Dashboard">
        <MenuDashboard/>
        <Container/>
        <Ads/>
    </div>
)

export default Dashboard