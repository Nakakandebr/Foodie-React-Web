import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Regular from  "./components/Regular/Regular"
import BestDelivered from "./components/BestDelivered/index";
import Product2 from "./components/Product2";
import Service from "./components/services";
import Fastfood from "./components/Fastfood";
import Flyer from "./components/section";


function App() {
  return (
    <div>

<Navbar/>
<br/>
<br/>
<Fastfood/>
<br/>
<br/>
<Service/>

<br/>
<br/>
<Product2/>

<br/>
<br/>
<BestDelivered/>
<br/>
<br/>
<Regular/>
<br/>
<br/>
<Product/>


<Flyer/>
<br/>
<br/>
<Footer/>
    </div>
  )

     
}

export default App;
