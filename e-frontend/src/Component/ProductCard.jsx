import React from "react";

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
import details from "../assets/image/men1.png";
import back_pose from "../assets/image/back_pose.jpeg";
import red from "../assets/image/red.jpeg";
import bruno from "../assets/image/bruno.jpeg";
import cap2 from "../assets/image/cap2_man.jpeg";
import smileman from "../assets/image/smile_man.jpeg";
import twoshirt from "../assets/image/two_shirt.jpeg";
import bluemoney from "../assets/image/money_blue.jpeg"

import { CiHeart } from "react-icons/ci";



import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductCard = function () {
  return (
    <>
    


      <div className="col-xl-2 col-lg-4 col-md-6 mt-3   ">
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
            <h6 className="productCard-brand mt-3 mb-0 ms-2">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-2">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-2">Rs-888</h6>
          </div>
        </div>
      </div>


      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={gray} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>

      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={black} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={blue} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={white} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={woodie} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>

      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={tshirt} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>

      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={yellow} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>

      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={hairy} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={details} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={back_pose} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={red} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={bruno} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={twoshirt} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={cap2} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={red} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={smileman} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mt-3 ">
        <div className="productCard position-relative  ">
          <div className="productCard-wishlist-icon position-absolute">
            <Link>
             
              <CiHeart className="productCard-wistlist-img fs-4" />

            </Link>
          </div>
          <div className="box ">

            
            <img src={bluemoney} alt="t-shirt" className="ms-2 image-fluid productCard-image d-flex mx-auto" />

          </div>
          <div className="product-details">
            <h6 className="productCard-brand mt-3 mb-0 ms-3">H&M</h6>
            <p className="productCard-title mt-2 mb-0 ms-3">
              Men's Cotton Pure cotton T-S
            </p>

            <h6 className="productCard-price mt-2 ms-3">Rs-888</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;