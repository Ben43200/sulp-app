import React from "react";
import "./menucompetences.scss"
import { NavLink } from "react-router-dom";


export default function MenuCompetences(){
    return(
        <ul className="menu-comp">
            <li><NavLink to ="/Famille">Le droit de la famille</NavLink></li>
            <li><NavLink to ="/Patrimoine">Le patrimoine</NavLink></li>
            <li><NavLink to ="/Immobilier">Le droit immobilier</NavLink></li>
            <li><NavLink to ="/Entreprise">Le droit de l'entreprise</NavLink></li>
            <li><NavLink to ="/Expertise">L'expertise</NavLink></li>
        </ul>
    )
}