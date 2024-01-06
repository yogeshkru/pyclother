import React,{useState} from "react";
import gpay from "../assets/image/pngwing-3.png";
import phone from "../assets/image/pngwing-4.png";
import cod from "../assets/image/Group 266.png";
import visa from "../assets/image/pngwing-2.png";
import rupay from "../assets/image/pngwing.png";

import pay from "../assets/image/Group 249.png";
import StepHeader from "../Component/StepHeader";
function DeliveryDetails() {
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
      };
  return (
    <div>
      <section className="container">
<StepHeader/>

      </section>


      <div className="row mt-5 p-3 delviery_details_row">
        <div className="col-lg-2"></div>

        <div
          className="col-lg-4 delivery-input-border"
          style={{ border: "2px solid #e1e2e2", padding: "20px" ,borderRadius:'20px'}}
        >
          <div>
            <h5 className="text-uppercase fs-6 fw-bold">Contact Details</h5>

            <div className="mt-4">
              <div>
                <input
                  type="text"
                  className="deliverydetails_input_fild"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input
                  type="text"
                  className="deliverydetails_input_fild"
                  placeholder="Mobile no"
                />
              </div>
            </div>
            <div className="mt-4">
              <h5 className="fs-6 fw-bold">ADDRESS</h5>
              <div className="mt-4">
                <div>
                  <input
                    type="text"
                    className="deliverydetails_input_fild"
                    placeholder="Pin code"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <input
                    type="text"
                    className="deliverydetails_input_fild"
                    placeholder="Address "
                  />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <input
                    type="text"
                    className="deliverydetails_input_fild"
                    placeholder="Locality/ Town"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h5 className="fs-6 fw-bold">SAVE ADDRESS AS</h5>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-lg-2 col-4">
                    <input
                      type="radio"
                      className="deliverydetails_radio-button21"
                      id="lang-2"
                    />
                    <label className="Delviery_Details_label"
                    
                    
                    
                style={{ border: "2px solid rgb(133 133 133) ",color:"rgb(133 133 133)"}}
                    
                    >Home</label>
                  </div>
                  <div className="col-lg-2 col-4 ms-2">
                    <input
                      type="radio"
                      className="deliverydetails_radio-button21"
                      id="lang-1"
                      checked={isChecked}
                      onChange={handleRadioChange}
                    />
                    <label   className='Delviery_Details_label' 
                    
                    
                    
                    
                    
                    
                    
                style={{ border: "2px solid rgb(133 133 133)", color:'rgb(133 133 133)' }}
                    
                    >
                      Work
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                  <input type="checkbox" /> Make this my default address
              </div>
              <div className="mt-4">
                <div>
                 <button type="submit" className="delivery-details_button">Add Address</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
        <div className="payment_details">
              <h6 className="fw-bold">Order Details</h6>
              <div className="d-flex justify-content-between p-2">
                <span>Total MRP</span>
                <span>Rs. 1599</span>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <span>Discount</span>
                <span style={{color:"#18AC4A"}}>-Rs. 1000</span>
              </div>
              <div className="d-flex justify-content-between p-2">
                <span>Shipping Fee</span>
                <span>Rs. 99</span>
              </div>
              <div
                style={{ borderBottom: "2px solid rgb(225, 226, 226)", padding: "5px" }}
              ></div>
              <div className="d-flex justify-content-between p-2">
                <span><span className="fw-bold">Total</span> MRP</span>
                <span className="fw-bold">Rs. 698</span>
              </div>
            </div>
        </div>
        <div className="col-lg-2"></div>
      </div>


      <div className="d-flex justify-content-center gap-4 mt-3 mb-4 py-4">
          <div style={{ width: "6%" }}>
            <img src={rupay} width="100%" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={phone} width="100%" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={visa} width="100%" />
          </div>
          <div style={{ width: "2%" }}>
            <img src={pay} width="100%" />
          </div>
        </div>
    </div>
  );
}

export default DeliveryDetails;
