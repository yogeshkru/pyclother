import React, { useEffect, useState } from "react";

import "../styles/productcard.css";

import { AiFillHeart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";


import { CiHeart } from "react-icons/ci";
import { wishListPostData } from "../features/usersSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import CONN from "../utils/Url";

import { TbHeartQuestion } from "react-icons/tb";

const ProductCard = function ({ data }) {
  const navigate = useNavigate();
  const { Whislistget } = useSelector((state) => state.users);
  
  const location = useLocation();
  const [whishlistId, setwhishlistId] = useState([]);
  const dispatch = useDispatch();
  const handleWishlist = (i) => {
    dispatch(wishListPostData(i));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(getAllProduct());
    }, 500);
    let extractWishList = [];
    Whislistget.forEach((elment) => {
      extractWishList.push(elment?._id);
    });

    setwhishlistId(extractWishList);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, Whislistget]);

  return (
    <>
      {data && data?.map((item) => {
        const productName = item?.category?.replace(/\s+/g, "-");
        return (
          <div
            key={item._id}
            className="col-xl-2 col-lg-4 col-md-6 mt-3  productcard-mobile-view ms-4"
          >
            <div className="productCard position-relative">
              <div className="productCard-wishlist-icon position-absolute">
                <div onClick={() => handleWishlist(item?._id)}>
                  {location.pathname === "/Whislist" && whishlistId.includes(item._id) ? (
                    <MdOutlineClose />
                  )
                  
                  : whishlistId.includes(item._id) ? (
                  
                    <div style={{border:"1px solid white",borderRadius:"15px",padding:'2px 4px'}}>
                    <AiFillHeart size={20} color="#df0067"/>
                    </div>
                  ) : (
                    <div style={{border:"1px solid white",borderRadius:"15px",padding:'2px 4px'}}>
                    <CiHeart size={20} />
                    </div>
                  )}
                </div>
              </div>
              <div className="box">
                <img
                  src={`${CONN.IMAGE_URL}${
                    item && item?.images && item?.images[0]
                      ? item?.images[0]
                      : ""
                  }`}
                  className="ms image-fluid productCard-image d-flex mx-auto"
                  alt={item?.brand}
                  onClick={() =>
                    navigate(`/singleProduct/${productName}/${item?._id}`)
                  }
                />
              </div>
              <div className="product-details ">
                <h6 className="productCard-brand mt-3 mb-0 ms-2 fw-semibold">
                  {item?.brand}
                </h6>
                <p className="productCard-title mt-1 mb-0 ms-2">
                  {item?.description?.slice(0, 22) + "..."}
                </p>

                <h6 className="productCard-price mt-1 ms-2 fw-semibold">
                  {item?.price}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
