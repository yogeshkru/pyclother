import React from "react";
import gpay from "../assets/image/pngwing-3.png";
import phone from "../assets/image/pngwing-4.png";
import cod from "../assets/image/Group 266.png";
import visa from "../assets/image/pngwing-2.png";
import pay from "../assets/image/Group 249.png";

import rupay from "../assets/image/pngwing.png";
function Payment() {
  return (
    <>
    <div style={{border:'1px solid #DEDEDE'}}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 col-12">
            <h5>Recommended Payment Mode</h5>
            <div className="payment_page_design">
              <div className="row">
                <div className="col-lg-1 col-1 mt-4">
                  <input type="radio" />
                </div>
                <div className="col-lg-4 col-7 mt-4 fw-bold">
                  <p>Google Pay</p>
                </div>
                <div className="col-lg-3 col-1"></div>
                <div className="w-25 col-lg-4 col-3 mt-2">
                  <img src={gpay} width="100%" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-1 mt-4">
                  <input type="radio" />
                </div>
                <div className="col-lg-6 col-7 mt-4 fw-bold">
                  <p>Cash on Delivery (COD)</p>
                </div>
                <div className="col-lg-1 col-1"></div>
                <div className="w-25 col-lg-4 col-3 mt-2">
                  <img src={cod} width="100%" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 mt-4 col-1">
                  <input type="radio" />
                </div>
                <div className="col-lg-4 mt-4 fw-bold col-7">
                  <p>PhonePe</p>
                </div>
                <div className="col-lg-3 col-1"></div>
                <div className="w-25 col-lg-4 col-3">
                  <img src={phone} width="100%" />
                </div>
              </div>
            </div>
            <div className="mt-5 mb-5 d-flex justify-content-center">
              <button className="orderpalced_btn payment_modify ">
                Pay Now
              </button>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="payment_details">
              <h6>Order Details</h6>
              <div className="d-flex justify-content-between p-2">
                <span>Total MRP</span>
                <span>Rs. 1599</span>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <span>Discount</span>
                <span>-Rs. 1000</span>
              </div>
              <div className="d-flex justify-content-between p-2">
                <span>Shipping Fee</span>
                <span>Rs. 99</span>
              </div>
              <div
                style={{ borderBottom: "1px solid black", padding: "5px" }}
              ></div>
              <div className="d-flex justify-content-between p-2">
                <span>Total MRP</span>
                <span>Rs. 698</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
    <div className="d-flex justify-content-center gap-5">
          <div style={{ width: "8%" }}>
            <img src={rupay} width="100%" />
          </div>
          <div style={{ width: "5%" }}>
            <img src={phone} width="100%" />
          </div>
          <div style={{ width: "5%" }}>
            <img src={visa} width="100%" />
          </div>
          <div style={{ width: "3%" }}>
            <img src={pay} width="100%" />
          </div>
        </div>
    </>
  );
}

export default Payment;
