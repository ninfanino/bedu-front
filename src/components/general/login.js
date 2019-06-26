import React from 'react'

const Login = () => (
    <div>
        <div className="nameForm">Inicia sesión en XUXO</div>
        <form>
            <div className="fieldsContainer">
                <div className="item">
                    <input placeholder="Email" className="inputModal" />
                </div>
                <div className="item">
                    <input placeholder="Contraseña" className="inputModal" />
                </div>
            </div>
            <div className="btnFormulario">
                <button className="btnBlog">Entrar</button>
            </div>
        </form>
    </div>
)

export default Login
