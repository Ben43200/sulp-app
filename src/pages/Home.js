// import "./Home.scss";
// import { getLogements } from "../../services/dataManager";
// import background from "../../images/background-banner.png";
// import React, { useEffect, useState } from "react";
import React from "react";
import logo from "../logo.png"
import logonotaire from "../logo-notaire.png"
import Carousel from "../components/Carousel";
import {stockData} from "../data"
import fond from "../Utils/Façade_8.webp"

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
<main className="home-container">
{/* <div className="logo-container"> <img src={logo} className='logo-1' alt="logo" />
<img src={logonotaire} className='logo-not' alt="logo" />
</div> */}
{/* <Carousel images={stockData} /> */}
<h2 className="presentation-title">Présentation de l'office</h2>
<p>L’office notarial a été créé en 2018 par Jean-François SULPICE diplômé notaire ayant 25 ans
d’expériences dans le notariat, mais aussi une expérience préalablement acquise dans la gestion
immobilière ainsi que l’expertise en évaluations immobilières et commerciales.
L’office est principalement axé sur la proximité en offrant à ses clients un conseil global prenant en
considération tous les aspects de leur environnement économique, fiscal et familial pour atteindre
leurs objectifs.</p>
<h4>L’office offre toutes les compétences nécessaires dans les différents domaines d’expertise que sont :</h4>
<ul className="presentation-list">
  <li>Le conseil des particuliers dans le cadre de la vente et de l’acquisition de leurs biens
immobiliers.
  </li>
  <li>Le conseil des propriétaires bailleurs (assistance, rédaction de baux d’habitation ou ruraux,
…)</li>
<li>Le conseil des collectivités, investisseurs, et agriculteurs dans leurs opérations immobilières.</li>
<li>L’offre à ses clients d’un conseil global à toutes les étapes de la vie (contrat de mariage,
succession, divorce, partage, adoption, …)</li>
<li>L’accompagnement de ses clients afin de trouver des solutions adaptées permettant
d’optimiser la transmission de leur patrimoine (donation, assurance-vie, régime matrimonial,
fiscalité des particuliers, …)</li>
<li>Le conseil et l’apport de solutions adaptées au chef d’entreprise, de la constitution de la
société jusqu’à sa transmission, en passant par le bail commercial, la cession du fonds de
commerce, la cession de parts et actions, la fiscalité, le pacte Dutreil.</li>
</ul>
<p>Grâce à la proximité et à la réactivité du notaire titulaire de cet office, vous bénéficierez de
prestations personalisées et de qualités.</p>
    </main>
  )
}