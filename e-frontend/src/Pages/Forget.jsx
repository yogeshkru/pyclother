import React, { useState } from "react";
import "../styles/Home.css";

import logo from "../assets/image/logo12.png";
import {useFormik} from "formik";
import * as Yup from "yup";

import { MdOutlineMailOutline } from "react-icons/md";


function Forget() {

  const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
  initialValues:{

    email:''

   
  },
  validationSchema : Yup.object({
  
    email:Yup.string()
    .required('Email is required')
    .matches(/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address'),

  

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
        <div className="col-lg-4 pt-5 mt-5">
          <div className="otp_box">
            <div className="otp_font_welcome">
              <h3>Welcome</h3>
              <h3>to</h3>
              <div className="otp_welcome_img">
                <img src={logo} width="100%" />
              </div>
            </div>
            <div className="login_font_padding ">
              <p>
            Enter your mail to reset the password
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
            
               

        


               
           
                <div className="mt-4 ">
                  <button className="login_button" type="submit">Send Mail</button>
                  
                </div>
              </form>

      
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
