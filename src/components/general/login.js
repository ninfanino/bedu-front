import React from 'react'
//import {Link, Redirect} from 'react-router-dom'

const Login = (props) => {
    // let onPath = (props.onDashboard? '/dashboard/': '/')    
    return(
    <div>
        <div className="nameForm">Inicia sesión en XUXO</div>
        <form>
            <div className="fieldsContainer">
                <div className="item">
                    <input placeholder="Email" className="inputModal" name='user'
                        onChange={e => props.updateAttribute(e.target)}
                        value={props.user}/>
                </div>
                <div className="item">
                    <input placeholder="Contraseña" className="inputModal" name='pass'
                        type="password"
                        onChange={e => props.updateAttribute(e.target)}
                        value={props.pass}/>
                </div>
            </div>
            <div className="btnFormulario">
                {/* <Redirect  to={onPath}/>  */}
                {/* <Link to='/dashboard/'/> */}
                <button className="btnBlog" onClick={props.handlerLogin}>Entrar</button>
            </div>
            {
            !props.isLoginSuccessful && 
                <div className="loginDBMessage">
                    <div>{props.loginMessage}</div>
                </div>
            }
        </form>
    </div>
     
    )
}

export default Login
