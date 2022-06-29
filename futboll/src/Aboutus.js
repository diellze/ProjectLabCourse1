import React from "react"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Aboutus = () =>{
  return (
    <>
        <Navbar />
        <section className="banner" >
            <div class = "banner-main-content">
                <h2>GET THE WORLD'S LATEST FOOTBALL NEWS</h2>
                </div>
                </section>
        <Footer />
    </>
    
    
  );
}

export default Aboutus;