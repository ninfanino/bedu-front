import React, { Component } from 'react';
//import Glide from '@glidejs/glide'
import Glide, { Images, Controls } from '@glidejs/glide/dist/glide.modular.esm'

/****
 * Necesita conectarse al back
 ***/
class MyRegisteredPets extends Component {
    state = {
        registerData:  [
            {
                picture:     "/images/huellita.png"
            },
            {
                picture: "/images/huellita.png"
            },
            {
                picture: "/images/huellita.png"
            },
            {
                picture: "/images/huellita.png"
            }
        ],
        founded : new Glide("#registeredPets",{
            type: 'carousel',
            startAt: 0,
            perView: 5,
            focusAt: 'center',
            autoplay: 2000
            
        })
    }

    getRegisterInfo = () => {
        console.log('Get info para ',sessionStorage.getItem('user'))
      let form = {
          email: sessionStorage.getItem('user')
      }
  
      fetch("http://localhost:3001/registered-pets", {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          method : 'POST',
          body: JSON.stringify(form)
      })
      .then(response => response.json())
      .then(data=> {
          console.log('Los perritos registrados:', data)
          this.setState({
            registerData: []
          })
          this.setState({
              registerData: data
         });
         this.state.founded.mount({ Images, Controls })
      });
      
    };


componentWillMount(){
    this.getRegisterInfo();
    console.log('Los perritos registrados en will mount:', this.state.registerData)
}

    componentDidMount(){
        //console.log(`Perritos registrados ${this.state.found}`)
        console.log('Hola, soy componentdidmount')
        
        
        //founded.mount({ Images, Controls })

        
    }

    render(){
        console.log('Rendereando la barra de mascotas registradas',this.state.registerData )
        //this.getInfo()
    return (
        <div className="PerrosEncontrados" id="perrosRegistrados">
            <div className="PerrosEncontradosContainer">
                <div className="glide" id="registeredPets">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {
                                this.state.registerData.map((item, i) =>
                                        <div className="PerroEncontradoItem" key={i}>
                                            <img src={item.picture} alt={item.owner} className="PerroEncontradoImg" />
                                            <div className="mask">
                                                {item.found && (<img src="/images/icon-encontrados.png" className="iconLocation" alt="icon"/>)}
                                                {item.inadoption && (<img src="/images/icon-adopciones.png" className="iconLocation" alt="icon"/>)}
                                                {item.inlove && (<img src="/images/icon-dates.png" className="iconLocation" alt="icon"/>)}
                                                {item.lost && (<img src="/images/icon-perdidos.png" className="iconLocation" alt="icon"/>)}                                                
                                                <div className="addressLocation">
                                                    <h2>{item.petname}</h2>
                                                    {item.owner}<br/>{item.contactphone}<br/>
                                                </div>
                                            </div>
                                        </div>
                                )
                            }   
                            
                        </ul>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                    </div>
                </div>                               
            </div>
        </div>
)}}

export default MyRegisteredPets