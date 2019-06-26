import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Menu = () => (
  <div className="Menu">
    <div className="MenuLogo">
      <img src="./images/logo-header.png" alt="XUXO" id="MenuImage"></img>
    </div>
    <div className="MenuNav">
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">EMERGENCIAS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">PERROS ENCONTRADOS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">EVENTOS</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions">DONAR</NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
        <img src="./images/icon-fb.png" alt="FB" ></img>
      </NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
        <img src="./images/icon-in.png" alt="Instagram" ></img>
      </NavLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuIcons">
        <img src="./images/icon-account.png" alt="Account" ></img>
      </NavLink>
    </div>
  </div>
)

export default Menu