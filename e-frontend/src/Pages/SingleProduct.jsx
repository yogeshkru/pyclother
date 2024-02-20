import React, { useState, useEffect } from "react";
import "../styles/SingleProduct.css";
import { IoBagOutline } from "react-icons/io5";

import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

import { Link, useNavigate, useParams } from "react-router-dom";

import {
  addUserProductToServer,
  getUserCartProductFromServer,
  wishListGetData,
  wishListPostData,
} from "../features/usersSlice";
import ReactStars from "react-stars";
import { FaTruckArrowRight } from "react-icons/fa6";

import { GetColorName } from "hex-color-to-color-name";

import CONN from "../utils/Url";

import ProductCard from "../Component/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getAllProduct } from "../features/product/productSlice";
import Meta from "../Component/Meta";
import { toast } from "react-toastify";
import Reviews from "./Reviews";

function SingleProduct() {
  const [selectImage, setSelectImage] = useState(0);
  const handleStyle = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "14px",
    cursor: "pointer",
  };

  // *********************************************************
  const { id, name } = useParams();

  const productName = name.replace(/-/g, " ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sizeClick, setSizeClick] = useState(null);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [wishlistAlready, setwishlistAlready] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [suggested, setSuggested] = useState([]);

  const handleSizeClick = (item) => {
    setSizeClick(item);
  };
  const { singleProduct, wholeProduct } = useSelector(
    (state) => state?.product
  );

  const { userCartProduct } = useSelector((state) => state?.users);
  const { Whislistget } = useSelector((state) => state.users);

  const updateWishList = async (id)=>{
  const response= await dispatch(wishListPostData(id))

  if (response.meta.requestStatus === "fulfilled"){

    dispatch(wishListGetData());
  }

  }

  useEffect(() => {
    

 let cartfound =false
    for(let i=0;i<userCartProduct?.length;i++){

      if(userCartProduct[i]?.productId?._id ===id){
        cartfound=true
        break;
      }
    }

    setAlreadyAdded(cartfound);
  }, [userCartProduct,id]);
  useEffect(() => {
    let found = false;
    for (let i = 0; i < Whislistget.length; i++) {
      if (Whislistget[i]._id === id) {
        found = true;
        break;
      }
    }

    setwishlistAlready(found);
  }, [Whislistget, id]);

  let separateSize = singleProduct?.size?.join("")?.split(",");

  useEffect(() => {
    const filterData =
      wholeProduct &&
      wholeProduct?.filter((data) => data.category === productName);
    setSuggested(filterData);
  }, [productName, wholeProduct]);

  useEffect(() => {
    if (Array.isArray(wholeProduct)) {
      let allRatings = [];

      for (let i = 0; i < wholeProduct?.length; i++) {
        if (Array.isArray(wholeProduct[i]?.ratings)) {
          allRatings = allRatings.concat(wholeProduct[i].ratings);
        }
      }

      setRatings(allRatings);

    }


  }, []);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(getOneProduct(id));
      dispatch(getAllProduct());
      dispatch(getUserCartProductFromServer());
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [id]);

  const uploadProductCart = async () => {
    if (sizeClick === null) {
      toast.error("Please Select the Size");

      return false;
    } else {
     const response = await dispatch(
        addUserProductToServer({
          productId: singleProduct?._id,
          price: singleProduct?.price,
          size: sizeClick,
        })
      );

      if(response.meta.requestStatus === "fulfilled"){
        dispatch(getUserCartProductFromServer())
      }


    }
  };

  
  // ****************************************************************

  return (
    <>
      <Meta title={`${singleProduct?.name}`} />
      <section className="container pt-5 single-product-bread ">
        <div className="row ms-0">
          <div className="col-5 mb-0 d-flex align-items-center  ms-0 ">
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
                  {singleProduct?.model}
                </li>
                &nbsp;/&nbsp;
                <li className="singleProduct-breadcrumb singleproduct-bread">
                  {singleProduct?.category}
                </li>
                &nbsp;/&nbsp;
                <li className="">
                  <b>{singleProduct?.brand}</b>
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
                  {singleProduct?.images?.map((item, j) => (
                    <div key={j}>
                      <img
                        src={`${CONN.IMAGE_URL}${item}`}
                        alt="product"
                        width="80px"
                        onClick={() => setSelectImage(j)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="ms-0">
                  <img
                    src={`${CONN.IMAGE_URL}${
                      singleProduct &&
                      singleProduct?.images &&
                      singleProduct?.images[0]
                        ? singleProduct?.images[selectImage]
                        : ""
                    }`}
                    alt={singleProduct?.brand}
                    id="image1"
                    width="400px"
                    height="550px"
                    className="singleproduct-main-image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="">
                <h2 className="mt-1" style={{ textTransform: "capitalize" }}>
                  {singleProduct?.brand}
                </h2>
                <p
                  className="singleProduct_content"
                  style={{ textTransform: "capitalize" }}
                >
                  {singleProduct?.description}
                </p>

                <div className="d-flex gap-2">
                  <div className="d-flex">
                    <ReactStars
                      count={5}
                      size={24}
                      value={parseFloat(singleProduct?.totalrating) || 0}
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>
                  <div className="pt-1">
                    ({singleProduct?.ratings?.length} Ratings)
                  </div>
                </div>
                <hr />
                <div>
                  <p className="singleProduct_amount">
                    Rs. {singleProduct?.price}
                  </p>
                  <p className="text-success mt-1">{singleProduct?.tax}</p>
                </div>

                <div className="row mt-3">
                  {separateSize?.map((item, i) => (
                    <div className="col-lg-1" key={i}>
                      <div className="d-flex">
                        <input
                          type="radio"
                          checked={sizeClick === item}
                          onClick={() => handleSizeClick(item)}
                          className="radio--design"
                          id={`radio-${i}`}
                        />
                        <label
                          className="radio-button_design label-1"
                          htmlFor={`radio-${i}`}
                        >
                          {item}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="row ms-2">
                    <div
                      className="col-lg-7 col-5 button1-background"
                      style={handleStyle}
                    >
                      <div
                        className="d-flex justify-content-center gap-2"
                        onClick={() => {
                          alreadyAdded
                            ? navigate("/stepper")
                            : uploadProductCart();
                        }}
                      >
                        <div>
                          {alreadyAdded ? (
                            <FaTruckArrowRight className="fs-6 text-white" />
                          ) : (
                            <IoBagOutline className="fs-6 text-white" />
                          )}
                        </div>
                        <p className="fs-6 text-white ">
                          {alreadyAdded ? "Go To Bag" : "Add to Bag"}
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-5 button2-background ms-3"
                      style={handleStyle}
                      onClick={() => 
                      
                      updateWishList(id)
                      
                      }
                    >
                      {wishlistAlready ? (
                        <div className="d-flex justify-content-center gap-2 mb-0">
                          <div>
                            <AiFillHeart className="fs-5" color="#df0067" />
                          </div>
                          <p className="fs-6 mb-0 text-white">Wishlisted</p>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-center gap-2 mb-0">
                          <div>
                            <CiHeart className="fs-5 mb- text-white" />
                          </div>
                          <p className="fs-6 mb-0 text-white">Wishlist</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="singleproduct-product-info">
                  <h5 className="mt-5">PRODUCT DETAILS</h5>

                  <p
                    className="pt-3"
                    dangerouslySetInnerHTML={{
                      __html: `${
                        singleProduct &&
                        singleProduct.color &&
                        GetColorName(singleProduct?.color)
                      }&nbsp;&nbsp;&nbsp;${singleProduct?.category}`,
                    }}
                  ></p>

                  <p style={{ textTransform: "capitalize" }}>
                    {singleProduct?.fabric}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {" "}
                    {singleProduct?.fit}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {singleProduct?.neck} neck
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {singleProduct?.sleeve}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Reviews details={singleProduct?._id}/>
      </div>

      <section className=" container py-5">
        <div className="row ms-0">
          <div className="col-12">
            <p className="text-center fs-5 py-3">
              Shop More {singleProduct?.category}
            </p>
            <a href="#image1" style={{ color: "black" }}>
              <div className="d-flex flex-wrap">
                <ProductCard data={suggested} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
