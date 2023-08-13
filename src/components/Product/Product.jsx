import React from 'react'
import './style.css';
import {images } from "../json/json"

function Product() {

  return (
    
    
    <div className="product-container">
     
      {images.map((image, index) => (
        <div className="product-item" key={index}>
          <img src={image.img} alt="Product" className="product-image" />
          <div className="product-details">
          <h1>{image.header}</h1>
            <div className="product-stars">{image.stars}  {image.tag}</div>
            
            <div className="product-price">{image.currency} <button className="product-button">{image.buttonText}</button> </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

