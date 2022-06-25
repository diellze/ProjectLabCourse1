import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <div>
        <div className="header">
          <div className="inner_header">
            <div class="logo_container">
              <h1>MY<span>FOOTBALL</span></h1>
            </div>
            <ul className="navigation">
              <li>
                <Link to='/'>Home</Link>
              </li> 
              <li><Link to=''>News</Link></li>
              <li><Link to=''>Transfers</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/aboutus'>About Us</Link></li>
              <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        </div>
    )
}

export default Navbar