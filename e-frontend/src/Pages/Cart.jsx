import React from "react";
// import { Cartheader } from "../Component/Cartheader";

import tick from "../assets/image/tick.png";
import rounded from "../assets/image/rounded.jpeg";
import "../styles/cart.css";
import ProductCard from "../Component/ProductCard";
import StepHeader from "../Component/StepHeader";
function Cart() {
  return (
    <>

<StepHeader/>
      {/* <Cartheader /> */}
      {/* <div className='container'>
        <div className='mt-3 jd-flex col-lg-8 justify-content-between'>
          <p><b>My Bag</b> (1 items)</p>
          <p className='Cart-add-from'><b>+</b> Add from Wishlist</p>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 mt-4 '>
            <div class="Cart-card card mb-3" >
              <div class="row no-gutters">
                <div class=" col-lg-3 Cart-img col-12" >
                  <img src={rounded} class="card-img" alt="..." width='100%' />
                </div>
                <div class="col-12 col-lg-9">
                  <div class="card-body">
                    <div className='Cart-title d-flex justify-content-between'>
                      <h4 class="card-title">H&M</h4>
                      <p>Move to Wishlist</p>
                    </div>
                    <div className='cart-desc'>
                      <p>Pure Cotton Regular Fit Round-Neck T-Shirt</p>
                    </div>
                    <div>

                      <div className="btn-group Cart-drop">
                        <button className="btn btn-secondary btn-sm dropdown-toggle Cart-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Size:M
                        </button>
                        <div className="dropdown-menu">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                        </div>
                      </div>
                      <div className="btn-group mx-3 Cart-drop ">
                        <button className="btn btn-secondary btn-sm dropdown-toggle Cart-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Qty:1
                        </button>
                        <div className="dropdown-menu">
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                        </div>
                      </div>

                    </div>
                    <div className='Cart-rate mt-3 d-flex'>
                      <p> <b>Rs.599</b></p>
                      <p className='Cart-dis'>Rs.1599</p>
                      <p className='Cart-offer'>74% OFF</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <div className='d-flex'>
                        <div>
                          <img src={tick} alt='tick' width='30px' height='25px' />
                        </div>
                        <div>
                          <p className='mx-2'>Delivery between 17 Dec - 19 Dec</p>
                        </div>
                      </div>
                      <div className='Cart-del'>
                        <button>Delete</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 mt-4  ">
            <div class="Cart-card1 card ">
              <div class="card-body">
                <h5 className="card-title mb-2">Order Details</h5>
                <div className='d-flex justify-content-between'>
                  <span>Total MRP </span>
                  <span>RS.1599</span>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                  <span>Discount </span>
                  <span className='Cart-offer'>-RS.1000</span>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                  <span>Shipping Fee </span>
                  <span>RS.99</span>
                </div>
              <div className='border-top mt-1'></div>
              <div className='d-flex justify-content-between mt-1'>
                  <p>Total MRP </p>
                  <p>RS.698</p>
                </div>
              <div className=''>
              <a class="btn btn-primary Cart-order  ">Place Order</a>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <section className="container">
          <div className="d-flex py-4 ms-4">
            <h4 className="mb-0">My Bag </h4>
            <p className=" ms-2 fw-100  fs-5 mb-0 cart-total">(1 items)</p>
          </div>

          <div className="pt-2 pb-5 w-100 ">
            <div className="row d-flex justify-content-center w-100 ">
              <div className="col-lg-7  col-7 border rounded-4   d-flex">
                <div className=" cart-image p-1 d-flex w-100">
                  <div className="my-auto px-auto" style={{width:'35%',height:'95%'}}>
                  <img
                    src={rounded}
                    alt="image"
                    className="img-fluid p-1 rounded-4 "
                    // height="800]]=px"
                    width="100%"
                    height="100%"
                  />
                  </div>

                  <div className="ms-4 w-100">
                    <div className="d-flex justify-content-between mb-0 mt-3">
                      <h4 className="mb-0">H&M</h4>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="cart-h3 ">
                        Pure Cotton Regular Fit Round-Neck T-shirt
                      </h3>
                    </div>

                    <div className="d-flex mt-3 mb-0 ">
                      <div className="dropdown  ">
                        <button
                          className="  dropdown-toggle rounded-3 p-1 fw-light"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Size:M
                        </button>
                        <div
                          className="dropdown-menu cart_dropdown"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item w-100 p-auto  d-flex  ">
                            a
                          </a>
                          <a className="dropdown-item w-100">M</a>
                          <a className="dropdown-item w-100">K</a>
                        </div>
                      </div>

                      <div className="dropdown ms-3 ">
                        <button
                          className="  dropdown-toggle rounded-3 p-1 fw-light"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Qty:1
                        </button>
                        <div
                          className="dropdown-menu cart_dropdown"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item w-100 p-auto  d-flex  ">
                            1
                          </a>
                          <a className="dropdown-item w-100">2</a>
                          <a className="dropdown-item w-100">3</a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 d-flex">
                      <div>
                        <span className="fw-300 mb-0 mt-2">Rs. 599</span>
                      </div>
                      <div className="ms-3">
                        <span
                          style={{ textDecoration: "line-through" }}
                          className="mb-0 fw-light"
                        >
                          Rs.1888
                        </span>
                      </div>

                      <div className="ms-3">
                        <p className="text-success">75%OFF</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between cart-end-tag">
                      <p className="fw-light">Delivery between <b>17Dec -19Dec</b></p>

                      <div>
                        <button className="border-0 bg-transparent fw-light">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-5  ms-5 cart-border">
                <table>
                  <thead>
                    <tr>
                      <th colspan="2">Order Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total MRP</td>
                      <td>Rs. 1599</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td className="discount">-Rs. 1000</td>
                    </tr>
                    <tr>
                      <td>Shipping Fee</td>
                      <td>Rs. 99</td>
                    </tr>
                    <tr className="">
                      <td>Total MRP</td>
                      <td>Rs. 698</td>
                    </tr>
                  </tbody>
                  <tfoot className="cart-foot-top">
                    <tr>
                      <td colspan="2">
                        <input
                          type="submit"
                          className="w-100 rounded-3"
                          value="Place Order"
                        />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>


        
     
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
