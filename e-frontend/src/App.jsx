import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'

import { DeliveryDetails } from "./Pages/DeliveryDetails";
import Layout from './Component/Layout';
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';
import Delivery_address from './Pages/Delivery_address';
import Cart from "./Pages/Cart";
import OurStore from "./Pages/OurStore";
import Orderplaced from "./Pages/Orderplaced";
import Payment from "./Pages/Payment";
import WishList from "./Pages/WishList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
          <Route path='/delivery_address' element={<Delivery_address/>} />
          <Route path="singleProduct" element={<SingleProduct />} />
       
          <Route path="Addtocart" element={<Cart />} />
          <Route path="ourstore" element={<OurStore />} />
          <Route path='delivery-details' element={<DeliveryDetails/>}/>
          <Route path="orderpalced" element={<Orderplaced />} />
          <Route path="payment" element={<Payment />} />
          <Route path="wishlist" element={<WishList/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
