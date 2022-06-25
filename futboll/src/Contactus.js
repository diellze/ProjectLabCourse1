import React from "react"
import './Contactus.css'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Contactus = () =>{
  return (
    <><Navbar /><div class="container2">
      <div class="contact-box1">
        <div class="left1"></div>
        <div class="right1">
          <h2>Contact Us</h2>
          <input type="text" class="field" placeholder="Emri juaj" />
          <input type="email" class="field" placeholder="Emaili juaj" />
          <input type="text" class="field" placeholder="Numri i telefonit tuaj" />
          <textarea class="field area" placeholder="Mesazhi juaj"></textarea>
          <button class="btn">Dergo</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contactus;










