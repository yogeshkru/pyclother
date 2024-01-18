import React from "react";
import Order from "../assets/image/orderpalced_icons.png";
import '../styles/Home.css'
function Orderplaced() {
  return (
    <div className="container orderplaced_height">
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-5">
          <div className="text-center">
            <div className="w-25 m-auto mb-4">
              <img src={Order} className="orderplaced_img" width="100%"/>
            </div>
            <div className="m-4">
            <h5>Dear customer, we are placed to inform you order has been</h5>
            <h5>placed and will arrive as its destination soon</h5>
            </div>
            <button className="orderpalced_btn m-4">Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderplaced;
