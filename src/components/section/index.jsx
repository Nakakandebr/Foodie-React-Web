import React from "react";
import './style.css'
import Picture from '../images/15 off.jpeg'
import Picture2 from '../images/25 discount.jpeg'
import Picture3 from '../images/save 20.jpeg'



const Flyer=()=>{
    return(
<div className="images">
<div className="firstimg">
<img src={Picture2}alt="" className="first"/>
</div>
<div  className="secondimg">
<img src={Picture} alt="" className="imgss" />
<img src={Picture3} alt="" className="imgss" />
</div>







        </div>
    )
}
export default Flyer
