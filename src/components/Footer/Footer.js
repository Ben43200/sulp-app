import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>©Meteoben</p>
      <NavLink to="/MentionsLegales">Mentions légales</NavLink>
      <div className="notaires-link-container">
        <h4 className="notaires-link-title">
          LES NOTAIRES DE FRANCE SUR LE WEB
        </h4>
        <ul>
          <div className="link">
            <span className="arrow-right-link"></span>
            <Link
              to="https://www.notaires.fr/fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="link-list">En savoir plus sur les notaires</li>
            </Link>
          </div>
          <div className="link">
            <span className="arrow-right-link"></span>
            <Link
              to="https://www.paris.notaires.fr/outil/immobilier/prix-et-nombre-de-ventes-paris-idf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="link-list">Les prix de l'immobilier à Paris et Île de France</li>
            </Link>
          </div>
          <div className="link">
            <span className="arrow-right-link"></span>
            <Link
              to="https://immobilier.statistiques.notaires.fr/prix-immobilier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="link-list">Les prix de l'immobilier en régions</li>
            </Link>
          </div>
        </ul>
      </div>
    </footer>
  );
}
