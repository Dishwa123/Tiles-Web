import React from 'react';
import WoodData from './wood.json';

const WoodPage = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    alert(product.title + " has been added to Cart.");
    addToCart(product);
  };


  return (
    <div className="row">
      <h2 className="col-12 text-center">Wood Products</h2>
      {WoodData.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card product">
            <img src={product.icon} className="card-img-top" alt={product.title} style={{ width: '200px', height: '200px' }} />
            <div className="card-body" style={{color:"black"}}>
              <h5 className="card-title" >{product.title}</h5>
              <p className="card-text">Price: Rs. {product.price}/-</p>
              <p className="card-text">{product.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-warning" onClick={() => handleAddToCart(product)}>Add To Cart</button>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WoodPage;
