import React from 'react'
import MenuDashboard from '../components/dashboard/menu';

import '../components/dashboard/dashboard.css'
import Container from '../components/dashboard/container';
import Ads from '../components/dashboard/ads';

import MapContainer from '../components/general/mapContainer'

const Dashboard = (props) => {
    //{console.log('Props Dashboard: ', props)}
    return(
    <div className="Dashboard">
        <MenuDashboard/>
        <Container
            user={props.user}
            petName={props.petName}
            petAge={props.petAge}
            petRace={props.petRace}
            petCertificate={props.petCertificate}
            petEmergency={props.petEmergency}
            petGender={props.petGender}
            petAdopt={props.petAdopt}
            petLost={props.petLost}
            petFound={props.petFound}
            petInLove={props.petInLove}
            updateAttribute={props.updateAttribute}
            updateFlag={props.updateFlag}
            handlerSaveDash={props.handlerSaveDash}
            handlerGetImageURL={props.handlerGetImageURL}
        />
        <Ads/>
        <MapContainer/>
    </div>
    )
}

export default Dashboard