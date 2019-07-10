import React, { Component }  from 'react'
import LeftMenu from '../components/dashboard/leftMenu'
import Mascotas from '../components/dashboard/mascotas'
import Mensajes from '../components/dashboard/mensajes'
import Parejas from '../components/dashboard/parejas'
import Adopciones from '../components/dashboard/adopciones'
import Perdidos from '../components/dashboard/perdidos'
import Encontrados from '../components/dashboard/encontrados'
import Configuraciones from '../components/dashboard/configuraciones'
import Logout from '../components/dashboard/logout'
import MapContainer from '../components/general/mapContainer'


const Dashboard = (props) => (
    <div>
        <LeftMenu/>
        <Mascotas/>
        <Mensajes/>
        <Parejas/>
        <Adopciones/>
        <Perdidos/>
        <Encontrados/>
        <Configuraciones/>
        <Logout/>
        Bienvenido al Dashboard {props.user}! 
        <MapContainer/>
    </div>
)

export default Dashboard