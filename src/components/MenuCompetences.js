import React from "react";
import "./menucompetences.scss"
import { NavLink } from "react-router-dom";


export default function MenuCompetences(){
    return(
        <ul className="menu-comp">
            <li><NavLink to ="/Famille">Le droit de la famille</NavLink></li>
            <li>Le patrimoine</li>
            <li>Le droit immobilier</li>
            <li>Le droit de l'entreprise</li>
            <li>L'expertise</li>
        </ul>
    )
}