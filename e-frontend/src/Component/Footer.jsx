import React from "react";
import footer from "../assets/image/logo (3).png";
function Footer() {
  const handleBackground = {
    backgroundColor: "#EAEBED",
  };
  const handleData = {
    width: "15%",
    height: "30%",
    backgroundColor: "#EAEBED",
  };
  const handleModel = {
    width: "90%",
  };
  return (
    <>
      <div className="w-25 m-auto">
        <img src={footer} width="100%" />
      </div>
      <div style={handleBackground}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div style={handleModel}>
                <img src={footer} width="100%" />
              </div>
              <div className="mt-2">
                <p>Online Shopping</p>
              </div>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div style={handleData}></div>
              <div className="mt-2">
                <p className="ms-4">Customer Policies</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
