import React, { useEffect, useState } from "react";
// import { Cartheader } from "../Component/Cartheader";

import tick from "../assets/image/tick.png";
import rounded from "../assets/image/rounded.jpeg";
import "../styles/cart.css";
import ProductCard from "../Component/ProductCard";
import StepHeader from "../Component/StepHeader";
import secured from "../assets/image/secured.png";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserCartProductFromServer,
  updateUserCartProductQuantity,
  userCartDeleteProductFromServer,
} from "../features/usersSlice";
import { GetColorName } from "hex-color-to-color-name";
import { AiFillDelete } from "react-icons/ai";

import CONN from "../utils/Url";
import { Link, useNavigate } from "react-router-dom";
import { Step } from "../features/stepper/StepperSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const { userCartProduct } = useSelector((state) => state.users);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(getUserCartProductFromServer());
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateUserCartProductQuantity({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
    }
  }, [productUpdateDetail]);

  useEffect(() =>  {
    let sum = 0;
    for (let index = 0; index < userCartProduct?.length; index++) {
      sum =
        sum +
        Number(userCartProduct[index]?.cart_quantity) *
          userCartProduct[index]?.cart_price;
      setTotalAmount(sum);
    }
  }, [userCartProduct]);

  return (
    <>
      <div>
        <section className="container">
          <div className="d-flex py-4 ms-4">
            <h4 className="mb-0" style={{ color: "#9867c5" }}>
              My Bag
            </h4>
            <p
              className=" ms-2 fw-100  fs-5 mb-0 cart-total"
              style={{ color: "#9867c5" }}
            >
              ({userCartProduct?.length} items)
            </p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1 cart-text-color">Product</h4>
              <h4 className="cart-col-2 cart-text-color">Price</h4>
              <h4 className="cart-col-3 cart-text-color">Quantity</h4>
              <h4 className="cart-col-4 cart-text-color">Total</h4>
            </div>

            {userCartProduct &&
              userCartProduct?.map((item, index) => {
                const { images, brand, name, color, model } =
                  item?.productId[0];
                const setColor = GetColorName(color);
                return (
                  <div
                    key={index}
                    className="cart-data d-flex mb-2 justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15  d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={`${CONN.IMAGE_URL}${images[0]}`}
                          alt={brand}
                          className="img-fluid"
                        />
                      </div>

                      <div className="w-75 ms-2 ">
                        <p style={{ color: "#343434" }}>
                          Brand:&nbsp;
                          <span style={{ color: "#c1cdcd" }}>{name}</span>
                        </p>
                        <p
                          className="d-flex gap-10 "
                          style={{ color: "#343434" }}
                        >
                          color:&nbsp;
                          <span
                            style={{
                              backgroundColor: color,
                              width: "15px",
                              height: "15px",
                              borderRadius: "75%",
                              marginTop: "6px",
                            }}
                          ></span>
                        </p>
                        <p style={{ color: "#343434" }}>
                          Size:&nbsp;
                          <span style={{ color: "#c1cdcd" }}>{item?.size}</span>
                        </p>
                        <p style={{ color: "#343434" }}>
                          Model:&nbsp;
                          <span className="" style={{ color: "#c1cdcd" }}>
                            {model}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">{item?.cart_price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          type="number"
                          className="form-control"
                          name=""
                          id=""
                          min={1}
                          max={10}
                          defaultValue={item?.cart_quantity}
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="ms-2">
                        <AiFillDelete className="text-danger fs-5" onClick={()=>dispatch(userCartDeleteProductFromServer(item?._id))}  />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        {item?.cart_price * item?.cart_quantity}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              {totalAmount == 0 ? (
                ""
              ) : (
                <Link to="/ourstore" className="cart-button">
                  Shop More
                </Link>
              )}

              <div className="d-flex flex-colunt align-item">
                <button
                  className="cart-details-button"
                  onClick={() => totalAmount ===0?navigate("/ourstore"): dispatch(Step())}
                >
                  {
                    //  Procced
                    totalAmount ===0 ?"Shop More":"Proceed"
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-2 "> */}

      <section className=" container py-5">
        <div className="row ms-0">
          <div className="col-12">
            <p className="text-left fs-5 py-3 ms-3">You may also like:</p>
            <div className="d-flex flex-wrap">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
}

export default Cart;
