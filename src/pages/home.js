import React from 'react'
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


/*****
 * Header necesita enviar una funcion para abrir el formulario de registro
*****/

//class Home extends Component {
const Home = (props) => {
    let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin,
        handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful, onDashboard} = props;

    return (
        <div>
            <Menu handleOpenModal={handleOpenModalLogin}
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
                            <Registro/>
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
                    </Modal>
                </ModalContainer>
            }
        </div>
    )
}
    


export default Home;