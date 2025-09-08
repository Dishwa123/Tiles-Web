// ParentComponent.js

import React, { useState } from 'react';
import Marble from './Marble';
import Stone from './Stone';
import Wood from './Wood';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Marble addToCart={addToCart} />
      <Stone addToCart={addToCart} />
      <Wood addToCart={addToCart} />
    </div>
  );
};

export default ParentComponent;
