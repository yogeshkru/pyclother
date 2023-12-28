import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css'
import Layout from './Component/Layout';
import Home from './Pages/Home';
<<<<<<< HEAD
import SingleProduct from './Pages/singleProduct';
=======
>>>>>>> c2b3be7ecb3ab7280f8ce41a18fe385a46a081e0

function App() {


  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
        </Route>
      </Routes>

=======
    <Routes>
      <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
    </Route>
    </Routes>
    
>>>>>>> c2b3be7ecb3ab7280f8ce41a18fe385a46a081e0
    </>
  )
}

export default App
