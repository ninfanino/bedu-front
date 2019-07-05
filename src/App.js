import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Glide from '@glidejs/glide'

import Propagator from './Propagator'

class App extends Component {

  state = {
    //Variables del estado para el Home
    modalVisible:false,
    type: '',
    menuDisplayed:false,
    user: '',
    pass: ''
}
// Funciones del Home
handlerLogin = (e) => {
    e.preventDefault()
    let obj = {
        user: this.state.user,
        pass: this.state.pass
    }
    console.log("Entrando al boton", obj)
    fetch("http://localhost:3001/login", {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(message => console.log('Comming message: ', message))
    
    this.setState({user: '', pass: ''})
}

updateAttribute = (e) =>{
    console.log(this.state.user, this.state.pass)
    this.setState({[e.name]: e.value})
}

handleDispalyedMenu = () => {
  console.log('Ejecutando handle Displayed Menu')
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

componentDidMount() {
    var found = new Glide("#found",{
        type: 'carousel',
        autoplay: 2000,
        perView: 4
    })
    found.mount()  
    var adopt = new Glide("#adopt",{
        type: 'carousel',
        focusAt: 'center',
        autoplay: 2000,
        perView: 4
    })
    adopt.mount()      
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

//Funciones del dashboard

  render() { 
    return ( 
     <Propagator
      modalVisible={this.state.modalVisible}
      type={this.state.type}
      menuDisplayed={this.state.menuDisplayed}
      user={this.state.user}
      pass={this.state.pass}
      handlerLogin={this.handlerLogin}
      updateAttribute={this.updateAttribute}
      handleDispalyedMenu={this.handleDispalyedMenu}
      handleOpenModalRegistro={this.handleOpenModalRegistro}
      handleOpenModalLogin={this.handleOpenModalLogin}
      handleCloseModal={this.handleCloseModal}
      />
    );
  }
}
 
export default App;
