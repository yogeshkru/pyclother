import React, { useState } from "react";
import UseInput from "../useCustom/useInput";
import "../styles/Mainlayout.css";
import "../styles/Loginadmin.css"
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import logo from "../assets/image/logo12.png"
function Shopsignup() {
  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setEye(!eye);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        shop_name: "",
        shop_email: "",
        shop_phone: "",
        shop_password: "",
        shop_address: "",
        shop_zipcode: "",
        shop_avatar: "",
      },
    });
  return (
    <div className="otp_background">
      <div className="row justify-content-center shopSignup_row">
        <div className="col-lg-4 shopSignup_Col">
            <div className="m-auto shopSignup_image my-3">
                <img src={logo} width="100%"/>
            </div>
            <h4 className="text-center fw-bold">Register as a Seller</h4>
          <form>
            <UseInput
              type="text"
              name="shop_name"
              placeholder="Name"
              onChange={handleChange}
              value={values.shop_name}
              onBlur={handleBlur}
              label="Name"
            />

            <UseInput
              type="email"
              name="shop_email"
              placeholder="Email"
              onChange={handleChange}
              value={values.shop_email}
              onBlur={handleBlur}
              label="Email"
            />

            <UseInput
              type="number"
              name="shop_phone"
              placeholder="Phone"
              onChange={handleChange}
              value={values.shop_phone}
              onBlur={handleBlur}
              label="Phone"
            />

            <UseInput
              type="text"
              name="shop_address"
              placeholder="Address"
              onChange={handleChange}
              value={values.shop_address}
              onBlur={handleBlur}
              label="Address"
            />
            <div className="shopSignup__icons">
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

            <UseInput
              type="number"
              name="shop_zipcode"
              placeholder="PinCode"
              onChange={handleChange}
              value={values.shop_zipcode}
              onBlur={handleBlur}
              label="Pincode"
            />

            <div className="mb-4">
              <input
                type="file"
                name="shop_avatar"
                value={values.shop_avatar}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <button type="submit" className="shopSignupButton">Submit</button>
          </form>
          <div className="mt-2">
          <p style={{cursor:"pointer"}}>Already have an account? <span style={{color:"blue"}}>ShopLogin</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopsignup;
