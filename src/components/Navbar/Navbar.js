import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.scss";
import { useEffect,useRef } from "react";
// import logo from "../../logo.png"
// import logonotaire from "../../Utils/logo-notaire2.png"
import logonotaire from "../../Utils/logonotaire2.png"

import logo from "../../Utils/logo-jeff.png"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  let menuRef = useRef()

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };
  const closeAndTop = () => {
    window.scrollTo(0, 0);
    // setShowNavbar(!showNavbar);
  };
  

useEffect(()=> {
  let handler = (e) =>{
    if(!menuRef.current.contains(e.target)){
    setShowNavbar(false)
    // console.log(menuRef.current);
      
    
  }
};
  document.addEventListener("mousedown", handler)

return()=>{
  document.removeEventListener("mousedown", handler)
}
});
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
            <span className="burger-icon"  ref={menuRef}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`} >
            <ul>
              <li>
                <NavLink to="/" onClick={closeAndTop}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/etude" onClick={closeAndTop}>
                  Etude
                </NavLink>
              </li>

              {/* <div className="dropdown"> */}
              {/* <li className="drop" onClick={handleOpen}>
                <div className="drop-icon">Compétences<i className="fas fa-chevron-down"></i></div>
                {open ? (
                  <ul className="menu">
                    <li className="menu-item"> */}
                    <li>
                      <NavLink to="/Famille" onClick={closeAndTop}>
                       Compétences
                      </NavLink>
                    </li>
                    {/* <li className="menu-item"> */}
                      {/* <NavLink to="/immobiler" onClick={closeAndTop}>
                        Droit immobilier
                      </NavLink> */}
                    {/* </li>
                    <li className="menu-item">
                      <NavLink to="/affaires" onClick={closeAndTop}>
                        Droit des affaires
                      </NavLink>
                    </li>
                  </ul>
                ) : null}
                {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
              {/* </li> */} 
              <li>
                <NavLink to="/tarifs" onClick={closeAndTop}>
                  Tarifs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactpage" onClick={closeAndTop}>
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
        <p className="title">Maître Jean-François SULPICE, Notaire à Neuville-les-Dames</p>
      </div>
    </header>
  );
};

export default Navbar;
