import { useState } from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css'
import Layout from './Component/Layout';
import { Cartheader } from './Component/Cartheader';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/Cartheader' element={<Cartheader/>}/>
      </Route>
    </Routes>
    
    </>
  )
}

export default App
