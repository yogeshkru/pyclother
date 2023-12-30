import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'
import Layout from './Component/Layout';

// import { Cartheader } from './Component/Cartheader';

import Home from './Pages/Home';

import SingleProduct from './Pages/singleProduct';
import Cart from './Pages/Cart';

// import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
          {/* <Route path='/Cartheader' element={<Cartheader/>}/> */}
          <Route path='/Addtocart' element={<Cart/>}/>
          <Route path="ourstore" element={<OurStore />} />
        </Route>
      </Routes>


{/*         
          <Route path="/singleProduct" element={<SingleProduct />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
