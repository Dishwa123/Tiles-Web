// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <><div>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/ICE-ONYX.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="/HARROW-ONYX.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="/TERIX_BLACK.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
      <div className="who-we-are" style={{ backgroundColor:'white', color:'black'}}>
        <h2 style={{marginBottom: '20px', fontWeight:'600'}}><strong>Simply Beautiful. Utterly Durable.</strong></h2>
        <p style={{fontSize:'20px'}}>At Orinda, we’re passionate about the art and science of tile making, and how it transforms the spaces and people connected to them. It’s through this passion we turn the raw materials from the finest mines of India into tiles that make a statement — every square inch. Our industrial expertise, fine raw materials, and subtle artistry are reflected in our range of products. And all meeting the international quality standards, designed to arouse aesthetic appeal, and engineered for everlasting durability. </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3" style={{ marginLeft: '14%' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/ARIANA-NATURAL-ZOOM-4K.jpg" className="card-img-top" alt="Ariana Natural Zoom 4K" />
          <div className="card-body">
            <h5 className="card-title">MARBLE</h5>
            <Link to="/Product/Marble" className="btn btn-primary">MARBLE</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src="/VICTORIA-BROWN-ZOOM.jpg" className="card-img-top" alt="Victoria Brown Zoom" />
          <div className="card-body">
            <h5 className="card-title">STONE</h5>
            <Link to="/Product/stone" className="btn btn-primary">STONE</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3" style={{ marginRight: '0%' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/b0c74a37-3dbe-4860-94c4-d5d3b4cbd356.jpg" className="card-img-top" alt="Wood" />
          <div className="card-body">
            <h5 className="card-title">WOOD</h5>
            <Link to="/Product/wood" className="btn btn-primary">WOOD</Link>
          </div>
        </div>
      </div>
    </div>

</>




  );

  }
export default Home;
