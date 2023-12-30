import React from 'react'
import { Cartheader } from '../Component/Cartheader'
import tick from "../assets/image/tick.png"
import rounded from "../assets/image/rounded.jpeg"
function Cart() {
  return (
    <div>
      <Cartheader />
      <div className='container'>
        <div className='mt-3 d-flex col-lg-8 justify-content-between'>
          <p><b>My Bag</b> (1 items)</p>
          <p className='Cart-add-from'><b>+</b> Add from Wishlist</p>
        </div>
        <div className='d-flex'>
          <div className=' col-lg-8 mt-4'>
            <div class="Cart-card card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-3 col-lg-3 Cart-img col-sm-12" >
                  <img src={rounded} class="card-img" alt="..." width='100%' />
                </div>
                <div class="col-md-9 col-lg-9">
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
          <div class="col-sm-6 col-lg-4 mt-4 mx-3 ">
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
              <a href="#" class="btn btn-primary Cart-order  ">Place Order</a>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart