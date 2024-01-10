import React from "react"
import { stockData } from "../data"
import Carousel from "../components/Carousel"

export default function Etude() {
    return (
  <main>
  {/* <div className="logo-container"> <img src={logo} className='logo-1' alt="logo" />
  <img src={logonotaire} className='logo-not' alt="logo" />
  </div> */}
  <Carousel images={stockData} />
  
      </main>
    )
  }