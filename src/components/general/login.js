import React from 'react'

const Login = (props) => {
    console.log(props.isLoginSuccessful, props.loginMessage)
    return(
    <div>
        <div className="nameForm">Inicia sesión en XUXO</div>
        <form>
            <div className="fieldsContainer">
                <div className="item">
                    <input placeholder="Email" className="inputModal" name='user'
                        onChange={e => props.updateAttribute(e.target)}/>
                </div>
                <div className="item">
                    <input placeholder="Contraseña" className="inputModal" name='pass'
                        onChange={e => props.updateAttribute(e.target)}/>
                </div>
            </div>
            <div className="btnFormulario">
                <button className="btnBlog" onClick={props.handlerLogin}>Entrar</button>
            </div>
            {
            !props.isLoginSuccessful && 
                <div className="loginDBMessage">
                    <a>{props.loginMessage}</a>
                </div>
            }
        </form>
    </div>
    )
}

export default Login
