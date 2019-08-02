import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {Link, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Payment from './pages/payment'
import FindPartnerContainer from './pages/dashboardFindPartner';
import FoundContainer from './pages/dashboardFound';
import LostContainer from './pages/dashboardLost';
import AdoptionsContainer from './pages/dashboardAdoptions';
import NotificationsContainer from './pages/dashboardNotifications';

const Propagator = (props) => {
  
  let {handlerLogin, updateAttribute, handleDispalyedMenu, handleOpenModalRegistro, handleOpenModalLogin, handleOpenModalPagos,
    handleCloseModal, modalVisible, type, menuDisplayed, user, pass, loginMessage, isLoginSuccessful,
    updatePathStates, onHome, onDashboard, updateFlag, handlerSaveDash, handlerGetImageURL, onSubmit, glider } = props
  return(
    <Router>
    <div>
      <Route
        exact path={["/", "/home"]}
        render={
          (props) => {
            updatePathStates({name:'onHome', value:true})
            
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
                handleOpenModalPagos={handleOpenModalPagos}
                handleCloseModal={handleCloseModal}
                regEmail={props.regEmail}
                regPass={props.regPass}
                regAgreement={props.regAgreement}
                onSubmit={onSubmit}
                glider={glider}
              />
            )
          }
        }
      />
      <Route exact path="/dashboard/"
        render={
          (props) => {
            updatePathStates({name:'onHome', value:true})
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
                registerData={props.registerData}
              />
            )
          }
        }
      />
      <Route path="/dashboard/notifications"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <NotificationsContainer
                {...props}
                
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
      <Route path="/dashboard/found"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <FoundContainer
                {...props}
                
              />
            )
          }
        }
      />
      <Route path="/dashboard/lost"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <LostContainer
                {...props}
                
              />
            )
          }
        }
      />
      <Route path="/dashboard/adoptions"
        render={
          (props) => {
            updatePathStates({name:'onDashboard', value:true})
            return(
              <AdoptionsContainer
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