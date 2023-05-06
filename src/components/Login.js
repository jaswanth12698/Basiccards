import React from "react";
import "./Login.css";
// import h1 from "./1.jpg";
import input from "./input";
import Input from "./input";

function Login() {
  return (
    <div>
      <header>
        <h2 className="logo">Jas</h2>
        <nav className="navigation">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
          <button className="btnLogin-popup">Login</button>
        </nav>
      </header>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail" />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <Input />
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed" />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <span>Forgot Password?</span>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have a Account?{" "}
              <span className="register-link">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
