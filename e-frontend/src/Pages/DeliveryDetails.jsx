import React from 'react'
import { Cartheader } from '../Component/Cartheader'

export const DeliveryDetails = () => {
    return (
        <>
            <Cartheader />
            <div className='container  mb-4'>
                <div className='row '>
                <div className='col-lg-2'></div>
                <div className='card col-12 col-lg-5 delivery-card mt-3 '>
                    <form className='p-4'>
                        <div className='deliver '>
                            <h5>CONTACT DETAILS</h5>

                            <input type='text' className='deliver-input mt-3' placeholder='Name*' />
                            <input type='text' className='deliver-input mt-3' placeholder='Mobile No*' />

                        </div>
                        <div className='deliver mt-4'>
                            <h5>ADDRESS</h5>

                            <input type='text' className='deliver-input mt-3' placeholder='pincode*' />
                            <input type='text' className='deliver-input mt-3' placeholder='address (House No, Building, Street, Area)*' />
                            <input type='text' className='deliver-input mt-3' placeholder='Locality / Town*' />

                        </div>
                        <div className='mt-3'>
                            <input type='text' className='Delivery-btn ' />
                            <input type='text' className='Delivery-btn mx-5 ' />
                        </div>
                        <div className='mt-4'>
                            <h5>SAVE ADDRESS AS</h5>
                            <div className='mt-4'>
                                <button className='deliver-btn'>Home</button>
                                <button className='deliver-btn mx-3'>Work</button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1" className='mx-3'> Make this my default address</label>
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='btn    deliver-address-btn'>Add Address</button>
                        </div>
                    </form>

                </div>
                <div className='col-lg-1'></div>
                <div class="col-12 col-lg-4 Cart-card1 card delivery-card1 h-50 mt-3 ">
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

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
