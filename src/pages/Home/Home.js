import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { stockData } from "../../data";
import "./home.scss";
import Contact from "../../components/Contact/Contact";
import Google from "../../Utils/google-map.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import ContactForm from "../../components/Contact/ContactForm";

// import font from "../../Utils/Façade_8.webp";

export default function Home() {
  return (
    <main className="home-container">
            <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self';
          script-src 'report-sample' 'self' https://kit.fontawesome.com/a528402c70.js 'sha256-vvt4KWwuNr51XfE5m+hzeNEGhiOfZzG97ccfqGsPwvE=' 'nonce-rAnd0m' https://cdn.tarteaucitron.io;
          style-src 'unsafe-inline' https://fonts.googleapis.com/ https://cdn.tarteaucitron.io;
          object-src 'none';
          base-uri 'self';
          connect-src 'self' https://ka-f.fontawesome.com;
          font-src 'self' https://ka-f.fontawesome.com  https://fonts.gstatic.com/;
          frame-src 'self';
          img-src * 'self' data: https:;
          manifest-src 'self';
          media-src 'self';
          form-action 'self';
          worker-src 'none';
                `}
        ></meta>
      </Helmet>
       
      <div className="home-font">
      <Link to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noopener noreferrer">
        <img className="carte" src={Google} alt="carte"  fetchpriority="high" />
        </Link>
      </div>
      
      <div className="carousel-container">
        <Carousel fetchpriority="high" images={stockData} />
      </div>
      {/* <div className="home-font">
  <img src={font} />
  </div> */}
      <Contact />
    </main>
  );
}
