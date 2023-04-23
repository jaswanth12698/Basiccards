import React from "react";
import "./App.css";
import Empcard from "./components/empcard";
import Cards from "./components/cards";
// import Products from "./components/products";
// import Offer from "./components/offer";
// import Sale from "./components/sale";
// import Cards from "./components/cards";
import Classcard from "./components/Classcard";

function App() {
  return (
    <div className="App">
      <div className="cards">
        <Empcard /> <br />
        <br />
        <Cards /> <br />
        <br />
        <Classcard />
        <br />
        <br />
        {/* <Products /> <br />
        <br />
        <Offer /> <br />
        <br />
        <Sale /> */}
        {/* <Car /> */}
        <br />
        <br />
      </div>
    </div>
  );
}

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

export default App;
