import React, { useState,useEffect } from "react";
import "../styles/Home.css";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/image/logo12.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch ,useSelector} from "react-redux";
import { userLogin } from "../features/usersSlice";

function Forget() {
  const {loginUser}=useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        user_email: "",
        user_password: "",
      },
      validationSchema: Yup.object({
        user_email: Yup.string()
          .required("Email is required")
          .matches(
            /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Invalid email address"
          ),
        user_password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol")
          .required("Please enter new password"),
      }),
      onSubmit: (value) => {
        dispatch(userLogin(value));
      },
    });
  const [show, setShow] = useState(true);
  const handleShow = () => {
  
    setShow(!show);
  };

  useEffect(()=>{
    if(loginUser !== ""){
      navigate("/")
    }
  })
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
              <p>Login</p>
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="login_input1">
                  <input
                    type="text"
                    className={`login_input ${
                      errors.user_email && touched.user_email
                        ? "login_error1"
                        : ""
                    } ${
                      touched.user_email && !errors.user_email
                        ? "login_success_1"
                        : ""
                    }`}
                    placeholder="Email"
                    name="user_email"
                    value={values.user_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <div className="login_label_2">
                    <label className="fs-4">
                      <MdOutlineMailOutline />
                    </label>
                  </div>
                </div>
                {touched.user_email && errors.user_email ? (
                  <div style={{ color: "red" }}>{errors.user_email}</div>
                ) : (
                  ""
                )}

                <div className="login_input1">
                  <input
                    type={show ? "password" : "text"}
                    className={`login_input ${
                      touched.user_password && errors.user_password
                        ? "login_error1"
                        : ""
                    } ${
                      touched.user_password && !errors.user_password
                        ? "login_success_1"
                        : ""
                    }`}
                    placeholder="Password"
                    name="user_password"
                    value={values.user_password}
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
                {touched.user_password && errors.user_password ? (
                  <div style={{ color: "red" }}>{errors.user_password}</div>
                ) : (
                  ""
                )}

                <div className="mt-4">
                  <p className="login_size">
                    By continuing. I agree to the{" "}
                    <span className="login_color">Terms of use</span> &{" "}
                    <span className="login_color">Privacy policy</span>
                  </p>

                  <Link to="/forget" className="float-end mt-4 mb-4 text-dark">
                    Forget Password...?
                  </Link>
                </div>
                <div className="mt-5 ">
                  <button className="login_button" type="submit">
                    LogIn
                  </button>
                </div>
              </form>

              <div className="mt-4">
                <p className="login_size">
                  Having trouble while logging in{" "}
                  <span className="login_color">Get Help</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
