import React, { useState, useEffect } from "react";
import UseInput from "../useCustom/useInput";
import "../styles/Mainlayout.css";
import "../styles/Loginadmin.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import logo from "../assets/image/logo12.png";
import { shopSignData } from "../features/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Shopsignup() {
  const dispatch = useDispatch();

  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setEye(!eye);
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      shop_name: "",
      shop_email: "",
      shop_phone: "",
      shop_password: "",
      shop_address: "",
      shop_zipcode: "",
      role: "",
    },
    onSubmit: (value) => {
      console.log(value);
      dispatch(shopSignData(value));

      resetForm();
    },
    validationSchema: Yup.object().shape({
      shop_name: Yup.string()
        .matches(
          /^[A-Z][a-z]*$/,
          "Name must start with a capital letter and be followed by lowercase letters"
        )
        .required("Name is required"),
      shop_email: Yup.string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email address"
        ),
      shop_phone: Yup.string()
        .matches(/^\d{10}$/, "Must be exactly 10 digits")
        .required("Phone Number is required"),
      shop_password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Please Enter New Password"),
      shop_address: Yup.string().required("Address is required"),
      shop_zipcode: Yup.string()
        .matches(/^\d{6}$/, "Must be exactly 6 digits")
        .required("Pincode is required"),
      role: Yup.string().required("Role is required"),
    }),
  });

  return (
    <div className="otp_background ">
      <div className="row justify-content-center shopSignup_row">
        <div className="col-lg-4 col-11 shopSignup_Col mt-5">
          <div className="m-auto shopSignup_image my-3">
            <img src={logo} width="100%" />
          </div>
          <h4 className="text-center fw-bold">Register as a Seller</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <UseInput
                type="text"
                name="shop_name"
                placeholder="Name"
                onChange={handleChange}
                value={values.shop_name}
                onBlur={handleBlur}
                label="Name"
              />
              {errors.shop_name && touched.shop_name ? (
                <div style={{ color: "red" }}>{errors.shop_name}</div>
              ) : (
                " "
              )}
            </div>
            <div className="mb-2">
              <UseInput
                type="email"
                name="shop_email"
                placeholder="Email"
                onChange={handleChange}
                value={values.shop_email}
                onBlur={handleBlur}
                label="Email"
              />
              {errors.shop_email && touched.shop_email ? (
                <div style={{ color: "red" }}>{errors.shop_email}</div>
              ) : (
                " "
              )}
            </div>
            <div className="mb-2">
              <UseInput
                type="number"
                name="shop_phone"
                placeholder="Phone"
                onChange={handleChange}
                value={values.shop_phone}
                onBlur={handleBlur}
                label="Phone"
              />
              {errors.shop_phone && touched.shop_phone ? (
                <div style={{ color: "red" }}>{errors.shop_phone}</div>
              ) : (
                " "
              )}
            </div>

            <div className="mb-2">
              <UseInput
                type="text"
                name="shop_address"
                placeholder="Address"
                onChange={handleChange}
                value={values.shop_address}
                onBlur={handleBlur}
                label="Address"
              />
              {errors.shop_address && touched.shop_address ? (
                <div style={{ color: "red" }}>{errors.shop_address}</div>
              ) : (
                " "
              )}
            </div>
            <div className="shopSignup__icons mb-2">
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
              {errors.shop_password && touched.shop_password ? (
                <div style={{ color: "red" }}>{errors.shop_password}</div>
              ) : (
                " "
              )}
            </div>
            <div className="mb-2">
              <select
                class="form-select"
                aria-label="Default select example"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select the Role</option>
                <option value="admin">Shop admin</option>
                <option value="manager">manager</option>
                <option value="employee">employee</option>
              </select>

              {errors.role && touched.role ? (
                <div style={{ color: "red" }}>{errors.role}</div>
              ) : (
                " "
              )}
            </div>
            <div className="mb-2">
              <UseInput
                type="number"
                name="shop_zipcode"
                placeholder="PinCode"
                onChange={handleChange}
                value={values.shop_zipcode}
                onBlur={handleBlur}
                label="Pincode"
              />
              {errors.shop_zipcode && touched.shop_zipcode ? (
                <div style={{ color: "red" }}>{errors.shop_zipcode}</div>
              ) : (
                " "
              )}
            </div>

            <button type="submit" className="shopSignupButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shopsignup;
