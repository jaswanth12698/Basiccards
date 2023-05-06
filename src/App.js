import React, { useEffect, useState } from "react";
import "./App.css";
import Classcard from "./components/Classcard";
// import Empcard from "./components/empcard";
// import Cards from "./components/cards";
// import Products from "./components/products";
// import Offer from "./components/offer";
// import Sale from "./components/sale";
// import Cards from "./components/cards";
// import MyForm from "./components/form";
// import RegistrationForm from "./components/Register";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const ProdData = res.data;
      this.setState({ ProdData });
    });
  }, []);

  console.log(products);

  return (
    <div className="App">
      <div className="cards">
        <div className="products">
          {products.map((products) => (
            <Classcard key={products.id} />
          ))}
        </div>
        {/* <Login />
        <br />
        <br /> */}
        {/* <Registration /> <br />
        <br /> */}
        {/* <RegistrationForm /> <br />
        <br />*/}
        {/* <MyForm /> <br />
        <br /> */}
        {/* <Empcard /> <br />
        <br />
        <Cards /> <br />
        <br />
        <Classcard />
        <br />
        <br /> */}
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
