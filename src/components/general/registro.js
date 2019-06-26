import React from 'react'

const Registro = () => (
    <div>
        <div className="nameForm">Regístrate en XUXO</div>
        <form>
            <div className="fieldsContainer">
                <div className="item">
                    <input placeholder="Nombre" className="inputModal" />
                </div>
                <div className="item">
                    <input placeholder="Email" className="inputModal" />
                </div>
                <div className="item">
                    <input placeholder="Nombre" className="inputModal" />
                </div>
                <div className="item">
                    <input placeholder="Email" className="inputModal" />
                </div>
            </div>
            <div className="fieldsCheck">
                <input type="checkbox" />
                Al registrarte estás aceptando nuestros términos y condiciones
            </div>
            <div className="btnFormulario">
                <button className="btnBlog">Enviar</button>
            </div>
        </form>
    </div>
)

export default Registro
