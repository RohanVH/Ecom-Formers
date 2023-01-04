import React from 'react'
import "./App.css";
import { Link } from 'react-router-dom'; 
const Login = () => {
  return (
    <div>

        <div class="container">
            <div class="left-section">
                <div class="header">
                <h1 class="animation a1">Welcome Back!</h1>
                <h3 class="animation a1">Formers Login</h3>
                <h4 class="animation a2">Enter your credentials to access your dashboard.</h4>
                </div>
                <div class="form">
                <input type="email" class="form-field animation a3" placeholder="Username" />
                <input type="password" class="form-field animation a4" placeholder="Password" />
                <button class="animation a6">LOGIN</button>
                <hr class="animation a6"/>
                <button class="animation a6" >
                    <Link to="/fsignup" style={{textDecoration:"none", color: '#FFF' }} className="link">SIGINUP</Link>
                    {/* <Link to="/fsignup" style={{textDecoration:"none", color: '#FFF' }} className="link">SIGINUP</Link> */}
                    </button>
                
                </div>
            </div>
            <div class="right-section"></div>
        </div>
    </div>
  )
}

export default Login