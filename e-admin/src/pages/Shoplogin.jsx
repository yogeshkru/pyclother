import React, { useState, useEffect } from "react";
import UseInput from "../useCustom/useInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Mainlayout.css";
import "../styles/Loginadmin.css";
import logo from "../assets/image/logo12.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import {shopLoginData} from "../features/shop/shopSlice";
import { useDispatch,useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"

function Shoplogin() {

  // const isAuthenticated = !!localStorage.getItem("admin_user")
  const [eye, setEye] = useState(false);
  const{isSuccess}=useSelector(state=>state.shop)
  const navigator=useNavigate()
 const dispatch=useDispatch()
  const handleEye = () => {
    setEye(!eye);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        shop_email: "",

        shop_password: "",
      },
      validationSchema: Yup.object().shape({
        shop_email: Yup.string()
          .required("Email is required")
          .matches(
            /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Invalid email address"
          ),
        shop_password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol")
          .required("Please Enter New Password"),
      }),
      onSubmit: (value) => {
        dispatch(shopLoginData(value))
      }
    });

  useEffect(() => {
    if (isSuccess) {
      navigator("/admin")
      window.location.reload()
    }
   
  })



  return (
    <div className="otp_background">
      <div className="row justify-content-center shopSignup_row">
        <div className="col-lg-4 col-10 shopSignup_Collogin ">
          <div className="m-auto shopSignup_image my-3">
            <img src={logo} width="100%" />
          </div>
          <h4 className="text-center fw-bold">Shop Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <UseInput
                type="email"
                name="shop_email"
                placeholder="Email"
                onChange={handleChange}
                value={values.shop_email}
                onBlur={handleBlur}
                label="Email"
              />
            </div>
            {errors.shop_email && touched.shop_email ? <div style={{ color: "red" }}>{errors.shop_email}</div> : ""}

            <div className="shopSignup__icons mt-4">
              <UseInput
                type={eye ? "text" : "password"}
                name="shop_password"
                placeholder="Email"
                onChange={handleChange}
                value={values.shop_password}
                onBlur={handleBlur}
                label="Password"
              />
              <span className="shopSignup__eyeIcons" onClick={handleEye}>
                {eye ? (
                  <IoEyeOutline style={{ fontSize: "20px" }} />
                ) : (
                  <FaRegEyeSlash style={{ fontSize: "20px" }} />
                )}
              </span>
            </div>
            {errors.shop_password && touched.shop_email ? <div style={{ color: "red" }}>{errors.shop_password}</div> : ""}

            <button type="submit" className="shopSignupButton mt-4">
              Login
            </button>

            <div className="d-flex justify-content-end mt-5">

              <Link to="/shopsign " style={{textDecoration:"none"}}>
                 Shop Create
              </Link>

            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Shoplogin;
