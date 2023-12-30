import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css'
import Layout from './Component/Layout';
import Home from './Pages/Home';
import SingleProduct from './Pages/singleProduct';
import Delivery_address from './Pages/Delivery_address';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
          <Route path='/delivery_address' element={<Delivery_address/>} />
        </Route>
      </Routes>

    </>
  )
}

export default App
