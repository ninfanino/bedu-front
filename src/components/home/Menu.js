import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = (props) => {
  let {handleOpenModal, handleDispalyedMenu, handleOpenModalPagos} = props

  return(
  <div className="Menu">
    <div className="MenuLogo">
      <img src="./images/logo-header.png" alt="XUXO" id="MenuImage"></img>
    </div>
    <div className="BurgerDisplay" onClick={handleDispalyedMenu}>
      <img src="./images/burger-menu.png" alt="Menú" id="BurgerMenu" ></img>
    </div>
    <div className="MenuNav" id="MenuList">
      <a href="https://www.google.com/search?safe=off&rlz=1C1CHBD_esMX832MX834&q=veterinarias+en+guadalajara&npsic=0&rflfq=1&rlha=0&rllag=20676313,-103342227,3866&tbm=lcl&ved=2ahUKEwjlm-ewrePjAhUIca0KHTcND3gQtgN6BAgKEAQ&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:!1m2!1d20.7249657!2d-103.3026917!2m2!1d20.615203599999997!2d-103.40592769999999!3m12!1m3!1d53195.07132499718!2d-103.3543097!3d20.67008465!2m3!1f0!2f0!3f0!3m2!1i301!2i342!4f13.1;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2" activeClassName="isSelected" className="MenuOptions">EMERGENCIAS</a>
      <AnchorLink href='#perrosEncontrados' className="MenuOptions">PERROS ENCONTRADOS</AnchorLink>
      <AnchorLink href='#eventos' className="MenuOptions">EVENTOS</AnchorLink>
      <NavLink to="/" activeClassName="isSelected" className="MenuOptions" onClick={handleOpenModalPagos}>DONAR</NavLink>
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