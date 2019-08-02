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
                picture: "/images/huellita.png"
            },
            {
                picture: "/images/huellita.png"
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
          
          let data1=data;
          for(let i=data.length; i<5; i++){
              data1.push({picture: "/images/huellita.png"})
          }
          
          if(data.length>0){
            this.setState({
              registerData: []
            })
            this.setState({
              registerData: data
            });
          }
          this.state.founded.mount({ Images, Controls })
      });
      
    };


componentWillMount(){
    this.getRegisterInfo();
    
}


    render(){
       
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