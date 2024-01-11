import React from "react"
import { stockData } from "../data"
import Carousel from "../components/Carousel"
import "./etude.scss"

export default function Etude() {
    return (
<main className="etude-container">
  {/* <div className="logo-container"> <img src={logo} className='logo-1' alt="logo" />
  <img src={logonotaire} className='logo-not' alt="logo" />
  </div> */}
  <div className=" carousel-container">
  <Carousel images={stockData} />
  </div>
      </main>
    )
  }