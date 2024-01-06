import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";
import { DeliveryDetails } from "./Pages/DeliveryDetails";
import SingleProduct from "./Pages/SingleProduct";
import Delivery_address from "./Pages/Delivery_address";
import Cart from "./Pages/Cart";
import Orderplaced from "./Pages/Orderplaced";
import Login from "./Component/Login";
import Payment from "./Pages/Payment";
import Whislist from "./Pages/Whislist";
import Otp from "./Pages/Otp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singleProduct" element={<SingleProduct />} />
          <Route path="delivery-address" element={<Delivery_address />} />
          <Route path="Addtocart" element={<Cart />} />
          <Route path="ourstore" element={<OurStore />} />
          <Route path="delivery-details" element={<DeliveryDetails />} />
          <Route path="orderpalced" element={<Orderplaced />} />
          <Route path="whislist" element={<Whislist />} />
          <Route path="payment" element={<Payment />} />
          <Route path="otp" element={<Otp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
