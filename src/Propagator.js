import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'

const Propagator = (props) => {
  let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin,
    handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful } = props
  return(
    <Router>
    <div>
      <Route
        exact path={["/", "/home"]}
        render={(props) => <Home {...props}
            modalVisible={modalVisible}
            type={type}
            menuDisplayed={menuDisplayed}
            user={user}
            pass={pass}
            loginMessage={loginMessage}
            isLoginSuccessful={isLoginSuccessful}
            handlerLogin={handlerLogin}
            updateAttribute={updateAttribute}
            handleDispalyedMenu={handleDispalyedMenu}
            handleOpenModalRegistro={handleOpenModalRegistro}
            handleOpenModalLogin={handleOpenModalLogin}
            handleCloseModal={handleCloseModal}
          />}
      />
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/payment/" component={Payment} />
    </div>
    </Router>
  )
}
export default Propagator;