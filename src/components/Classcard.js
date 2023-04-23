import React, { Component } from "react";
import "./Classcard.css";

class Classcard extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Nature",
    };
  }
  render() {
    return (
      <section>
        <div className="box">
          <img
            src="https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Scene"
          />
          <h6>{this.state.brand}</h6>
        </div>
      </section>
    );
  }
}

export default Classcard;
