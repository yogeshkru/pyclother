import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginadmin from "./pages/Loginadmin";
import Mainlayout from "./component/Mainlayout";
import Dashboard from "./pages/Dashboard";

import Enquiries from "./pages/Enquiries";

import Orders from "./pages/Orders";

import Customers from "./pages/Customers";
import Colorlist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addproduct from "./pages/Addproduct";
import { ToastContainer } from "react-toastify";
import ViewEnq from "./pages/ViewEnq";
import Payment from "./pages/Payment";

import "react-toastify/dist/ReactToastify.css";
import Shopsignup from "./pages/Shopsignup";
import Shopreset from "./pages/ShopReset";
import Shoplogin from "./pages/Shoplogin";
import Gst from "./pages/Gst";

import Couponlist from "./pages/Couponlist";
import Banners from "./pages/Banners";
import Viewproduct from "./pages/Viewproduct";

import { OpenRoutes } from "./protect/openRoutes";
import { PrivateRoutes } from "./protect/PrivateRoutes";
import Privacypolicy from "./pages/Privacypolicy";
import Viewuserproduct from "./pages/Viewuserproduct";
function App() {
  let content;

  // Check if admin_user exists in localStorage and is not null
  // const loaders = JSON.parse(localStorage.getItem("admin_user"));

  // if (loaders && Object.keys(loaders).length > 0) {
  //   content = window.location.reload();
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/shopsign" element={<Shopsignup />} />
          <Route
            path="/"
            element={
              <OpenRoutes>
                <Shoplogin />
              </OpenRoutes>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoutes>
                <Mainlayout />
              </PrivateRoutes>
            }
          >
            <Route index element={<Dashboard />} />
            {/* /0--------------------------------- */}
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<ViewEnq />} />
            {/* ------------------------------ */}
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="color-list" element={<Colorlist />} />
            <Route path="category-list" element={<Categorylist />} />
            <Route path="brand-list" element={<Brandlist />} />
            <Route path="product-list" element={<Productlist />} />
            {/* *********************************** */}
            <Route path="product" element={<Addproduct />} />
            <Route path="product/:id" element={<Addproduct />} />

            {/* ********************************** */}
            <Route path="payment" element={<Payment />} />
            <Route path="banners" element={<Banners />} />

            <Route path="coupon-list" element={<Couponlist />} />
            <Route path="policy" element={<Privacypolicy />} />
            <Route path="gst" element={<Gst />} />
            <Route path="view" element={<Viewproduct />} />
            <Route path="viewuser" element={<Viewuserproduct />} />
          </Route>
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
