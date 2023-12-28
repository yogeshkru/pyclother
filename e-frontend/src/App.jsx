import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css'
import Layout from './Component/Layout';
import Home from './Pages/Home';
import SingleProduct from './Pages/singleProduct';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
