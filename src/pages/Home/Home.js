import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { stockData } from "../../data";
import "./home.scss";
import Contact from "../../components/Contact/Contact";
import Google from "../../Utils/google-map.png";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className="home-container">
      <div className="home-font">
      <Link to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noopener noreferrer">
        <img className="carte" src={Google} alt="carte"  fetchpriority="high" />
        </Link>
      </div>
      
      <div className="carousel-container">
        <Carousel fetchpriority="high" images={stockData} />
      </div>
      <Contact />
    </main>
  );
}
