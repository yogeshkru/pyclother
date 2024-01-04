import React, { useState } from "react";
import OtpInput from "react-otp-input";
import logo from "../assets/image/logo12.png";
function Otp() {
  const [otp, setOtp] = useState("");
  const handleColor = {
    color: "#df0067",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "end",
  };
  return (
    <div className="otp_background">
      <div className="row otp_page_scroll justify-content-center">
        <div className="col-lg-4  pt-5">
          <div className="otp_box">
            <div className="otp_font_welcome">
              <h3>Welcome</h3>
              <h3>to</h3>
              <div className="otp_welcome_img">
                <img src={logo} width="100%" />
              </div>
            </div>
            <div className="otp_font_padding">
              <div className="text-center">
                <h5>Verify with your OTP</h5>
                <p>Sent to your registered mobile number</p>
              </div>
              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "35px",
                    height: "35px",
                    margin: "0 10px",
                    fontSize: "20px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    outline: "none",
                    justifyContent: "center !important",
                  }}
                  focusStyle={{
                    boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
                  }}
                />
              </div>
              <div className="mt-3" style={handleColor}>
                Resent OTP
              </div>
              <div className="mt-4">
                Having trouble while log in ?{" "}
                <span style={handleColor}>Get Help</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
