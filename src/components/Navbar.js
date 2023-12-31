import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
// import { logo as Brand } from '../logo.jpg'
import React from "react";
// import logo from '../logo-png-mini2.webp'

import "./navbar.scss";
// import { Squeeze as Hamburger } from 'hamburger-react'
// import { Squeeze as Hamburger } from 'hamburger-react'
import logo from "../logo.png"
import logonotaire from "../logo-notaire.png"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const closeAndTop = () => {
    window.scrollTo(0, 0);
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar">

          <div className="brand"></div>
        <div className="container">
          {/* <div className="logo"> */}
          {/* <Brand /> */}
           <div className="logo-container"> <img src={logo} className='logo-1' alt="logo" />
<img src={logonotaire} className='logo-not' alt="logo" /></div>
          {/* <div className="brand"></div> */} 
          {/* </div> */}
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <Hamburger /> */}
            <span className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeAndTop}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission" onClick={closeAndTop}>
                  Etude
                </NavLink>
              </li>

              {/* <div className="dropdown"> */}
              <li className="drop" onClick={handleOpen}>
                <div className="drop-icon">Compétences<i className="fas fa-chevron-down"></i></div>
                {open ? (
                  <ul className="menu">
                    <li className="menu-item">
                      <NavLink to="/famille" onClick={closeAndTop}>
                        Droit de la famille
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/immobiler" onClick={closeAndTop}>
                        Droit immobilier
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/affaires" onClick={closeAndTop}>
                        Droit des affaires
                      </NavLink>
                    </li>
                  </ul>
                ) : null}
                {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
              </li>
              <li>
                <NavLink to="/tarifs" onClick={closeAndTop}>
                  Tarifs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeAndTop}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      <div className="title-container">
      {/* <div className="logo-container"> <img src={logo} className='logo-1' alt="logo" />
<img src={logonotaire} className='logo-not' alt="logo" /></div> */}
        <h1>Maître Jean-François Sulpice, Notaire à Neuville-les-Dames</h1>
      </div>
    </header>
  );
};

export default Navbar;
