import React from "react";
import Carousel from "../components/Carousel";
import {stockData} from "../data"
import "./home.scss";




export default function Home() {
  return (
<main className="home-container">
<div className="carousel-container">
  <Carousel images={stockData} />
  </div>
    </main>
  )
}