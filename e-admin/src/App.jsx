

import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginadmin from "./pages/Loginadmin";
import Mainlayout from "./component/Mainlayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";

import Addproduct from "./pages/Addproduct";
import {ToastContainer} from "react-toastify";
import Payment from "./pages/Payment";

import 'react-toastify/dist/ReactToastify.css';
import Shopsignup from "./pages/Shopsignup";
import Shoplogin from "./pages/Shoplogin";
import Couponlist from "./pages/Couponlist";
function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginadmin/>}/>
        <Route path="/shopsign" element={<Shopsignup/>}/>
        <Route path="/shoplogin" element={<Shoplogin/>}/>
        <Route path="/admin" element={<Mainlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="color-list" element={<Colorlist/>}/>
          <Route path="category-list" element={<Categorylist/>}/>
          <Route path="brand-list" element={<Brandlist/>}/>
          <Route path="product-list" element={<Productlist/>}/>
        
         
      
          <Route path="product" element={<Addproduct/>}/>
          <Route path="payment" element={<Payment/>}/>
          <Route path="coupon-list" element={<Couponlist/>}/>
        </Route>
       
      </Routes>

      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
  </BrowserRouter>

  
  </>;
}

export default App;
