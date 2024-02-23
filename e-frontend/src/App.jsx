import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import OurStore from "./Pages/OurStore";
import DeliveryDetails from "./Pages/DeliveryDetails";
import SingleProduct from "./Pages/SingleProduct";
import Delivery_address from "./Pages/Delivery_address";
import Cart from "./Pages/Cart";
import Orderplaced from "./Pages/Orderplaced";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import Reset from "./Pages/ResetPassword";
import Payment from "./Pages/Payment";
import Whislist from "./Pages/Whislist";
import Otp from "./Pages/Otp";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes } from "./protect/PrivateRoutes";
import { useNavigate } from "react-router-dom";
import { OpenRoutes } from "./protect/OpenRoutes";
import StepHeader from "./Component/StepHeader";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("user"));
    if (localUsers && localUsers.token !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset/:token" element={<Reset />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="singleProduct/:name/:id" element={<SingleProduct />} />

            <Route path="Addtocart" element={<Cart />} />
            <Route path="delivery-address" element={<Delivery_address />} />

            <Route path="ourstore" element={<OurStore />} />
            <Route path="/ourstore/:searchTerm" element={<OurStore />} />

            <Route
              path="stepper"
              element={
                <PrivateRoutes>
                  <StepHeader />
                </PrivateRoutes>
              }
            />

            <Route path="orderpalced" element={<Orderplaced />} />
            <Route path="Whislist" element={<Whislist />} />

            <Route path="payment" element={<Payment />} />

            <Route
              path="profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />

            <Route path="deliveryDetails" element={<DeliveryDetails />} />
          </Route>

          {/* **********Public Routes********** */}

          <Route
            path="/login"
            element={
              <OpenRoutes>
                <Login />
              </OpenRoutes>
            }
          />

          <Route
            path="/signup"
            element={
              <OpenRoutes>
                <Signup />
              </OpenRoutes>
            }
          />

          {/* ***************Private Routes*************** */}

          {/* <Route path=""/> */}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
