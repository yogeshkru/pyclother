import React, { useState, useEffect } from "react";
import "../styles/SingleProduct.css";
import { IoBagOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import moneyBlue from "../assets/image/money_blue.jpeg";
import bruno from "../assets/image/bruno.jpeg";
import { Link } from "react-router-dom";
import twoshirt from "../assets/image/two_shirt.jpeg";
import bluemoney from "../assets/image/money_blue.jpeg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

import ProductCard from "../Component/ProductCard";

function SingleProduct() {
  const [details, setDetails] = useState([
    { id: 1, src: twoshirt },
    { id: 2, src: bluemoney },
  ]);
  const [select, setSelectimage] = useState(null);
  const handleStyle = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "14px",
  };

  const handleClick = (i) => {
    const selectItem = details.filter((item) =>
      item.id === i ? item.src : null
    );
    setSelectimage(selectItem);
  };

  useEffect(() => {
    setSelectimage(details.find((item) => item.id === 1));
  }, []);
  
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClicks = (itemId) => {
    setSelectedItemId(itemId);
  };
  return (
    <>
      <section className="container pt-5 single-product-bread ">
        <div className="row ms-0">
          <div className="col-4 mb-0 d-flex align-items-center  ms-0 ">
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
              className="ms-0"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item ">
                  <Link
                    to="/"
                    className=" singleProduct-breadcrumb breadcrumb-item "
                  >
                    Home
                  </Link>
                </li>
                &nbsp;/
                <li
                  className="breadcrumb-item singleProduct-breadcrumb d-flex align-items-center active"
                  aria-current="page"
                >
                  Clothing
                </li>
                &nbsp;/&nbsp;
                <li className=" singleProduct-breadcrumb mb-0 d-flex align-items-center">
                  Men Top wear
                </li>
                &nbsp;/&nbsp;
                <li className="singleProduct-breadcrumb singleproduct-bread">
                  T-Shirts
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex justify-content-evenly">
              <div className="d-flex ">
                <div className="d-flex flex-column gap-4 ">
                  {details.map((item) => (
                    <div key={item.id}>
                      <img 
                        src={item.src}
                        alt="product"
                        width="80px"
                        className={`rounded-3 ${selectedItemId === item.id ? 'selected' : ''}`}
            onClick={() => handleClicks(item.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="ms-0">
                  {select && (
                    <img
                      src={select[0]?.src ? select[0]?.src : details[0].src}
                      alt="product"
                      width="400px"
                      height="550px"
                      className="singleproduct-main-image"
                      style={{ borderRadius: "20px" }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="">
                <h2 className="mt-1">H&M</h2>
                <p className="singleProduct_content">
                  Pure Cotton Regular Fit Round-Neck T-Shirt
                </p>
            
                <div className="mt-1">
                  <p>
                    4.8
                    <span>
                      <FaStar color="yellow" style={{ fontSize: "13px" }} />
                    </span>{" "}
                    <span className="singleProduct_content">
                      (284 Ratings){" "}
                    </span>
                  </p>
                </div>
                <hr />
                <div>
                  <p className="singleProduct_amount">Rs. 599</p>
                  <p className="text-success mt-1">Inclusive of all Taxes</p>
                </div>
                <div className="d-flex gap-4 mt-3">
                  <div className=" single_product_border singleProduct_size">
                    <p>XS</p>
                  </div>
                  <div className=" single_product_border singleProduct_size1">
                    <p>S</p>
                  </div>
                  <div className=" single_product_border singleProduct_size1">
                    <p>M</p>
                  </div>
                  <div className=" single_product_border singleProduct_size1">
                    <p>L</p>
                  </div>
                  <div className=" single_product_border singleProduct_size">
                    <p>XL</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row ms-2">
                    <div
                      className="col-lg-7 col-5 button1-background"
                      style={handleStyle}
                    >
                      <div className="d-flex justify-content-center gap-2">
                        <div>
                          <IoBagOutline className="fs-6 text-white" />
                        </div>
                        <p className="fs-6 text-white ">Add to Bag</p>
                      </div>
                    </div>
                    {/* <div className="col-lg-1 col-1"></div> */}
                    <div
                      className="col-lg-4 col-5 button2-background ms-3"
                      style={handleStyle}
                    >
                      <div className="d-flex justify-content-center gap-2 mb-0">
                        <div>
                          <CiHeart className="fs-5 mb- text-white" />
                        </div>
                        <p className="fs-6 mb-0 text-white">Wishlist</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="singleproduct-product-info">
                  <h5 className="mt-5">PRODUCT DETAILS</h5>
                  <p className="pt-3">Black T-shirt for men</p>
                  <p className=""> Graphic printed</p>
                  <p className="">Regular length</p>
                  <p>Rounded Neck</p>
                  <div class="dropdown">
                  
  <a class="  otherinfo" type="button" aria-expanded="false">
    Other information
    <MdOutlineKeyboardArrowDown />
  </a>
  
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" container py-5">
        <div className="row ms-0">
          <div className="col-12">
            <p className="text-center fs-5 py-3">Shop More T-shirt</p>
            <div className="d-flex flex-wrap">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
