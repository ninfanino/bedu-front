import React from 'react'

const Header = (props) => (
    <div className="Header">
        <div className="titleHeader">
            El lugar donde tú eres el cupido de tu mejor amigo
        </div>
        <button className="btnHeader" onClick={props.handleOpenModal}>
            Regístrate
        </button>
    </div>
)

export default Header