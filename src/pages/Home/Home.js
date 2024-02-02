import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { stockData } from "../../data";
import "./home.scss";
import Contact from "../../components/Contact/Contact";
import Google from "../../Utils/google-map.png"
// import ContactForm from "../../components/Contact/ContactForm";

// import font from "../../Utils/Façade_8.webp";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-font">
  <img src={Google} />
  </div>
      <div className="carousel-container">
        <Carousel images={stockData} />
      </div>
      {/* <div className="home-font">
  <img src={font} />
  </div> */}
      <Contact />
    </main>
  );
}
