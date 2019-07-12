import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Registro = () => {

    const [form, setValues] = useState({
        name: '',
        email: ''
    })

    const updateInput = (e) => {
        setValues({
            ...form,
            [e.target.name]:e.target.value
        })
    }  
    
    const onSubmit = (e) => {
        console.log("Si jalo");
        
        e.preventDefault();
        axios.post('http://localhost:3001/users', {
            body: form
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return(
        <div>
            <div className="nameForm">Regístrate en XUXO</div>
            <form onSubmit={onSubmit}>
                <div className="fieldsContainer">
                    <div className="item">
                        <input 
                            placeholder="Email" 
                            type="email"
                            name="email" 
                            onChange={e => updateInput(e)}
                            className="inputModal" />
                    </div>
                    <div className="item">
                        <input 
                            placeholder="Password" 
                            type="name"
                            name="name" 
                            onChange={e => updateInput(e)}
                            className="inputModal" />
                    </div>
                </div>
                <div className="fieldsCheck">
                    <input type="checkbox" />
                    Al registrarte estás aceptando nuestros términos y condiciones
                </div>
                    <div className="btnFormulario">
                        <button className="btnBlog" type="submit">Enviar</button>
                    </div>
            </form>
        </div>
    )}

export default Registro
