import React from 'react'
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo-senfinanca.svg'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar content">
        <ul className="nav-bar__itens">
          <li className="nav-bar__itens__item"><Link to="/" className="nav-bar__itens__item__link--logo"><img src={logo} alt="SenFinança" /></Link></li>
          <li className="nav-bar__itens__item"><Link to="/cadastro" className="nav-bar__itens__item__link nav-bar__itens__item__link--nova">Nova</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
