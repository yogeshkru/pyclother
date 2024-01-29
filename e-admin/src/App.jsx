

import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
import Addcolor from "./pages/Addcolor";
import Addcategory from "./pages/Addcategory";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import {ToastContainer} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginadmin/>}/>
        <Route path="/admin" element={<Mainlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="color-list" element={<Colorlist/>}/>
          <Route path="category-list" element={<Categorylist/>}/>
          <Route path="brand-list" element={<Brandlist/>}/>
          <Route path="product-list" element={<Productlist/>}/>
          <Route path="/admin/color-list/color" element={<Addcolor/>}/>
          <Route path="category" element={<Addcategory/>}/>
          <Route path="/admin/brand-list/brand" element={<Addbrand/>}/>
          <Route path="product" element={<Addproduct/>}/>
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

  
  </>;
}

export default App;
