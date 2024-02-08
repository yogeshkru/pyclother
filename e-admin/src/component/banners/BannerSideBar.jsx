import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { LuBringToFront } from "react-icons/lu";
import { GiPartyPopper } from "react-icons/gi";
import { BsPostcard } from "react-icons/bs";

import { FaCopy } from "react-icons/fa";

import "../../styles/bannersiderbar.css";
const BannerSideBar = function ({ active, setActive }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-100 bg-white shadow rounded-3 p-4 pt-8">
        <div
          className="d-flex align-items-center w-100 mb-8 cursor-pointer"
          onClick={() => setActive(1)}
        >
          <GiPartyPopper size={20} color={active === 1 ? "#b66dff" : ""} />
          <span
            className={`${
              active === 1 ? "#beabc2" : ""
            } d-none d-md-block banner-sidebar-home fw-bold ms-2 `}
          >
            Events
          </span>
        </div>

        <div
          className="d-flex align-items-center w-100 mb-8  mt-4"
          onClick={() => setActive(2)}
        >
          <LuBringToFront size={20} color={active === 2 ? "#b66dff" : ""} />

          <span
            className={`${
              active === 2 ? "#beabc2" : ""
            } d-none d-md-block banner-sidebar-home fw-bold ms-2 `}
          >
            Event Tracking
          </span>
        </div>

        <div
          className="d-flex align-items-center w-100 mb-8 mt-4"
          onClick={() => setActive(3)}
        >
          <BsPostcard size={20} color={active === 3 ? "#b66dff" : ""} />

          <span
            className={`${
              active === 3 ? "#beabc2" : ""
            } d-none d-md-block banner-sidebar-home fw-bold ms-2`}
          >Home Slider</span>
        </div>
      </div>
    </>
  );
};
export default BannerSideBar;
