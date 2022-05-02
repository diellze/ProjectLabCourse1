import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
<footer className="footer">
      <div className="container1">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Our Services</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4> Get Help</h4>
            <ul>
              <li><a href=""> Terms and Conditions</a></li>
              <li><a href=""> Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4> Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i> </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
    );
}

export default Footer;