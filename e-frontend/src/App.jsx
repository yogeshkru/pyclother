import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SingleProduct from "./Pages/singleProduct";
import Cart from "./Pages/Cart";

import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";
import Orderplaced from "./Pages/Orderplaced";
import Payment from "./Pages/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singleProduct" element={<SingleProduct />} />
       
          <Route path="Addtocart" element={<Cart />} />
          <Route path="ourstore" element={<OurStore />} />
          <Route path="orderpalced" element={<Orderplaced />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
