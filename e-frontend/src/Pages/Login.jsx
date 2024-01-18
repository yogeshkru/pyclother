import React, { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/image/logo12.png";
import {useFormik} from "formik";
import * as Yup from "yup";
import { FaRegUserCircle,FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

function Login() {

  const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
  initialValues:{
    name:'',
    phone:'',
    email:'',
    password:'',
   
  },
  validationSchema : Yup.object({
  
    email:Yup.string()
    .required('Email is required')
    .matches(/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address'),
    password: Yup.string().min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol').required("Please enter new password"),
  

  }),
  onSubmit:(value)=>{
    console.log(value)
  }

  })
  const [show,setShow]=useState(true)
  const handleShow=()=>{
    setShow(!show)
  }
  return (
    <div className="otp_background">
      <div className="row otp_page_scroll justify-content-center">
        <div className="col-lg-4 pt-1">
          <div className="otp_box">
            <div className="otp_font_welcome">
              <h3>Welcome</h3>
              <h3>to</h3>
              <div className="otp_welcome_img">
                <img src={logo} width="100%" />
              </div>
            </div>
            <div className="login_font_padding">
              <p>
                Login 
              </p>
              <form className="mt-3" onSubmit={handleSubmit}>
            
         
            
                <div className="login_input1">
                  <input
                    type="text"
                    className={`login_input ${errors.email && touched.email ? "login_error1":""} ${touched.email && !errors.email ? 'login_success_1':''}`}
                    placeholder="Email"
                    name="email"
                   
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    
                  
                  />
                  <div className="login_label_2">
                    <label className="fs-4"><MdOutlineMailOutline /></label>
                  </div>
                </div>
                {touched.email && errors.email ? (<div style={{color:'red'}}>{errors.email}</div>): ""}
            
               

                <div className="login_input1">
                  <input
                    type={show ? "password" :"text"}
                    className={`login_input ${touched.password && errors.password ? 'login_error1' : ''} ${touched.password && !errors.password ? 'login_success_1':''}`}
                    placeholder="Password"
                    name="password"
                  
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    
                  
                  />
                  <div className="login_label_2">
                    <label className="fs-4"><RiLockPasswordLine/></label>
                  </div>
                  <div className="login_label_3">
                    <label className="fs-4" onClick={handleShow}>{show ? (<FaRegEyeSlash/>):<IoEyeOutline/>}</label>
                  </div>
                </div>
                {touched.password && errors.password ? <div style={{color:'red'}}>{errors.password}</div> : ""}


               
                <div className="mt-4">
                  <p className="login_size">
                    By continuing. I agree to the{" "}
                    <span className="login_color">Terms of use</span> &{" "}
                    <span className="login_color">Privacy policy</span>
                  </p>
                </div>
                <div className="mt-5">
                  <button className="login_button" type="submit">LogIn</button>
                </div>
              </form>

              <div className="mt-4">
                  <p className="login_size">
                   Having trouble while logging in{" "}
                    <span className="login_color">Get Help</span> {" "}
                    
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
