import React, { Component } from 'react';
import Glide from '@glidejs/glide'
import Propagator from './Propagator'
import Swal from 'sweetalert2'

class App extends Component {

  state = {
    //Variables del estado para el Home
    modalVisible:false,
    type: '',
    menuDisplayed:false,
    user: '',
    pass: '',
    regEmail: '',
    regPass: '',
    regAgreement: false,
    loginMessage: '',
    isLoginSuccessful: false,
    onThisPath: {
        onHome:true,
        onDashboard:false
    },
    petName:'',
    petAge:'',
    petRace:'',
    petCertificate:'',
    petEmergency:'',
    petGender:'',
    petAdopt:false,
    petLost:false,
    petFound:false,
    petInLove:false,
    petURL:'',
    registerData:[],
    //Variables del estado para el Dashboard
    adopt : new Glide("#adopt",{
        type: 'carousel',
        focusAt: 'center',
        autoplay: 2000,
        perView: 4
    }),
    found : new Glide("#found",{
        type: 'carousel',
        autoplay: 2000,
        perView: 4
    })
}
  // Funciones del Home

  

  onSubmit = (e) => {
    e.preventDefault();
    let form = {
        email: this.state.regEmail,
        password: this.state.regPass
    }
    
    if(this.state.regAgreement){
        fetch("http://localhost:3001/register", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method : 'POST',
            body: JSON.stringify(form)
        })
        .then(res => {
            if (res.status === 200) {
                let preState = this.state.onThisPath
                preState.onHome = false
                preState.onDashboard =  true
                this.setState({
                    isLoginSuccessful: true,
                    loginMessage: true,
                    modalVisible: false,
                    onThisPath: preState,
                    user: form.email
                })
                sessionStorage.user = form.email
                let linkToDashboard = document.getElementById('DashBoardLink');
                linkToDashboard.click();
            } else {
                Swal.fire({
                    type: 'warning',
                    title: 'Registro inválido',
                    text: 'El usuario que intentas registrar ya existe!',
                    confirmButtonText: 'Cerrar'
                })
            }
        })
        
        .catch(function (error) {
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Ocurrió un error inesperado, le recomendamos intentar más tarde',
                confirmButtonText: 'Cerrar'
            })
        });
    }
    else{
        Swal.fire({
            type: 'warning',
            title: '',
            text: 'No has aceptado los terminos y condiciones',
            confirmButtonText: 'Cerrar'
        })
    }
}

  handlerLogin = (e) => {
    e.preventDefault()
    let obj = {
        user: this.state.user,
        pass: this.state.pass
    }
    
    fetch("http://localhost:3001/login", {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(obj)
    })
    .then(res => {
        if (res.status === 200) {
            let preState = this.state.onThisPath
            preState.onHome = false
            preState.onDashboard =  true
            this.setState({
                isLoginSuccessful: true,
                loginMessage: true,
                modalVisible: false,
                onThisPath: preState
            })
            sessionStorage.user = this.state.user;
            let linkToDashboard = document.getElementById('DashBoardLink');
            linkToDashboard.click();
        } else {
            Swal.fire({
                type: 'warning',
                title: 'Login inválido',
                text: 'Has ingresado credenciales de usuario inválidas',
                confirmButtonText: 'Cerrar'
            })
        }
    })
    //.then(res => {
    //    if(comingMessage.message === 'ALL OK'){
    //        let preState = this.state.onThisPath;
    //        preState.onHome=false;
    //        preState.onDashboard=true;
    //        this.setState({isLoginSuccessful: true,
    //                    loginMessage: '',
    //                    modalVisible:true,
    //                    onThisPath: preState
    //                })
    //        //this.renderRedirect()
    //    }
    //    else{
    //        this.setState({isLoginSuccessful: false, loginMessage: comingMessage.message})
    //    }
    //})
    .catch(() => {
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Ocurrió un error inesperado, le recomendamos intentar más tarde',
            confirmButtonText: 'Cerrar'
        })
    })
  }

updateAttribute = (e) =>{

    this.setState({[e.name]: e.value})
    
}

updateFlag = (e) =>{
    this.setState({[e.name]: !this.state[e.name]})
    
}

