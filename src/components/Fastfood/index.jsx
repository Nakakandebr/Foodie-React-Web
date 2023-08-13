import React from 'react'
import Humberger from '../images/first image (copy).jpeg'
import './style.css'

export default function Fastfood() {
    return (
      <div className="container">
        <div className="content">
          <h1 className="all">All Fast Food is <br/> Available at Foodle</h1>
          <p className="man">We are Just A Click Away When You <br/>Crave For Delicious Fast Food</p>
          <div className="buttons">
            <button className='bag'><i className="bi bi-handbag-fill"></i>Buy Now</button>
            <button><i className="bi bi-play-circle"></i>How To Order</button>
          </div>
        </div>
        <div className="image-container">
          <img className="hamburger" src={Humberger} alt='burger'></img>
        </div>
      </div>
    );
  }