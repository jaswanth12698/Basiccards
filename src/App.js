import React from 'react';
import './App.css';
import Card from './components/card';
import Product from './components/product';
import Offer from './components/offer';
import Sale from './components/sale';

 
function App() {


  return (
    <div className="App">
      <div className="cards">
          <Card /> <br /><br />
          <Product /> <br /><br />
          <Offer /> <br /><br />
          <Sale />
      </div>
    </div>
  );
}

export default App;
          
                    

