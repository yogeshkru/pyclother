import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineLogin,
  AiOutlineMessage,
} from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { TbAddressBook } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { MdOutlineTrackChanges } from "react-icons/md";

const ProfilSidebar = ({ active, setActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload()
  };

  return (
    <>
      <>
        <div className="w-50 bg-white shadow-sm rounded-3 p-4 pt-8 mt-5 ms-3">
          <div
            className="d-flex align-items-center w-100 mb-4 cursor-pointer"
            onClick={() => setActive(1)}
          >
            <RxPerson size={20} className={active === 1 ? "text-danger" : ""} />
            <span
              className={`pl-3 ${
                active === 1 ? "text-danger" : ""
              } d-md-block d-none ms-2`}
            >
              Profile
            </span>
          </div>

   

          <div
            className="d-flex align-items-center w-100 mb-4 cursor-pointer mt-3"
            onClick={() => setActive(2)}
          >
            <MdOutlineTrackChanges
              size={20}
              className={active === 2 ? "text-danger" : ""}
            />
            <span
              className={`pl-3 ${
                active === 2 ? "text-danger" : ""
              } d-md-block d-none ms-2`}
            >
              Track Order
            </span>
          </div>

     

          {/* <div
            className="d-flex align-items-center w-100 mb-4 cursor-pointer mt-3"
            onClick={() => setActive(4)}
          >
            <TbAddressBook
              size={20}
              className={active === 4 ? "text-danger" : ""}
            />
            <span
              className={`pl-3 ${
                active === 4 ? "text-danger" : ""
              } d-md-block d-none`}
            >
              Address
            </span>
          </div> */}
{/* 
<div
            className="d-flex align-items-center w-100 mb-4 cursor-pointer"
            onClick={() => setActive(3)}
          >
            <AiOutlineMessage
              size={20}
              className={active === 3 ? "text-danger" : ""}
            />
            <span
              className={`pl-3 ${
                active === 3 ? "text-danger" : ""
              } d-md-block d-none ms-2`}
            >
              Query
            </span>
          </div>  */}
          <div
            className="d-flex align-items-center w-100 mb-4 cursor-pointer mt-3"
            onClick={() => setActive(3) || logoutHandler() }
          >
            <AiOutlineLogin
              size={20}
              className={active === 3 ? "text-danger" : ""}
            />
            <span
              className={`pl-3 ${
                active === 3? "text-danger" : ""
              } d-md-block d-none ms-2`}
            >
              Log out
            </span>
          </div>
        </div>
      </>
    </>
  );
};

export default ProfilSidebar;
