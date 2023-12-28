// import "./Home.scss";
// import { getLogements } from "../../services/dataManager";
// import background from "../../images/background-banner.png";
// import React, { useEffect, useState } from "react";
import React from "react";
import logo from "../logo.png"

// import Navbar from "../../components/Navbar";
import "./home.scss";
// import Footer from "../components/Footer";
// import background from "../../compress-background.webp";
// import BackToUp from "../../components/BackToUp/BackToUp";
// import Header from "../../components/Header";
// const imageSmall = "../../compress-image-small.jpg"
// const imageMedium = "../../compress-image-medium.jpg"
// const imageLarge = "../../compress-image-large.webp"
export default function Home() {
  return (
<main>
<div className="logo-container"> <img src={logo} className='logo-1' alt="logo" /></div>

    <h2>Notaire</h2>
    </main>
  )
}