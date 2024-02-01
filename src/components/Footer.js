import React from "react";
import "./footer.scss"
import { NavLink } from "react-router-dom";

export default function Footer(){

    return (
        <footer>
            <p>Footer</p>
            <NavLink to ="/MentionsLegales">Mentions légales</NavLink>
        </footer>
    )
}