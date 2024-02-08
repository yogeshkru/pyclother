import React, { useState } from "react";
import UseInput from "../useCustom/useInput";
import "../styles/Mainlayout.css";
import "../styles/Loginadmin.css"
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import logo from "../assets/image/logo12.png"
function Shopreset() {
  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setEye(!eye);
  };

  const [ceye, csetEye] = useState(false);

  const chandleEye = () => {
    csetEye(!ceye);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
    
        shop_password: "",
        shop_cpassword: "",
     
      },
      validationSchema:Yup.object({
        shop_password:Yup.string().min(8,'password must be atleast 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol').required("Please enter new password"),
        shop_cpassword: Yup.string()
        .oneOf([Yup.ref('shop_password'), null], 'Passwords must match')
        .required('Please confirm your password'),
      })
    });
  return (
    <div className="otp_background">
      <div className="row justify-content-center shopSignup_row pt-5 ">
        <div className="col-lg-4 shopSignup_Col">
            <div className="m-auto shopSignup_image my-3">
                <img src={logo} width="100%"/>
            </div>
            <h4 className="text-center fw-bold">Reset your password here</h4>
          <form onSubmit={handleSubmit}>
        
            <div className="shopSignup__icons">
              <UseInput
                type={eye ? "text" : "password"}
                name="shop_password"
            
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
            {touched.shop_password && errors.shop_password ? (<div style={{color:'red',fontWeight:'500'}}>{errors.shop_password}</div>): ""}
            <div className="shopSignup__icons">
              <UseInput
                type={ceye ? "text" : "password"}
                name="shop_cpassword"
         
                onChange={handleChange}
                value={values.shop_cpassword}
                onBlur={handleBlur}
                label="Confirm Password"
              />
              <span className="shopSignup__eyeIcons" onClick={chandleEye}>
                {ceye ? (
                  <IoEyeOutline style={{ fontSize: "20px" }} />
                ) : (
                  <FaRegEyeSlash style={{ fontSize: "20px" }} />
                )}
              </span>
            </div>
            {touched.shop_cpassword && errors.shop_cpassword ? (<div style={{color:'red',fontWeight:'500'}}>{errors.shop_cpassword}</div>): ""}
        


       
<div className="pb-4 pt-3">
  
<button type="submit" className="shopSignupButton ">Submit</button>
</div>
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default Shopreset;
