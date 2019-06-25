import React from 'react'
import Header from '../components/home/header';
import '../components/fonts.css'
import '../components/home/home.css'
import Events from '../components/home/events';
import PerrosEncontrados from '../components/home/perros-encontrados';
import Adopciones from '../components/home/adopciones';
import Blog from '../components/home/blog';

/*****
 * Header necesita enviar una funcion para abrir el formulario de registro
*****/

const Home = () => (
    <div>
        <Header/> 
        <PerrosEncontrados/>
        <Adopciones/>
        <Events/>
        <Blog/>
    </div>
)

export default Home