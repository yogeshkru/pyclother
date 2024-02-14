import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import whislist1 from "../assets/image/wishlist.jpeg";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import URL from "../utils/Url";
import ProductCard from "../Component/ProductCard";
function Whislist() {
  const { Whislistget } = useSelector((state) => state.users);
  
  const navigate=useNavigate()
  return (
    <div className="mt-3 pb-5 mb-5 ">
      <div className="container mb-5 pb-5">
        <h5 className="mt-5">
          My Wishlist{" "}
          <span style={{ color: "gray" }}>({Whislistget.length} items)</span>
        </h5>
      
        <div className="row">
          {Whislistget?.length > 0 ? (
          
            <ProductCard data={Whislistget}/>
          ) : (
            <div className="text-center">
              <div className="w-25 m-auto">
                <img src={whislist1} width="100%" />
              </div>
              <button style={{padding:"5px 20px",color:"white",backgroundColor:"#df0067",borderRadius:"14px"}} onClick={()=>navigate("/ourstore")}>Shop now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Whislist;
