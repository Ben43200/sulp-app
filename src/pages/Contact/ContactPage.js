import React from "react";
import Contact from "../../components/Contact/Contact";
import Google from "../../Utils/google-map.png"
import "./contactpage.scss"



export default function ContactPage(){
    return(
        <main>
    {/* <div className="contact-container">
      <h3>Me Jean-François SULPICE</h3>
      <p>Adresse: 4 Place du Chapitre</p>
      <p>01400 Neuville-les-Dames</p>
      <p>Téléphone : <a href="tel:0474428795">04 74 42 87 95</a></p>
    </div> */}<div className="contact-page-container">
          <div className="home-font">
  <img className="carte" src={Google} alt="carte"/>
  </div>
    <Contact />
    </div>
    
        </main>
        )
        }