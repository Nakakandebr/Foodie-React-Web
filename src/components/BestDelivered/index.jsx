import React from 'react'
import './style.css';
import {imagez } from "../json2/json2"


export default function BestDelivered() {
  return (
   
    <div className="product-container">
     
      {imagez.map((image, index) => (
        <div className="product-item" key={index}>
          <img src={image.img} alt="Product" className="productz-image" />
          <div className="product-details">
          <h1 className='head'>{image.header}</h1>
          
            <div className="product-starz">{image.buttonText} {image.icon}</div>

            


          </div>
        </div>
      ))}
    </div>
  );
}
        
      


// import React from 'react'

// function Product() {

//   return (
    
    
//     <div className="product-container">
     
//       {images.map((image, index) => (
//         <div className="product-item" key={index}>
//           <img src={image.img} alt="Product" className="product-image" />
//           <div className="product-details">
//           <h1>{image.header}</h1>
//             <div className="product-stars">{image.stars}  {image.tag}</div>
            
//             <div className="product-price">{image.currency} <button className="product-button">{image.buttonText}</button> </div>
           
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Product;

