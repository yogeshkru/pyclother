import React, { useEffect, useState } from "react";

import "../styles/productcard.css";



import { CiHeart } from "react-icons/ci";
import { wishListPostData } from "../features/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import CONN from "../utils/Url";
import { FaGrinHearts } from "react-icons/fa";

const ProductCard = function ({ data }) {
  const [click, setClick] = useState({});

  const navigate = useNavigate();
  const { Whislistget } = useSelector((state) => state.users);
  const { wholeProduct } = useSelector((state) => state.product);
  const [whishListTrue,setWishListTrue]= useState(false)
   useEffect(()=>{
    for(let index=0;index<wholeProduct?.length;index++){


      setWishListTrue(Whislistget.includes(wholeProduct[index]?._id))
    }
   },[])


  const dispatch = useDispatch();
  const handleWishlist = (i) => {
    // setClick(prevClicks => ({
    //   ...prevClicks,
    //   [i]: !prevClicks[i]
    // }));
    dispatch(wishListPostData(i));
  };
  



  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(getAllProduct());
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);

  return (
    <>
      {data?.map((item, index) => {
        const productName = item?.category?.replace(/\s+/g, "-");
        return (
          <div
            key={index}
            className="col-xl-2 col-lg-4 col-md-6 mt-3  productcard-mobile-view ms-4"
          >
            <div className="productCard position-relative">
              <div className="productCard-wishlist-icon position-absolute">
                {/* <Link> */}
                {/* {click[item._id] ? (
                  <CiHeart
                    className="productCard-wishlist-img fs-4 text-white"
                    onClick={() => handleWishlist(item._id)}
                  />
                ) : (
                  <FaGrinHearts
                    className="productCard-wishlist-img fs-4 text-white"
                    onClick={() => handleWishlist(item._id)}
                  />
                )} */}

<div onClick={()=>handleWishlist(item?._id)}>

{whishListTrue?<CiHeart/> :<FaGrinHearts/> }
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
                {/* 
                <button className="text-center d-flex addtobag rounded-2 text-white mx-auto p-2" style={{background:"#df0067"}}>
                  Add to Wishlist
                </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
