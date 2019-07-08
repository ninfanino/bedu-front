import React, { Component } from 'react';
import Glide from '@glidejs/glide'
import Propagator from './Propagator'

class App extends Component {

  state = {
    //Variables del estado para el Home
    modalVisible:false,
    type: '',
    menuDisplayed:false,
    user: '',
    pass: '',
    loginMessage: '',
    isLoginSuccessful: false,
    onThisPath: {
        onHome:true,
        onDashboard:false
    }
    //Variables del estado para el Dashboard
}

renderRedirect = () => {
    console.log('Redirecting', this.state.onThisPath.onDashboard, this.state.onThisPath.onHome)
    //if (this.state.onDashboard) {
        //this.context.router.history.push(`/target`)
      //return <Redirect to='/dashboard/' />
    //}
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
    .then(message => {
        let comingMessage = message;
        console.log('Comming message: ',comingMessage.message)
        if(comingMessage.message === 'ALL OK'){
            let preState = this.state.onThisPath;
            preState.onHome=false;
            preState.onDashboard=true;
            this.setState({isLoginSuccessful: true,
                        loginMessage: '',
                        modalVisible:true,
                        onThisPath: preState
                    })
            //this.renderRedirect()
        }
        else{
            this.setState({isLoginSuccessful: false, loginMessage: comingMessage.message})
        }
    })
}

updateAttribute = (e) =>{
    console.log(this.state.user, this.state.pass)
    this.setState({[e.name]: e.value})
}

updatePathStates = (att)=>{
    console.log('updatePathState: ',this.state.onThisPath[att.name], att.name,att.value)
    
    if(!this.state.onThisPath[att.name]){
        let preState = this.state.onThisPath
        for (const prop in preState) {
            console.log(`preState.${prop} = ${preState[prop]}`);
            if(prop===att.name){
                console.log(`Esta es la prop: ${prop}`, !att.value, att.value)
                preState[prop] = true;
            }
            else{
                preState[prop] = false;
            }
        }
        this.setState({onThisPath: preState})
    }
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
    console.log('Mounting on home:', this.state.onHome)
    if(this.state.onThisPath.onHome){
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
      console.log('Haciendo render ',this.state.user, this.state.pass)
    return ( 
     <Propagator
      modalVisible={this.state.modalVisible}
      type={this.state.type}
      menuDisplayed={this.state.menuDisplayed}
      user={this.state.user}
      pass={this.state.pass}
      onHome={this.state.onThisPath.onHome}
      onDashboard={this.state.onThisPath.onDashboard}
      renderRedirect={this.renderRedirect}
      loginMessage={this.state.loginMessage}
      isLoginSuccessful={this.state.isLoginSuccessful}
      handlerLogin={this.handlerLogin}
      updateAttribute={this.updateAttribute}
      updatePathStates={this.updatePathStates}
      handleDispalyedMenu={this.handleDispalyedMenu}
      handleOpenModalRegistro={this.handleOpenModalRegistro}
      handleOpenModalLogin={this.handleOpenModalLogin}
      handleCloseModal={this.handleCloseModal}
      />
    );
  }
}
 
export default App;
