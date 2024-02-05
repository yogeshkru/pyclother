import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { LuBringToFront } from "react-icons/lu";

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
          <AiOutlineHome size={20} color={active === 1 ? "red" : ""} />
          <span
            className={`${
              active === 1 ? "text-danger" : ""
            } d-none d-md-block banner-sidebar-home fw-bold ms-2`}
          >
            Home SlideShow
          </span>
        </div>

        <div
          className="d-flex align-items-center w-100 mb-8  mt-4"
          onClick={() => setActive(2)}
        >
          <LuBringToFront size={20} color={active === 2 ? "red" : ""} />


          <span
            className={`${
              active === 2 ? "text-danger" : ""
            } d-none d-md-block banner-sidebar-home fw-bold ms-2`}
          >Hr Productlist</span>
        </div>
      </div>
    </>
  );
};
export default BannerSideBar;
