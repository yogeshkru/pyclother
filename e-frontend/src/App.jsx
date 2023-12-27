import { useState } from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css'
import Layout from './Component/Layout';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
      </Route>
    </Routes>
    
    </>
  )
}

export default App
