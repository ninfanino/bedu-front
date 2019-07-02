import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu = (props) => (
  <div className="Menu">
    <div className="MenuLogo">
      <img src="./images/logo-header.png" alt="XUXO" id="MenuImage"></img>
    </div>
    <div className="BurgerDisplay" onClick={props.handleDispalyedMenu}>
      <img src="./images/burger-menu.png" alt="Menú" id="BurgerMenu" ></img>
    </div>
    <div className="MenuNav" id="MenuList">
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">EMERGENCIAS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">PERROS ENCONTRADOS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">EVENTOS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">DONAR</NavLink>
      if({props.menuDisplayed})
      (
      <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
        <img src="./images/icon-fb.png" alt="Página de Facebook" ></img>
      </NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
        <img src="./images/icon-in.png" alt="Instagram"></img>
      </NavLink>
      <button className="MenuIcons" onClick={props.handleOpenModal}>
        <img src="./images/icon-account.png" alt="Ingresa a tu Cuenta" ></img>
      </button>
)
      else
      (
        <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
          Página de Facebook
        </NavLink>
        <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
          Instagram
        </NavLink>
        <button className="MenuIcons" onClick={props.handleOpenModal}>
          Ingresa a tu Cuenta
        </button>
      )
    }
    </div>
  </div>
)

export default Menu