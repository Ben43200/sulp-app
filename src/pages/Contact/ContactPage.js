import React from "react";
import Contact from "../../components/Contact/Contact";
import Google from "../../Utils/google-map.png"
import "./contactpage.scss"
import { Link } from "react-router-dom";


export default function ContactPage(){
    return(
        <main className="contact-page-container">


  <aside className="left-column">
          <div className="home-font">
          <Link to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noopener noreferrer">
  <img className="carte" src={Google} alt="carte"/>
  </Link>

  </div>
    <Contact />
    </aside>
    <aside className="right-column">
    <div className="contact-title">
  <h1>N'hésitez pas à contacter votre notaire</h1>
  </div>
  <div className="horaires-container">
    <h3>Horaires</h3>
    <p>Lundi 14h-18h</p>
    <p>Mardi 9h-12h / 14h-18h</p>
    <p>Mercredi 9h-12h / 14h-18h</p>
    <p>Jeudi 9h-12h / 14h-18h</p>
    <p>Vendredi 9h-12h / 14h-18h</p>
    <p>Samedi 10h-12h</p>
  </div>
  </aside>
        </main>
        )
        }