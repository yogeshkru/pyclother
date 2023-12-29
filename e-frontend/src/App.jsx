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
    </>
  );
}

export default App;