glider = () => {
    this.state.found.mount()
    this.state.adopt.mount()
}

updatePathStates = (att)=>{
    
    if(!this.state.onThisPath[att.name]){
        let preState = this.state.onThisPath
        for (const prop in preState) {
            
            if(prop===att.name){
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
}

componentDidMount() {
    if(this.state.onThisPath.onHome){
        //this.glider()
    }
}

handleOpenModalRegistro = () => {
    this.setState({
        modalVisible:true,
        type: 'registro'
    })
}
handleOpenModalLogin = () => {
    if(this.state.user!==''){
        let linkToDashboard = document.getElementById('DashBoardLink');
        linkToDashboard.click();
    }
    else{
        this.setState({
            modalVisible:true,
            type: 'login'
        })
    }
}
handleOpenModalPagos = () => {
    this.setState({
        modalVisible:true,
        type: 'pago'
    })
}
handleCloseModal = () => {
    this.setState({
        modalVisible: false
    })
}

//Funciones del dashboard

handlerSaveDash = (e) => {
    e.preventDefault()
    let User = this.state.user===''? sessionStorage.user : this.state.user;
    let obj = {
        user: User,
        petName:this.state.petName,
        petAge:this.state.petAge,
        petRace:this.state.petRace,
        petCertificate:this.state.petCertificate,
        petEmergency:this.state.petEmergency,
        petGender:this.state.petGender,
        petAdopt:this.state.petAdopt,
        petLost:this.state.petLost,
        petFound:this.state.petFound,
        petInLove:this.state.petInLove,
        petURL:this.state.petURL
    }

    fetch("http://localhost:3001/save-pet", {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(obj)
    })
    .then(res => {
        if (res.status === 200) {
            this.setState({
                petName:'',
                petAge:'',
                petRace:'',
                petCertificate:'',
                petEmergency:'',
                petGender:'',
                petAdopt:false,
                petLost:false,
                petFound:false,
                petInLove:false,
                petURL:''
            })
        } else {
            Swal.fire({
                type: 'warning',
                title: 'Error',
                text: 'Ha ocurrido un error',
                confirmButtonText: 'Cerrar'
            })
        }
    })
}

handlerGetImageURL = (urlValue) => {
    //e.preventDefault()
    
    this.setState({petURL: urlValue})
}
  render() { 
      
    return ( 
     <Propagator
      modalVisible={this.state.modalVisible}
      type={this.state.type}
      menuDisplayed={this.state.menuDisplayed}
      user={this.state.user}
      pass={this.state.pass}
      onHome={this.state.onThisPath.onHome}
      onDashboard={this.state.onThisPath.onDashboard}
      onDashboardFindPartner={this.state.onThisPath.onDashboardFindPartner}
      renderRedirect={this.renderRedirect}
      loginMessage={this.state.loginMessage}
      isLoginSuccessful={this.state.isLoginSuccessful}
      handlerLogin={this.handlerLogin}
      updateAttribute={this.updateAttribute}
      updatePathStates={this.updatePathStates}
      handleDispalyedMenu={this.handleDispalyedMenu}
      handleOpenModalRegistro={this.handleOpenModalRegistro}
      handleOpenModalLogin={this.handleOpenModalLogin}
      handleOpenModalPagos={this.handleOpenModalPagos}
      handleCloseModal={this.handleCloseModal}
      petName={this.state.petName}
      petAge={this.state.petAge}
      petRace={this.state.petRace}
      petCertificate={this.state.petCertificate}
      petEmergency={this.state.petEmergency}
      petGender={this.state.petGender}
      petAdopt={this.state.petAdopt}
      petLost={this.state.petLost}
      petFound={this.state.petFound}
      petInLove={this.state.petInLove}
      updateFlag={this.updateFlag}
      handlerSaveDash={this.handlerSaveDash}
      handlerGetImageURL={this.handlerGetImageURL}
      regEmail={this.state.regEmail}
      regPass={this.state.regPass}
      regAgreement={this.state.regAgreement}
      onSubmit={this.onSubmit}
      glider={this.glider}
      found={this.state.found}
      registerData={this.state.registerData}
      />
    );
  }
}
 
export default App;
