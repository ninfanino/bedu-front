import React from 'react'


const Registro = (props) => {
    return(
        <div>
            <div className="nameForm">Regístrate en XUXO</div>
            <form >
                <div className="fieldsContainer">
                    <div className="item">
                        <input 
                            placeholder="Email" 
                            type="email"
                            name="regEmail" 
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.regEmail}
                            className="inputModal" />
                    </div>
                    <div className="item">
                        <input 
                            placeholder="Password" 
                            type="password"
                            name="regPass" 
                            onChange={e => props.updateAttribute(e.target)}
                            value={props.regPass}
                            className="inputModal" />
                    </div>
                </div>
                <div className="fieldsCheck">
                    <input type="checkbox"
                        name="regAgreement"
                        onChange={e => props.updateFlag(e.target)}
                        checked={props.regAgreement} />
                    Al registrarte estás aceptando nuestros términos y condiciones
                </div>
                    <div className="btnFormulario">
                        <button className="btnBlog" type="submit" onClick={props.onSubmit}>Enviar</button>
                    </div>
            </form>
        </div>
    )}

export default Registro
