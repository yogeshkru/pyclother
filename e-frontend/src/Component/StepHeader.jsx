import React, { useContext, useEffect, useState } from "react";

import percentage from "../assets/image/secure.jpeg";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import secure from "../assets/image/secure.jpeg";
import Cart from "../Pages/Cart";
import DeliveryDetails from "../Pages/DeliveryDetails";
import Delivery_address from "../Pages/Delivery_address";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserCartProductFromServer } from "../features/usersSlice";
import { FaCashRegister } from "react-icons/fa6";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
const StepHeader = () => {
  const { currentStep } = useSelector((state) => state.step);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalAmount,setTotalAmount]=useState(0)
  const { userCartProduct } = useSelector((state) => state?.users);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(getUserCartProductFromServer());
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch,totalAmount]);

  useEffect(()=>{
let sum =0;
for(let index=0;index<userCartProduct?.length;index++){
  sum = sum+Number(userCartProduct[index]?.cart_quantity) * userCartProduct[index]?.cart_price;
  setTotalAmount(sum)
}
  },[userCartProduct])


  function stepData(step) {
    switch (step) {
      case 1:
        return <Cart />;
      // case 2:
        // return <DeliveryDetails />;
      case 2:
        return <Delivery_address />;

      case 3:
        return   
    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <Stepper activeStep={currentStep - 1} orientation="horizontal">
              <Step>
                <StepLabel>
                  <span style={{ fontWeight: "bolder" }}>CART</span>
                </StepLabel>
              </Step>
              {/* <Step>
                <StepLabel>
                  <span style={{ fontWeight: "bolder" }}>DELIVERY DETAILS</span>
                </StepLabel>
              </Step> */}
              <Step>
                <StepLabel>
                  <span style={{ fontWeight: "bolder" }}>DELIVERY ADDRESS</span>
                </StepLabel>

              </Step>

              <Step>
                <StepLabel>
                  <span style={{ fontWeight: "bolder" }}>ORDER PLACED</span>
                </StepLabel>

              </Step>
            </Stepper>
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="d-flex justify-content-end step-border-radius">
            <FaCashRegister className="d-flex align-items-center fs-3"/> 
            {/* <span className="fs-3 ms-2 mt-0 mb-3 ">: </span> */}
              <p className="ms-2 fs-4">({totalAmount})</p>
            </div>
          </div>
        </div>
      </div>
      {stepData(currentStep)}
    </>
  );
};

export default StepHeader;
