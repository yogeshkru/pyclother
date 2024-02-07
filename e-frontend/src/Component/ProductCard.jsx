import React, { useEffect } from "react";

import "../styles/productcard.css"

import black from "../assets/image/man-black-tshirt.jpeg";
import blue from "../assets/image/man-blue-tshirt.jpeg";
import gray from "../assets/image/man-gray-tshirt.jpeg";
import white from "../assets/image/man-white-tshirt.jpeg";
import woodie from "../assets/image/man-woodie.jpeg";
import tshirt from "../assets/image/man_tshirt.jpeg";
import smoke from "../assets/image/man-Smoke-tshirt.jpeg";
import hairy from "../assets/image/hait-man.jpeg"

import yellow from "../assets/image/yellow.jpeg";
import yellowr from "../assets/image/yellowr.png";
import details from "../assets/image/men1.png";
import back_pose from "../assets/image/back_pose.jpeg";
import red from "../assets/image/red.jpeg";
import bruno from "../assets/image/bruno.jpeg";
import cap2 from "../assets/image/cap2_man.jpeg";
import smileman from "../assets/image/smile_man.jpeg";
import twoshirt from "../assets/image/two_shirt.jpeg";
import bluemoney from "../assets/image/money_blue.jpeg"
import rupay from "../assets/image/rupay.png"
import vis from '../assets/image/vis.png'
import payment from '../assets/image/payment.png'
import phonepay from '../assets/image/phonepae.png'

import { CiHeart } from "react-icons/ci";



import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import URL from "../utils/Url";

const ProductCard = function ({ data }) {


  const navigate = useNavigate()





  return (
    <>

      {data?.map((item, index) => {
          const productName = item?.name?.replace(
            /\s+/g,
            "-"
          );
        return (
          <div key={index} className="col-xl-2 col-lg-4 col-md-6 mt-3  productcard-mobile-view ms-4">
            <div className="productCard position-relative">
              <div className="productCard-wishlist-icon position-absolute" >

                <Link>

                  <CiHeart className="productCard-wishlist-img fs-4 text-white" />
                </Link>


              </div>
              <div className="box">
                <img src={`${URL.IMAGE_URL}${item.images[0].url}`} className="ms image-fluid productCard-image d-flex mx-auto" alt={item?.brand} onClick={()=>navigate(`/singleProduct/${productName}`)} />

              </div>
              <div className="product-details ">
                <h6 className="productCard-brand mt-3 mb-0 ms-2 fw-semibold">{item?.brand}</h6>
                <p className="productCard-title mt-1 mb-0 ms-2">{item?.description.slice(0, 22) + "..."}</p>

                <h6 className="productCard-price mt-1 ms-2 fw-semibold">{item?.price}</h6>

                <button className="text-center d-flex addtobag rounded-2 text-white mx-auto p-2">Add to bag</button>


              </div>

            </div>

          </div>
        )


      })}







      {/* <div className="col-xl-2 col-lg-4 col-md-6 mt-3  productcard-mobile-view  ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={smoke} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-2 fw-semibold">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-2">
              Men's Cotton Pure cotton T-S
            </p>
         

  
            <h6 className="productCard-price mt-2 ms-2 fw-semibold">Rs-888</h6>
            <a className="text-center addtobag">Add to bag</a>
          </div>
        </div>
      </div> */}


      <div className="d-flex m-auto payment p-5 ">
        <img src={rupay} className="p-2" />
        <img src={phonepay} className="p-2" />
        <img src={vis} className="p-2" />
        <img src={payment} className="" />

      </div>
    </>
  );
};

export default ProductCard;