import React from "react";
import MenuCompetences from "../../../components/MenuCompetences/MenuCompetences";
import "./famille.scss"


export default function Famille(){
    return(
        <main>
        <MenuCompetences />
        <h1 className="droit-famille-title">Le droit de la famille</h1>
        <p>Union libre, PACS, mariage et remariage, divorce... le droit de la famille ne cesse d'évoluer pour
s'adapter à la société.</p>
<p>À votre écoute, en toute confidentialité, votre notaire vous aidera à y voir plus clair et à prendre les
bonnes décisions.</p>
<p>Vous êtes mariés et vous vous engagez dans une activité indépendante ? Séparez vos actifs
professionnels de votre patrimoine privé.</p>
<p>Vous êtes liés par un pacte civil de solidarité (Pacs) ? Établissez un testament, faute de quoi votre
partenaire serait écarté de votre succession.</p>
<p>Vous vivez en union libre ? Lors de l’achat de votre résidence principale, optez pour le mode
d’acquisition le mieux adapté à votre situation : indivision, SCI, démembrement croisé ou tontine.
</p>
{/* 
<ul>
    <li> L'union libre</li>
    <li>Le Pacs : Pacte civil de Solidarité</li>
    <li>Le mariage</li>
    <li>Le divorce</li>
    </ul> */}
        </main>
    )
}