// src/components/Slider.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsFillFilePostFill } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa";
import smoke from "../assets/image/man-Smoke-tshirt.jpeg";
import "../styles/slider.css";

const Slider = function () {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider-sidebar">
          <div className="slider-head">
            <div className="slider-user-img">
              <img src={smoke} alt="smoke" />
            </div>
            <div className="slider-user-details">
              <p className="slider-title">Web developers</p>
              <p className="slider-name">Gokul</p>
            </div>
          </div>

          <div className="slider-nav">
            <div className="slider-nav-menu">
              <p className="slider-nav-title">Main</p>
              <div className="slider-ul">
                <ul>
                  <li>
                    <Link  className="d-flex slider-link mb-0">
                      <RxDashboard className="mt-1 mb-0 slider-icon" />
                      <span className="slider-text ms-2 mb-0">Dashboard</span>
                    </Link>
                  </li>

                  <li onClick={handleDropdownToggle}>
                    <Link
                      
                      className={`d-flex slider-link mb-0 justify-content-between ${dropdown ? "active" : ""}`}
                    >
                      <div>
                        <FaRegUser className="slider-icon" />
                        <span className="slider-text ms-2 mb-0">Audience</span>
                      </div>
                      <IoIosArrowDown className="slider-arrow" />
                    </Link>
                    <ul className={dropdown ? "d-block" : "d-none"}>
                      <li>
                        <Link  className="slider-link">
                          <span className="slider-text">Users</span>
                        </Link>
                      </li>
                      <li>
                        <Link  className="slider-link">
                          <span className="slider-text">Subscription</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
               

                  <li className="">
                    <Link  className="d-flex slider-link mb-0 ">
                      <BsFillFilePostFill className="mt-1 mb-0 slider-icon" />
                      <span className="slider-text ms-2 mb-0">Posts</span>
                    </Link>
                  </li>

                 

                </ul>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Slider;
