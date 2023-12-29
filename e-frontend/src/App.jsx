<<<<<<< HEAD
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ourstore" element={<OurStore/>} />
        </Route>
      </Routes>
=======
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

>>>>>>> bd688712cf8889176da1e894382cc4c03860309b
    </>
  );
}

export default App;
