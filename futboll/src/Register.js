import React from "react"
import { Link } from "react-router-dom";
import './Login.css'

const Register = () => {
  return (
    <div class="login-page">
        <div class="form">
            <form class="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p class="message">Already registered? <Link to='/login'>Sign In</Link></p>
             </form>
        </div>
    </div>
  );
}
export default Register;