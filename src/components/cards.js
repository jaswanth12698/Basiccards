import React, { useState } from "react";
import "./cards.css";
import f1 from "./features/f1.png";
import f2 from "./features/f2.png";
import f3 from "./features/f3.png";
import f4 from "./features/f4.png";
import f5 from "./features/f5.png";
import f6 from "./features/f6.png";
import Card from "./Card";

function Cards() {
  const [brandcards, setbrand] = useState([
    { head: "Free Shipping", tail: f1 },
    { head: "Online Order", tail: f2 },
    { head: "Save Money", tail: f3 },
    { head: "Promotions", tail: f4 },
    { head: "Happy Sell", tail: f5 },
    { head: "Happy Sell", tail: f6 },
  ]);
  console.log(brandcards.type);

  return (
    <div className="App">
      <div className="cards">
        <div className="carddiv">
          {brandcards.map((rail) => (
            <Card head={rail.head} img={rail.tail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
