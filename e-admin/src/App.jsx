

import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { ToastContainer } from "react-toastify";
import ViewEnq from "./pages/ViewEnq"
import Payment from "./pages/Payment";

import 'react-toastify/dist/ReactToastify.css';
import Shopsignup from "./pages/Shopsignup";
import Shoplogin from "./pages/Shoplogin";
import Gst from "./pages/Gst"

import Couponlist from "./pages/Couponlist";
import Banners from "./pages/Banners"
import Viewproduct from "./pages/Viewproduct";

import { OpenRoutes } from "./protect/openRoutes";
import { PrivateRoutes } from "./protect/PrivateRoutes";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={

           <Loginadmin />

        
        } /> */}
        <Route path="/shopsign" element={<Shopsignup />} />
        <Route path="/" element={
        
        <OpenRoutes>
        
        <Shoplogin />
        </OpenRoutes>

        
        } />
        <Route path="/admin" element={
        <PrivateRoutes>

          <Mainlayout />

        </PrivateRoutes>
        
        }>
          <Route index element={<Dashboard />} />
          {/* /0--------------------------------- */}
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq/>}/>
          {/* ------------------------------ */}
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="color-list" element={<Colorlist />} />
          <Route path="category-list" element={<Categorylist />} />
          <Route path="brand-list" element={<Brandlist />} />
          <Route path="product-list" element={<Productlist />} />
          {/* *********************************** */}
          <Route path="product" element={<Addproduct />} />
          {/* ********************************** */}
          <Route path="payment" element={<Payment />} />
          <Route path="banners" element={<Banners/>}/>

          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="gst" element={<Gst/>}/>
          <Route path="view" element={<Viewproduct/>}/>
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
