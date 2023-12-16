import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Methodologie from "./pages/Methodologie";
// import Mission from "./pages/Mission";
// import Error from "./pages/Error/Error";
// import Footer from "./components/Footer";
// import ContactUs from "./pages/Contact/ContactUs";
// import Examples from "./pages/Examples/Examples";
// import ScrollToTop from "./components/ScrollToTop";
// import ScrollToTop from "react-scroll-to-top";
// import { Helmet } from "react-helmet";


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

    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/methodologie" element={<Methodologie />} /> */}
      {/* <Route path="/mission" element={<Mission />} /> */}
      {/* <Route path="/contact" element={<Mission />} /> */}


      {/* <Route path="/examples" element={<Examples />} /> */}
      {/* <Route path="*" element={<Error />} /> */}

    </Routes>
    {/* <Footer /> */}

  </Router>

  // </React.StrictMode>
);

