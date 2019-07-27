import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = (props) => {
  let {handleOpenModal, handleDispalyedMenu} = props

  return(
  <div className="Menu">
    <div className="MenuLogo">
      <img src="./images/logo-header.png" alt="XUXO" id="MenuImage"></img>
    </div>
    <div className="BurgerDisplay" onClick={handleDispalyedMenu}>
      <img src="./images/burger-menu.png" alt="Menú" id="BurgerMenu" ></img>
    </div>
    <div className="MenuNav" id="MenuList">
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">EMERGENCIAS</NavLink>
      <AnchorLink href='#perrosEncontrados' className="MenuOptions">PERROS ENCONTRADOS</AnchorLink>
      <AnchorLink href='#eventos' className="MenuOptions">EVENTOS</AnchorLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">DONAR</NavLink>
      <Link to="/dashboard/" id="DashBoardLink" className="HiddenLink"/>

      <button className="MenuIcons">
        <img src="./images/icon-fb.png" alt="Página de Facebook" ></img>
      </button>
      <button className="MenuIcons">
        <img src="./images/icon-in.png" alt="Instagram"></img>
      </button>
      <button className="MenuIcons" onClick={handleOpenModal}>
        <img src="./images/icon-account.png" alt="Ingresa a tu Cuenta" ></img>
      </button>

    </div>
  </div>
  )
}

export default Menu