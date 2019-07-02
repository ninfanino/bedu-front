import React, { Component } from 'react'
import Menu from '../components/home/Menu'
import Header from '../components/home/header';
import '../components/fonts.css'
import '../components/home/home.css'
import Events from '../components/home/events';
import PerrosEncontrados from '../components/home/perros-encontrados';
import Adopciones from '../components/home/adopciones';
import Blog from '../components/home/blog';
import Publicidad from '../components/home/publicidad';
import Patrocinadores from '../components/home/patrocinadores';
import Footer from '../components/home/footer';
import ModalContainer from '../components/general/modalContainer';
import Modal from '../components/general/modal';
import Registro from '../components/general/registro';
import Login from '../components/general/login';


/*****
 * Header necesita enviar una funcion para abrir el formulario de registro
*****/

class Home extends Component {
    state = {
        modalVisible:false,
        type: '',
        menuDisplayed:false
    }
    handleDispalyedMenu = () => {
        var x = document.getElementById("MenuList");
        if (x.className === "MenuNav") {
            x.className += " responsive";
            this.setState({
                menuDisplayed:true,
            })
        } else {
            x.className = "MenuNav";
            this.setState({
                menuDisplayed:false,
            })
        }
        console.log(x.className)
    }
    handleOpenModalRegistro = () => {
        this.setState({
            modalVisible:true,
            type: 'registro'
        })
    }
    handleOpenModalLogin = () => {
        this.setState({
            modalVisible:true,
            type: 'login'
        })
    }
    handleCloseModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <div>
                <Menu handleOpenModal={this.handleOpenModalLogin}
                      handleDispalyedMenu={this.handleDispalyedMenu}
                      menuDisplayed={this.menuDisplayed}
                />
                <Header handleOpenModal={this.handleOpenModalRegistro}/> 
                <PerrosEncontrados/>
                <Adopciones/>
                <Events/>
                <Blog/>
                <Publicidad/> 
                <Patrocinadores/>
                <Footer/>
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handleClick={this.handleCloseModal} type={this.state.type} >
                            {
                                this.state.type === 'registro' &&
                                <Registro/>
                            }

                            {
                                this.state.type === 'login' &&
                                <Login/>
                            }
                        </Modal>
                    </ModalContainer>
                }
            </div>
        )
    }
    
}

export default Home;