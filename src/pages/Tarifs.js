import React from "react";
import "./tarifs.scss";

export default function Tarifs() {
  return (
    <main>
      <h1 className="tarifs">TARIF DES PETITS ACTES AU 1 ER JUILLET 2023</h1>
      <ul className="tarifs-list">
        <li>NOTORIETE 350,00 € TTC</li>

        <li>DONATION ENTRE EPOUX (2 x 3 pages) 380,00 € TTC</li>

        <li>CONTRAT DE MARIAGE (sans apport) 400,00 € TTC</li>

        <li>
          TESTAMENT OLOGRAPHE (avec remise pour conservation) par personne
          100,00 € TTC
        </li>
        <ul className="sub-list">
          <li>
            + frais inscription au fichier ADSN : 11,56 € TTC par personne
          </li>
          <li>+ frais conseils de rédaction : 60,00 € TTC par personne</li>
        </ul>

        <li>TESTAMENT AUTHENTIQUE 200,00 € TTC</li>

        <li>DEPÔT DE TESTAMENT 360,00 € TTC</li>

        <li>PACS 350,00 € TTC</li>

        <li>CHANGEMENT DE REGIME MATRIMONIAL 1 000,00 € TTC</li>
        <ul className="sub-list">
          <li>
            Le coût de l&#39;acte dépend des situations de chaque couple et de
            l&#39;objet du changement (simple clause ou changement total de
            régime)
          </li>
          <li>
            + (Si opposition) HOMOLOGATION JUDICIAIRE (frais d’avocat) 600,00 €
            TTC
          </li>
        </ul>
        <li>MANDAT DE PROTECTION FUTURE 350,00 € TTC</li>

        <li>CLÔTURE D’INVENTAIRE 230,00 € TTC</li>

        <li>DEPÔT DE PIECES 250,00 € TTC</li>

        <li>DEPÔT DE CONVENTION PAR ACTE D’AVOCAT 50,00 € TTC</li>

        <li>ADOPTION SIMPLE 300,00 € TTC</li>

        <li>OPTION CONJOINT SURVIVANT 350,00 € TTC</li>
      </ul>
    </main>
  );
}
