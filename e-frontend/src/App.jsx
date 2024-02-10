import { useState,useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";
import DeliveryDetails from "./Pages/DeliveryDetails";
import SingleProduct from "./Pages/SingleProduct";
import Delivery_address from "./Pages/Delivery_address";
import Cart from "./Pages/Cart";
import Orderplaced from "./Pages/Orderplaced";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import Reset from "./Pages/ResetPassword";
import Payment from "./Pages/Payment";
import Whislist from "./Pages/Whislist";
import Otp from "./Pages/Otp";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes } from "./protect/PrivateRoutes";
import { OpenRoutes } from "./protect/OpenRoutes";
import StepHeader from "./Component/StepHeader";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset/:token" element={<Reset />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="singleProduct/:name" element={<SingleProduct />} />




            <Route path="Addtocart" element={<Cart />} />
            <Route path="delivery-address" element={<Delivery_address />} />


            
            <Route path="ourstore" element={<OurStore />} />

         
            <Route path="stepper" element={<StepHeader />} />
            {/* <Route path="cart" element={<Cart />} /> */}
        
            <Route path="orderpalced" element={<Orderplaced />} />
            <Route path="Whislist" element={<Whislist />} />

            <Route path="payment" element={<Payment />} />
            
            <Route path="profile" element={<Profile/>}/>



            <Route path="deliveryDetails" element={<DeliveryDetails />} />
          </Route>

          {/* **********Public Routes********** */}

          <Route
            path="/login"
            element={
              <OpenRoutes>
                <Login />
              </OpenRoutes>
            }
          />

          <Route
            path="/signup"
            element={
              <OpenRoutes>
                <Signup />
              </OpenRoutes>
            }
          />

          {/* ***************Private Routes*************** */}

          {/* <Route path=""/> */}



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
    </>
  );
}

export default App;
