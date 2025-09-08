import React from 'react';
import Marble from './Marble';
import Stone from './Stone';
import Wood from './Wood';


      const ProductPage = ({ addToCart }) => {
  return (
    <div>
      {/* Other content */}
      <Marble addToCart={addToCart} />
      <Stone addToCart={addToCart} />
      <Wood addToCart={addToCart} />
      {/* Other content */}
    </div>
  );
};
      export default ProductPage;
