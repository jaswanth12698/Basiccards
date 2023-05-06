import React from "react";
import "./Registration.css";

function Registration() {
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
      <br />
      <br />

      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person" />
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail" />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed" />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> I agree to the Terms &amp; Conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              {" "}
              Already have a Account? <span className="login-link">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
