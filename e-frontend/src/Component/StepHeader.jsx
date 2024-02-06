import React from "react";
import HorizontalNonLinearStepper from "../utils/stepper";
import percentage from "../assets/image/secure.jpeg";
import secure from '../assets/image/secure.jpeg'

const StepHeader = () => {
  return (
    < >
      <section className="container mx-5 px-3 ">
        <div className=" col-12 mx-5 ">
          <div className="row justify-content-between col-12 mx-5 ">
            <div className=" w-50 py-5  mx-5 px-5">
              <HorizontalNonLinearStepper  />
 
            </div>
            <div className="sider d-flex col-4  mt-5 ">
        <img className="secure mx-1 " src={secure} alt="secure" width='30px' height='30px' />
        <p className="m">100% secure payment</p>
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
