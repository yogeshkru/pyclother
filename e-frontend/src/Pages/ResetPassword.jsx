import React, { useState } from "react";
import "../styles/Home.css";
import { useParams } from "react-router-dom";
import logo from "../assets/image/logo12.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { userResetAPI } from "../features/usersSlice";
import { useDispatch } from "react-redux";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

function Reset() {
  const { token } = useParams();

  const dispatch=useDispatch()
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        password: "",
        cpassword: "",
      },
      validationSchema: Yup.object({
        password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol")
          .required("Please enter new password"),
        cpassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm Password is required"),
        
      }),
      onSubmit:(value)=>{
        const data={password:value.password,token:token}
        dispatch(userResetAPI(data))
       
      }
    });
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const [cshow, csetShow] = useState(true);
  const chandleShow = () => {
    csetShow(!cshow);
  };
  return (
    <div className="otp_background">
      <div className="row otp_page_scroll justify-content-center">
        <div className="col-lg-4 pt-5">
          <div className="otp_box">
            <div className="otp_font_welcome">
              <h3>Welcome</h3>
              <h3>to</h3>
              <div className="otp_welcome_img">
                <img src={logo} width="100%" />
              </div>
            </div>
            <div className="login_font_padding ">
              <p>Reset your password...</p>
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="login_input1">
                  <input
                    type={show ? "password" : "text"}
                    className={`login_input ${
                      touched.password && errors.password ? "login_error1" : ""
                    } ${
                      touched.password && !errors.password
                        ? "login_success_1"
                        : ""
                    }`}
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <div className="login_label_2">
                    <label className="fs-4">
                      <RiLockPasswordLine />
                    </label>
                  </div>
                  <div className="login_label_3">
                    <label className="fs-4" onClick={handleShow}>
                      {show ? <FaRegEyeSlash /> : <IoEyeOutline />}
                    </label>
                  </div>
                </div>
                {touched.password && errors.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : (
                  ""
                )}

                <div className="login_input1">
                  <input
                    type={cshow ? "password" : "text"}
                    className={`login_input ${
                      touched.cpassword && errors.cpassword
                        ? "login_error1"
                        : ""
                    } ${
                      touched.cpassword && !errors.cpassword
                        ? "login_success_1"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={values.cpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <div className="login_label_2">
                    <label className="fs-4">
                      <RiLockPasswordLine />
                    </label>
                  </div>
                  <div className="login_label_3">
                    <label className="fs-4" onClick={chandleShow}>
                      {cshow ? <FaRegEyeSlash /> : <IoEyeOutline />}
                    </label>
                  </div>
                </div>
                {touched.cpassword && errors.cpassword ? (
                  <div style={{ color: "red" }}>{errors.cpassword}</div>
                ) : (
                  ""
                )}

                <div className="mt-5 ">
                  <button className="login_button" type="submit">
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
