import React from 'react'
import Header from '../components/home/header';
import '../components/fonts.css'
import '../components/home/home.css'
import Events from '../components/home/events';

/*****
 * Header necesita enviar una funcion para abrir el formulario de registro
*****/

const Home = () => (
    <div>
        <Header/> 
        <Events/>
    </div>
)

export default Home