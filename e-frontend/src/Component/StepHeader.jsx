import React from "react";
import HorizontalNonLinearStepper from "../utils/stepper";
import percentage from "../assets/image/secure.jpeg";

const StepHeader = () => {
  return (
    <>
      <section className="container ">
        <div className=" col-12 ">
          <div className="row d-flex justify-content-center">
            <div className=" w-50 py-5 ">
              <HorizontalNonLinearStepper />
            </div>
            {/* <div className="col-3 py-5  ms-4">
               <img
                src={percentage}
                width="35px"
                height="33px"
                alt="percentage"
              />  

<span className="ms-2 fw-light mb-0">
                100% Secure Payment
                </span> 
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default StepHeader;
