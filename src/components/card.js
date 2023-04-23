import React from "react";
import "./card.css";

function Card({ head, img }) {
  return (
    <div className="fe-box">
      <img src={img} alt="Free Shipping" />
      <h6>{head}</h6>
    </div>
  );
}

export default Card;
