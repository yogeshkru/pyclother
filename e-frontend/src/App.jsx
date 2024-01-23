import { useState } from "react";
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
import Payment from "./Pages/Payment";
import Whislist from "./Pages/Whislist";
import Otp from "./Pages/Otp";
import Signup from "./Pages/Signup";
import {ToastContainer} from "react-toastify"
import { ActivationPage } from "./Routes/AdminRoutes";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin-activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="singleProduct" element={<SingleProduct />} />
            <Route path="delivery-address" element={<Delivery_address />} />
            <Route path="Addtocart" element={<Cart />} />
            <Route path="ourstore" element={<OurStore />} />
            <Route path="deliveryDetails" element={<DeliveryDetails />} />
            <Route path="orderpalced" element={<Orderplaced />} />
            <Route path="Whislist" element={<Whislist />} />
            <Route path="payment" element={<Payment />} />
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
    </>
  );
}

export default App;
