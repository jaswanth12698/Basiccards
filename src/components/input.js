import React from "react";
import "./input.css";

function Input() {
  return (
    <div className="input-box">
      <span className="icon">
        <ion-icon name="mail" />
      </span>
      <input type="email" required />
      <label>Email</label>
    </div>
  );
}

export default Input;
