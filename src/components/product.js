import React from 'react';
import './product.css';


function product() {
  return (
    <div className="pro">
        <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&w=1000&q=80" alt='Product' />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <h4>$78</h4>
        </div>
      </div>

  )
}

export default product