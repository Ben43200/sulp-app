// import React from "react";
import "./tarifs.scss";

// export default function Tarifs() {
//   return (
//     <main>
//       <p className="tarifs">TARIF DES PETITS ACTES AU 1 ER JUILLET 2023</p>
//       <ul className="tarifs-list">
//         <li>NOTORIETE 350,00 € TTC</li>

//         <li>DONATION ENTRE EPOUX (2 x 3 pages) 380,00 € TTC</li>

//         <li>CONTRAT DE MARIAGE (sans apport) 400,00 € TTC</li>

//         <li>
//           TESTAMENT OLOGRAPHE (avec remise pour conservation) par personne
//           100,00 € TTC
//         </li>
//         <ul className="sub-list">
//           <li>
//             + frais inscription au fichier ADSN : 11,56 € TTC par personne
//           </li>
//           <li>+ frais conseils de rédaction : 60,00 € TTC par personne</li>
//         </ul>

//         <li>TESTAMENT AUTHENTIQUE 200,00 € TTC</li>

//         <li>DEPÔT DE TESTAMENT 360,00 € TTC</li>

//         <li>PACS 350,00 € TTC</li>

//         <li>CHANGEMENT DE REGIME MATRIMONIAL 1 000,00 € TTC</li>
//         <ul className="sub-list">
//           <li>
//             Le coût de l&#39;acte dépend des situations de chaque couple et de
//             l&#39;objet du changement (simple clause ou changement total de
//             régime)
//           </li>
//           <li>
//             + (Si opposition) HOMOLOGATION JUDICIAIRE (frais d’avocat) 600,00 €
//             TTC
//           </li>
//         </ul>
//         <li>MANDAT DE PROTECTION FUTURE 350,00 € TTC</li>

//         <li>CLÔTURE D’INVENTAIRE 230,00 € TTC</li>

//         <li>DEPÔT DE PIECES 250,00 € TTC</li>

//         <li>DEPÔT DE CONVENTION PAR ACTE D’AVOCAT 50,00 € TTC</li>

//         <li>ADOPTION SIMPLE 300,00 € TTC</li>

//         <li>OPTION CONJOINT SURVIVANT 350,00 € TTC</li>
//       </ul>
//     </main>
//   );
// }

import React, { Component } from "react";
import Pdf1 from "../../Utils/GENERALITES SUR LE TARIF DU NOTAIRE. EMOLUMENTS ET HONORAIRES.pdf";
import Pdf2 from "../../Utils/Tarifs_affiches.pdf";
import Pdf3 from "../../Utils/Tableau.pdf";
import "./tarifs.scss";

export class Tarif extends Component {
  render() {
    return (
      <main>
        <h3>LE TARIF DES NOTAIRES</h3>
        <p>
          Il convient de distinguer les actes tarifés (ventes, donations,
          contrats de mariage, successions…) pour lesquels le notaire perçoit
          des émoluments (dont le tarif est fixé réglementairement par l’Etat),
          des actes non tarifés qui font l’objet d’honoraires libres.
        </p>
        <h4>Généralités sur le tarif des notaires</h4>

        <a href={Pdf1} target="_blank" rel="noopener noreferrer">
          <p>Téléchargez ici les Généralités sur le tarif des notaires</p>
        </a>

        <h4>Le tarif affiché dans la salle d’attente de l’Office</h4>
        <a href={Pdf2} target="_blank" rel="noopener noreferrer" >
          <p>Téléchargez ici les tarifs affichés en salle d'attente</p>
        </a>

        <h3>LES HONORAIRES</h3>

        <p>
          Depuis le 1er mars 2016, les activités de négociation immobilière et
          de transaction donnent désormais lieu à des versements d’honoraires.
          Il en est de même pour les consultations des clients relatives à des
          prestations qui sont détachables de la préparation, de la rédaction ou
          de l’exécution de l’acte.
        </p>
        <p>
          Obligation : La fixation de ces honoraires donne lieu à une convention
          signée entre le notaire et son client.
        </p>

        <h4>Honoraires de l’Office</h4>

        <ul className="honoraires-list">
          <li>
            Tarifs d'honoraires de négociation 4.5 % TTC maximum du prix net
            vendeur Avec un minimum de 3600 € TTC.
          </li>
          <li>Tarifs d’expertise sur devis seulement.</li>
        </ul>
        <a href={Pdf3} target="_blank" rel="noopener noreferrer">
          <p>Téléchargez ici le tableau des honoraires</p>
        </a>
      </main>
    );
  }
}

export default Tarif;
