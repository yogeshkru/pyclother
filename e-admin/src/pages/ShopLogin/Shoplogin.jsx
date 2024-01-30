import React, { useState } from "react";
import logo12 from '../../assets/image/logo12.png'
import {useFormik} from "formik";
import '../ShopLogin/ShopLogin.css'
import * as Yup from "yup";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

function ShopLogin() {
  const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
  initialValues:{
   
    shop_email:'',
    shop_password:'',
   
  },
  validationSchema : Yup.object({
  
    shop_email:Yup.string()
    .required('Email is required')
    .matches(/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address'),
    shop_password: Yup.string().min(8, 'Password must be 8 characters long')
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
          <img src={logo12} width="65%" className="mx-5 pt-3"/>
            <div className="login_font_padding">
            
              <form className="mt-3" onSubmit={handleSubmit}>
            
         
            
                <div className="login_input1">
                  <input
                    type="text"
                    className={`login_input ${errors.shop_email && touched.shop_email ? "login_error1":""} ${touched.shop_email && !errors.shop_email ? 'login_success_1':''}`}
                    placeholder="Shop-email"
                    name="shop-email"
                   
                    value={values.shop_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    
                  
                  />
                  <div className="login_label_2">
                    <label className="fs-4"><MdOutlineMailOutline /></label>
                  </div>
                </div>
                {touched.email && errors.email ? (<div style={{color:'red',fontWeight:'500'}}>{errors.email}</div>): ""}
            
               

                <div className="login_input1">
                  <input
                    type={show ? "password" :"text"}
                    className={`login_input ${touched.password && errors.password ? 'login_error1' : ''} ${touched.password && !errors.password ? 'login_success_1':''}`}
                    placeholder="Shop-password"
                    name="shop-password"
                  
                    value={values.shop_password}
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
                {touched.password && errors.password? <div style={{color:'red',fontWeight:'500'}}>{errors.password}</div> : ""}


               
             
                <div className="mt-5">
                  <button className="login_button " type="submit"> Login </button>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopLogin;
