import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Navbar2 from "./components/Navbar2";
import Etude from "./pages/Etude/Etude";
// import Methodologie from "./pages/Methodologie";
// import Mission from "./pages/Mission";
// import Error from "./pages/Error/Error";
// import Footer from "./components/Footer";
// import ContactUs from "./pages/Contact/ContactUs";
// import Examples from "./pages/Examples/Examples";
// import ScrollToTop from "./components/ScrollToTop";
// import ScrollToTop from "react-scroll-to-top";
// import { Helmet } from "react-helmet";
import Tarifs from "./pages/Tarifs/Tarifs";
import Error from "./pages/Error/Error";
// import Competences from "./pages/Competences";
import Famille from "./pages/Competences/Famille/Famille";
import Patrimoine from "./pages/Competences/Patrimoine/Patrimoine";
import Immobilier from "./pages/Competences/Immobilier/Immobilier";
import Entreprise from "./pages/Competences/Entreprise/Entreprise";
import Expertise from "./pages/Competences/Expertise/Expertise";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales"
import ContactPage from "./pages/Contact/ContactPage";

// import "./css/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  // <React.StrictMode>
  <Router>
      {/* <ScrollToTop /> */}

    {/* <Helmet>
      <title>Meteoben Développeur Web</title>
      <meta
        name="description"
        content="Développeur et créateur de site web en Vallée de la Drôme"
      />
    </Helmet> */}
    <Navbar />
    {/* <Navbar2 /> */}

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/tarifs" element={<Tarifs />} />
      {/* <Route path="/mission" element={<Mission />} /> */}
      {/* <Route path="/contact" element={<Mission />} /> */}


      <Route path="/etude" element={<Etude />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/competences" element={<Competences />} /> */}
      <Route path="/famille" element={<Famille />} />
      <Route path="/patrimoine" element={<Patrimoine />} />
      <Route path="/immobilier" element={<Immobilier />} />
      <Route path="/entreprise" element={<Entreprise />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/mentionslegales" element={<MentionsLegales />} />
      <Route path="/contactpage" element={<ContactPage />} />



      




    </Routes>
    <Footer />

  </Router>

  // </React.StrictMode>
);

