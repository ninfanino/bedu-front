import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {Link, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'
import FindPartnerContainer from './pages/dashboardFindPartner';

const Propagator = (props) => {
  //console.log('Props Propagator: ', props)
  let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin,
    handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful,
    updatePathStates, onHome, onDashboard, updateFlag, handlerSaveDash, handlerGetImageURL, onSubmit } = props
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
                updateFlag={updateFlag}
                updateAttribute={updateAttribute}
                handleDispalyedMenu={handleDispalyedMenu}
                handleOpenModalRegistro={handleOpenModalRegistro}
                handleOpenModalLogin={handleOpenModalLogin}
                handleCloseModal={handleCloseModal}
                regEmail={props.regEmail}
                regPass={props.regPass}
                regAgreement={props.regAgreement}
                onSubmit={onSubmit}
              />
            )
          }
        }
      />
      <Route exact path="/dashboard/"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <Dashboard
                {...props}
                user={user}
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
                updateAttribute={updateAttribute}
                updateFlag={updateFlag}
                handlerSaveDash={handlerSaveDash}
                handlerGetImageURL={handlerGetImageURL}
              />
            )
          }
        }
      />
      <Route path="/dashboard/findPartner"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <FindPartnerContainer
                {...props}
                
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