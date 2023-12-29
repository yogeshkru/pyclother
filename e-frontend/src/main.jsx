import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======

>>>>>>> bd688712cf8889176da1e894382cc4c03860309b
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
