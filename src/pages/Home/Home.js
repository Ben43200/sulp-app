import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import {stockData} from "../../data"
import "./home.scss";
import ContactForm from "../../components/Contact/ContactForm";




export default function Home() {
  return (
<main className="home-container">
<div className="carousel-container">
  <Carousel images={stockData} />
 
  </div>
  <div className="contact-form-container">
  <ContactForm />
  </div>
    </main>
  )
}