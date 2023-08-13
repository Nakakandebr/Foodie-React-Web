import movie1 from "../images/chicken grilled.jpeg"
import movie2 from "../images/chicken pizza.jpeg"
import movie3 from "../images/chicken fry.jpeg"
import movie4 from "../images/chicken sandwich.jpeg"
import movie5 from "../images/taco.jpeg"
import movie6 from "../images/Noddle Ramen.jpeg"


export const images = [
    {
        
           img :movie1,
           header:" Chicken Burger ",
           stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
           tag :  "(16)",
          
        
            "currency": "$3.50",
            "buttonText": "Buy Now",
         
            
          
    },
    {
        
        img :movie2,
        header:" Chicken Pizza ",
        stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
        tag :  "(142)",
         "currency": "$4.20",
         "buttonText": "Buy Now",
      
         
       
 },
 {
        
    img :movie3,
    header:"Chicken Fry",
    stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
    tag :  "(132)",
          
        
    "currency": "$5.00",
    "buttonText": "Buy Now",
 
    
   
},
{
        
    img :movie4,
    header:"Grill Sandwich",
    stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
    tag :  "(112)",
     "currency": "$4.80",
     "buttonText": "Buy Now",
  
     
   
},
{
        
    img :movie5,
    header:"Taco Traifi",
    stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
     tag : "(152)",
     "currency": "$3.63",
     "buttonText": "Buy Now",
  
     
   
},
{
        
    img :movie6,
    header:"Noodle's Ramen",
    stars: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
    tag : "(162)",
     "currency": "$6.50",
     "buttonText": "Buy Now",
  
     
   
},



   

]