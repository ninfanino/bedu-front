import React, { Component } from 'react'
import Menu from '../components/home/Menu'
import Header from '../components/home/header';
import '../components/fonts.css'
import '../components/home/home.css'
import '../components/home/slider.css'
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
import PayPal from '../components/general/paypal';

/*****
 * Header necesita enviar una funcion para abrir el formulario de registro
*****/

class Home extends Component {
    componentDidMount() {
        console.log('Mounting on Home!')
        this.props.glider()
    }
    render(){
    let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin, handleOpenModalPagos,updateFlag,
        handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful, onDashboard, onSubmit, glider} = this.props;
        // componentDidMount() {
        //     props.glider()
        // }
    return (
        <div>
            <Menu handleOpenModal={handleOpenModalLogin}
                    handleOpenModalPagos={handleOpenModalPagos}
                    handleDispalyedMenu={handleDispalyedMenu}
                    menuDisplayed={menuDisplayed}
            />
            <Header handleOpenModal={handleOpenModalRegistro}/> 
            <PerrosEncontrados/>
            <Adopciones/>
            <Events/>
            <Blog/>
            <Publicidad/> 
            <Patrocinadores/>
            <Footer/>
            {
                modalVisible &&
                <ModalContainer handleClick={handleCloseModal}>
                    <Modal handleClick={handleCloseModal} type={type} >
                        {
                            type === 'registro' &&
                            <Registro
                                regEmail={this.props.regEmail}
                                regPass={this.props.regPass}
                                regAgreement={this.props.regAgreement}
                                updateAttribute={updateAttribute}
                                onSubmit={onSubmit}
                                updateFlag={updateFlag}
                            />
                        }

                        {
                            type === 'login' &&
                            <Login handlerLogin={handlerLogin}
                                    updateAttribute={updateAttribute}
                                    loginMessage={loginMessage}
                                    isLoginSuccessful={isLoginSuccessful}
                                    user={user}
                                    pass={pass}
                                    onDashboard={onDashboard}
                            />
                        }

{
                            type === 'pago' &&
                            <PayPal 
                                    updateAttribute={updateAttribute}
                                    loginMessage={loginMessage}
                                    isLoginSuccessful={isLoginSuccessful}
                            />
                        }
                    </Modal>
                </ModalContainer>
            }
        </div>
    )
    }
}
    


export default Home;