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


const StepHeader = ({currentStep, setStep, userData, setUserData, finalData, setFinalData }) => {
  
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
      {/* <section className="container mx-5 px-3 ">
        <div className="col-12 mx-5 ">
          <div className="row justify-content-between col-12 mx-5 ">
            <div className=" w-50 py-5  mx-5 px-5">
              <HorizontalNonLinearStepper />
            </div>
            <div className="sider d-flex col-4  mt-5 ">
              <img
                className="secure mx-1 "
                src={secure}
                alt="secure"
                width="30px"
                height="30px"
              />
              <p className="m">100% secure payment</p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container">
        <div className="row m-3">
          <div className="col-lg-6">
            <Stepper activeStep={currentStep -1} orientation="horizontal">
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
         
          </div>
          <div className="col-lg-6">
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
 