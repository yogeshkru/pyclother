import React from "react";
import footer from "../assets/image/logo (3).png";
import footer1 from "../assets/image/logo12.png"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
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
      <div className="footer__image">
        <img src={footer} width="100%" />
      </div>
      <div className="footer_background">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="footer__content1">
                <div className="footer__image2">
                  <img src={footer1} width="100%" />
                </div>
                <div className="footer__details1">
                  <div className="mt-3">
                    <p className="fw-bold fs-5 text-center">Online Shopping</p>
                  </div>
                  <ul>
                    <li className="list-group-item p-1 footer_shopping">Men</li>
                    <li className="list-group-item p-1 footer_shopping">Women</li>
                    <li className="list-group-item p-1 footer_shopping">Kids</li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div style={handleData}></div>
              <div className="footer_details2">
                <p className="fw-bold fs-5">Customerize</p>
              </div>
              <div className="footer_users">
                <div>
                  <ul>
                    <li className="list-group-item p-1">Contact Us</li>
                    <li className="list-group-item p-1">FAQ</li>
                    <li className="list-group-item p-1">Terms & Conditions</li>
                  </ul>
                </div>
                <div >
                  <ul>
                    <li className="list-group-item p-1">Track Order</li>
                    <li className="list-group-item p-1">Shipping</li>
                    <li className="list-group-item p-1">Cancellation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 footer__followus">
              <div style={handleData}></div>
              <div className="">
                <div>
                  <p className="fw-bold fs-5">Follow Us</p>
                </div>
                <FaFacebook style={{ marginRight: "10px", fontSize: "30px" }} />
                <FaSquareXTwitter
                  style={{ marginRight: "10px", fontSize: "30px" }}
                />
                <FaInstagramSquare
                  style={{ marginRight: "10px", fontSize: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
