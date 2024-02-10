import React, { useContext } from "react";

import percentage from "../assets/image/secure.jpeg";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import secure from "../assets/image/secure.jpeg";
import Cart from "../Pages/Cart";
import DeliveryDetails from "../Pages/DeliveryDetails";
import Delivery_address from "../Pages/Delivery_address";
import { useSelector } from "react-redux";


const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const StepHeader = () => {
  const {currentStep}=useSelector((state)=>state.step)
  console.log(currentStep)

  
  function stepData(step){
     switch (step){
      case 1:
        return <Cart/>
      case 2:
        return <DeliveryDetails/>
      case 3:
        return <Delivery_address/>
     }
  }
  return (
    <>
     

      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <Stepper activeStep={currentStep - 1} orientation="horizontal">
              <Step>
                <StepLabel><span style={{fontWeight:"bolder"}}>CART</span></StepLabel>
              </Step>
              <Step>
                <StepLabel><span style={{fontWeight:"bolder"}}>DELIVERY DETAILS</span></StepLabel>
              </Step>
              <Step>
                <StepLabel><span style={{fontWeight:"bolder"}}>DELIVERY ADDRESS</span></StepLabel>
              </Step>
            </Stepper>
         
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-flex justify-content-end">
              <img
                className="secure "
                src={secure}
                alt="secure"
                width="30px"
                height="30px"
              />
              <p className="ms-1">100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
      {stepData(currentStep)}
    </>
  );
};

export default StepHeader;
 