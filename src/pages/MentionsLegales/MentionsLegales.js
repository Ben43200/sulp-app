import React from "react";
import "./mentionslegales.scss";

export default function MentionsLegales() {
  return (
    <main>
      <h2 className="mentions-title">Mentions Légales</h2>
      <h3 className="mentions-subtitle">1.Infos Editeur</h3>
      <p className="mentions-details">
        Éditeur : le Site est conçu par Benjamin Dollfus, micro-entrepreneur,
        Immatriculée sous le n° Siret 514 925 866 000 48 - Code APE 6201Z - 8B
        rue des Jardins 26400 Aouste-sur-sye. Tél. 06.98.55.70.26. Email :
        meteoben@gmail.com.
      </p>
      <h3 className="mentions-subtitle">2. Infos Hébergeur</h3>
      <p className="mentions-details">
        Le site de l'étude de Maître Jean-François SULPICE est hébergé par HOSTINGER, dont le siège social
        est situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023
        Larnaca, Chypre, joignable par le moyen suivant
        : https://www.hostinger.fr/contact.
      </p>
      <h3 className="mentions-subtitle">
        2. Conception et réalisation du site de Maître SULPICE
      </h3>
      <p className="mentions-details">
        Benjamin Dollfus est le concepteur exclusif du site avec les éléments
        fournis par Maître Jean-François SULPICE.
      </p>
      <p className="mentions-details">
        La reproduction sur support électronique La reproduction de tout ou
        partie de ce site sur un support électronique est autorisée sous réserve
        de l'ajout de façon claire et lisible de la source (URL exacte du site)
        et de la mention "Droits réservés". Les informations utilisées ne
        doivent l'être qu'à des fins personnelles, associatives ou
        professionnelles ; toute utilisation à des fins commerciales ou
        publicitaires est exclue. Toute reproduction, autrement que pour l'usage
        privé de l'utilisateur du site en vue notamment d'une diffusion publique
        par n'importe quel moyen est strictement interdite sans l'autorisation
        préalable et écrite de Benjamin Dollfus.
      </p>
      <p className="mentions-details">
        La création de liens hypertextes vers le site :
        https://adresse-sulpice.notaires.fr Le site autorise la mise en place
        d’un lien hypertexte pointant vers son contenu, sous réserve d’un accord
        préalable et exprès de Benjamin Dollfus de :
      </p>
      <ul className="liens-hyper">
        <li>
          ne pas utiliser la technique du lien profond ("deep linking"),
          c'est-à-dire que les pages du site https://adresse_sulpice.notaires.fr
          ne doivent pas être imbriquées à l'intérieur des pages d'un autre
          site, mais accessible par l’ouverture d’une fenêtre,
        </li>
        <li>
          mentionner la source qui pointera grâce à un lien hypertexte
          directement sur le contenu visé,
        </li>
        <li>
        
          les informations utilisées ne doivent l'être qu'à des fins
          personnelles, associatives ou professionnelles,
        </li>
        <li>
          toute utilisation à des fins commerciales ou publicitaires est exclue.
        </li>
      </ul>
      <p className="mentions-details">
        Attention ! Cette autorisation ne s’applique pas aux sites internet
        diffusant des informations à caractère polémique, pornographique,
        xénophobe ou pouvant, dans une plus large mesure porter atteinte à la
        sensibilité du plus grand nombre. L’Editeur décline toute responsabilité
        en ce qui concerne les pratiques et les politiques de protection de la
        confidentialité des données des sites auxquels nous pouvons être reliés
        par des liens hypertextes et nous vous engageons à en prendre
        connaissance.
      </p>
      <h3 className="mentions-subtitle">3. Contenus du site</h3>
      <p className="mentions-details">
        Les informations contenues sur le site engagent seule la responsabilité
        de leur auteur et ne sauraient engager la responsabilité de l’Editeur
        lorsque ce dernier n’est pas l’auteur de ces informations. </p>
        <p className="mentions-details">L’Editeur ne
        donne aucune garantie, explicite ou implicite, et n'assume aucune
        responsabilité relative à l'utilisation de la présente publication.</p>
        <p className="mentions-details">
        En aucun cas, l’Editeur ou un tiers impliqué dans la création de ce site ne
        sont responsables, ni ne peuvent être redevables à un utilisateur ou une
        autre partie, des dommages directs ou indirects, spéciaux, particuliers
        ou accessoires découlant de l'utilisation de ce site ou d'un autre site
        relié par un hyperlien, notamment des pertes de profit, de
        l'interruption des affaires, des pertes de programmes ou d'autres
        données du système de gestion de l'information de l'utilisateur ou
        autre, même si l’Editeur est expressément informé que des dommages sont
        possibles.
         Votre connexion à tout autre site extérieur est à vos risques
        exclusifs. La reproduction et la diffusion de l'image ou la vidéo d'une
        personne doivent respecter les principes issus du droit à l'image et du
        droit à la vie privée.</p>
        <p className="mentions-details"> L’Editeur ne donne pas de garantie quant à la
        qualité, l'exactitude, l'actualité, l'ordre ou l'exhaustivité de
        l'information ou des documents dans ce site, et n'est tenu à aucune mise
        à jour de ces informations.
        </p> <p className="mentions-details">Les autres documents sont présentés à titre
        informatif et ne sauraient engager l’Editeur.
      </p>
      <h3 className="mentions-subtitle">4. Crédits photos</h3>
      <p className="mentions-details">
        Le concepteur du site s’engage à garantir que les photographies et/ou
        vidéos ajoutées sont libres de droit ou dans le cas contraire à
        mentionner le nom de l’auteur du document.
      </p>
      <ul className="copyright">
        <li>©Jean-François Sulpice</li>
        <li>©Benjamin Dollfus</li>
      </ul>
    </main>
  );
}
