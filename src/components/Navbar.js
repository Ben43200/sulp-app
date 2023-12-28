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

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          {/* <div className="logo"> */}
          {/* <Brand /> */}
          <div className="brand"></div>
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
                <NavLink to="/" onClick={handleShowNavbar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission" onClick={handleShowNavbar}>
                  Etude
                </NavLink>
              </li>

              {/* <div className="dropdown"> */}
              <li className="drop" onClick={handleOpen}>
                <div className="drop-icon">Compétences<i className="fas fa-chevron-down"></i></div>
                {open ? (
                  <ul className="menu">
                    <li className="menu-item">
                      <NavLink to="/famille" onClick={handleShowNavbar}>
                        Droit de la famille
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/immobiler" onClick={handleShowNavbar}>
                        Droit immobilier
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/affaires" onClick={handleShowNavbar}>
                        Droit des affaires
                      </NavLink>
                    </li>
                  </ul>
                ) : null}
                {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
              </li>
              <li>
                <NavLink to="/tarifs" onClick={handleShowNavbar}>
                  Tarifs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleShowNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      <div className="title-container">

        <h1>Maître Jean-François Sulpice, Notaire à Neuville-les-dames</h1>
      </div>
    </header>
  );
};

export default Navbar;
