import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'


const Footer = () => {
    return (
    <footer class="footer">
      <div class="container1">
        <div class="row">
          <div class="footer-col">
            <h4>MyFootball</h4>

            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Our Services</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4> Get Help</h4>
            <ul>
              <li><a href=""> Terms and Conditions</a></li>
              <li><Link to='/aboutus'>About Us</Link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4> Follow Us</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i> </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
    );
}

export default Footer;