import React from "react";
import "./product.css";

function Product({ ros1, im, ros2, ros3 }) {
  return (
    <div className="pro">
      <img src={im} alt="Product" />
      <div className="des">
        <span>{ros1}</span>
        <h5>{ros2}</h5>
        <h4>{ros3}</h4>
      </div>
    </div>
  );
}

export default Product;
