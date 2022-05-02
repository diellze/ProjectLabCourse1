import React from "react"
import { Link } from "react-router-dom";
import './Login.css'

const Register = () => {
  return (
    <div className="div">
    <div class="login-page">
        <div class="form">
            <form class="login-form">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Surname"/>
                <input type="text" placeholder="Email address"/> 
                <input type="password" placeholder="Password"/>
                <button>create</button>
                <p class="message">Already registered? <Link to='/login'>Sign In</Link></p>
             </form>
        </div>
    </div>
    </div>
  );
}
export default Register;