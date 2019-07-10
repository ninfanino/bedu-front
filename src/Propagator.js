import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Link, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'

const Propagator = (props) => {
  let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin,
    handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful,
    updatePathStates, onHome, onDashboard } = props
  return(
    <Router>
    <div>
      <Route
        exact path={["/", "/home"]}
        render={
          (props) => {
            updatePathStates({name:'onHome', value:false})
            console.log('is login successful: ', isLoginSuccessful)
            return(
              <Home {...props}
                modalVisible={modalVisible}
                type={type}
                menuDisplayed={menuDisplayed}
                user={user}
                pass={pass}
                onHome={onHome}
                onDashboard= {onDashboard}
                loginMessage={loginMessage}
                isLoginSuccessful={isLoginSuccessful}
                handlerLogin={handlerLogin}
                updateAttribute={updateAttribute}
                handleDispalyedMenu={handleDispalyedMenu}
                handleOpenModalRegistro={handleOpenModalRegistro}
                handleOpenModalLogin={handleOpenModalLogin}
                handleCloseModal={handleCloseModal}
              />
            )
          }
        }
      />
      <Route path="/dashboard/"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <Dashboard
                {...props}
                user={user}
              />
            )
          }
        }
      />
      <Route path="/payment/" component={Payment} />
    </div>
    </Router>
  )
}
export default Propagator;