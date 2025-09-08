import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About Us'; 
import ContactUs from './Contact Us'; 
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import Marble from './Marble';
import Stone from './Stone'; 
import Wood from './Wood'; 


export default function App() {
  const [addedCart, setAddedCart] = useState([]);
 

  const addToCart = (item) => {
    setAddedCart([...addedCart, item]);
  };

  const removeItem = (index) => {
    let temp = [...addedCart];
    temp.splice(index, 1);
    setAddedCart(temp);
  };

  return (
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white', color: 'black', marginBottom: '0px', borderBottom: '2px solid black' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/1logo.jpg" alt="logo" width="150px" height="100px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link active" to="/" style={{ color: 'black' }}>Home</Link>
              </li>
              <li className="nav-item dropdown" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link dropdown-toggle" to="/Product" id="navbarDropdown" role="button" style={{ color: 'black' }} data-bs-toggle="dropdown" aria-expanded="false">
                  Product 
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: 'gray' }}>
                  <li><Link className="dropdown-item" to="/Product/Marble">MARBLE</Link></li>
                  <li><Link className="dropdown-item" to="/Product/Stone">STONE</Link></li>
                  <li><Link className="dropdown-item" to="/Product/Wood">WOOD</Link></li>
                </ul>
              </li>
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link" to="/About Us" style={{ color: 'black' }}>About Us</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link" to="/Contact Us" style={{ color: 'black' }}>Contact Us</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link" to="/Cart" style={{ color: 'black' }}>Cart</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link" to="/Login" style={{ color: 'black' }}>Login</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '40px', backgroundColor: 'gray' }}>
                <Link className="nav-link" to="/Register" style={{ color: 'black' }}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About Us" element={<AboutUs />} />
        <Route path="/Contact Us" element={<ContactUs />} />
        <Route path="/Cart" element={<Cart purchaseItem={addedCart} deleteItem={removeItem} />} />
        <Route path="/Product/Marble" element={<Marble addToCart={addToCart} />} />
        <Route path="/Product/Stone" element={<Stone addToCart={addToCart} />} />
        <Route path="/Product/Wood" element={<Wood addToCart={addToCart} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};
