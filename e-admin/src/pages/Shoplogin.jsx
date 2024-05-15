import React, { useState, useEffect } from "react";
import UseInput from "../useCustom/useInput";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/Shoplogin.css";
import logo from "../assets/image/logo12.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { shopLoginData } from "../features/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Shoplogin() {
  const [eye, setEye] = useState(false);
  const { LoginShop } = useSelector((state) => state.shop);
  const navigator = useNavigate();
  const dispatch = useDispatch();
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
        dispatch(shopLoginData(value));
      
      },
    });

  useEffect(() => {
    if (LoginShop !== "") {
      navigator("/admin");
      window.location.reload();
    }
  });


  return (
    <div className="otp_background">
      <div className="row justify-content-center shopSignup_row">
        <div className="col-lg-4 col-10">
          <div class="form-container">
            <div className="m-auto shopSignup_image my-3">
              <img src={logo} width="100%" />
            </div>

            <form class="form" onSubmit={handleSubmit}>
              <div class="input-group">
                <label for="username">Email</label>
                <input
                  type="text"
                  name="shop_email"
                  id="shop_email"
                  placeholder="Email"
                  value={values.shop_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.shop_email && touched.shop_email ? <small style={{color:"red"}}>{errors.shop_email}</small>:""}
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="shop_password"
                  id="password"
                  placeholder="Password"
                  value={values.shop_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                  {errors.shop_password && touched.shop_password ? <small style={{color:"red"}}>{errors.shop_password}</small>:""}
              </div>
              <div className="mt-4">
                <button class="sign">Shop Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoplogin;
