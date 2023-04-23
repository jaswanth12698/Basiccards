import React, { useState } from "react";
import "./products.css";
import Product from "./product";
import p1 from "./products/p1.jpg";
import p2 from "./products/p2.jpg";
import p3 from "./products/p3.jpg";
import p4 from "./products/p4.jpg";
import p5 from "./products/p5.jpg";
import p6 from "./products/p6.jpg";
import p7 from "./products/p7.jpg";
import p8 from "./products/p8.jpg";

function Products() {
  const [brandcards, setbrand] = useState([
    { im: p1, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$78" },
    { im: p2, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$68" },
    { im: p3, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$88" },
    { im: p4, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$98" },
    { im: p5, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$48" },
    { im: p6, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$68" },
    { im: p7, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$98" },
    { im: p8, ros1: "adidas", ros2: "Cartoon Astronaut T-Shirts", ros3: "$68" },
  ]);
  console.log(brandcards.type);

  return (
    <div className="App">
      <div className="products">
        <div className="proddiv section-p1">
          {brandcards.map((call) => (
            <Product
              im={call.im}
              ros1={call.ros1}
              ros2={call.ros2}
              ros3={call.ros3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
