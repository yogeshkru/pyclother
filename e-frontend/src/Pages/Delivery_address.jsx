<<<<<<< HEAD
// import React from 'react';
// import '../styles/Delivery_address.css'
// import rupay from '../assets/image/pngwing.png';
// import phone from '../assets/image/pngwing-1.png';
// import visa from '../assets/image/pngwing-2.png';
// import pay from '../assets/image/Group 249.png'

// function Delivery_address() {
//     const order = {
//         items: [
//             { name: 'Total MRP Value:', price: 50 },
//             { name: 'Shopping Fee:', price: 30 },

//         ],
//         shoppingFee: 5,
//         discount: 10,
//     };
=======
import React from "react";
import "../styles/Delivery_address.css";
import rupay from "../assets/image/pngwing.png";
import phone from "../assets/image/pngwing-1.png";
import visa from "../assets/image/pngwing-2.png";
import pay from "../assets/image/Group 249.png";
import StepHeader from "../Component/StepHeader";
>>>>>>> 86978216f0f2d37a81956d73c0c44bb75319563a

//     const calculateTotalMRP = () => {
//         return order.items.reduce((total, item) => total + item.price, 0);
//     };

//     const calculateTotalAmount = () => {
//         const totalMRP = calculateTotalMRP();
//         const discountedAmount = (totalMRP * order.discount) / 100;
//         const totalAmount = totalMRP - discountedAmount + order.shoppingFee;
//         return totalAmount;
//     };
//     return (
//         <div className='container mt-5 '>
//             <div className='row deliver_address_bordersline'>
//                 <div className='col-12 col-lg-6 deliver_address_borderleftline'>
//                     <div className='d-flex justify-content-between'>
//                         <div className='select_delivery_add'>
//                             <p>Select Delivery Address</p>
//                             <p>Default Address</p>

//                         </div>
//                         <div className='delivery_new_addr_btn'>
//                             <button type="submit" class="btn btn-primary delivery-addnew-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add New Address </button>
//                         </div>
//                     </div>
//                     <div className='container mt-5 delivery-address-leftside w-100'>
//                         <form>
//                             <div class="form-check">
//                                 <div>

//                                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
//                                     <label class="form-check-label d-inline p-2" for="flexRadioDefault2">
//                                         Name
//                                         <div className='d-inline p-2'>
//                                             <p className='d-inline delivery-address-home'>

//                                                 Home
//                                             </p>
//                                         </div>
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className='d-flex deliver_address_liitems'>
//                                 <div className='ms-0'>
//                                     <ul>
//                                         <li className='mt-2 delivery-address-liststyl'>60, this street punducherry<br /> Villupuram , Tamil Nadu - 605101</li>
//                                         <li className='mt-2 delivery-address-liststyl'>Mobile: 98765 43210</li>
//                                         <li className='mt-2'>Pay on delivery available</li>
//                                     </ul>
//                                 </div>
//                                 <div className='d-inline-grid ms-4'>
//                                     <button className='bg-white delivery_add_remove_btn text-center  border-0'>Remove</button>
//                                     <button className='bg-white delivery_add_remove_btn  delivery_add_edite_btn text-center border-0'> Edite</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className='col-12 col-lg-6 deliver_addres_bordertop'>
//                     <div className='d-flex'>
//                         <div className='border-0 p-0 m-0 w-23' >
//                             <h6 className='delivery_details_mobile'>Delivery Details</h6>
//                             <img src="data:image/jpeg;base64,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"
//                                 alt='loading'
//                                 className='Delivery_imges_mobile'
//                                 width="50%" />
//                         </div>
//                         <div className=' Delivery_detils_mobile'>
//                             <h6>Delivery Between</h6>
//                             <h6>21 Dec - 23 Dec</h6>
//                         </div>
//                     </div>
//                     <div className='delivery_order_details mt-4 mb-5'>
//                         <div className="container mt-4">
//                             <h5>Order Details</h5>
//                             <table className="table">
//                                 {/* <thead>
//                                     <tr>
//                                         <th>Product</th>
//                                         <th>Price</th>
//                                     </tr>
//                                 </thead> */}
//                                 <tbody>
//                                     {order.items.map((item, index) => (
//                                         <tr key={index}>
//                                             <td>{item.name}</td>
//                                             <td>${item.price}</td>
//                                         </tr>
//                                     ))}
//                                     <tr>
//                                         <td>Total Amount </td>
//                                         <td>${calculateTotalAmount()}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <div className="w-100 d-flex justify-content-center mb-3 p-3">
//                                 <button className='btn delivery-contine-btn text-white w-100'>Continue</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex justify-content-center gap-4 mt-3 mb-4">
//                 <div style={{ width: "6%" }}>
//                     <img src={rupay} width="100%" />
//                 </div>
//                 <div style={{ width: "4%" }}>
//                     <img src={phone} width="100%" />
//                 </div>
//                 <div style={{ width: "4%" }}>
//                     <img src={visa} width="100%" />
//                 </div>
//                 <div style={{ width: "2%" }}>
//                     <img src={pay} width="100%" />
//                 </div>
//             </div>
//             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-lg">
//                     <div className="modal-content modal-contents modal-contentes ">
//                         <div className="modal-header d-flex justify-content-between">
//                             <div>
//                                 <h5 className="modal-title" id="exampleModalLabel">Add New Address</h5>
//                             </div>
//                             <div>
//                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                         </div>
//                         <div className="modal-body w-100">
//                             <form>
//                                 <p>ADDRESS</p>
//                                 <div className="mb-3">
//                                     <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Pin Code" />
//                                 </div>

//                                 <div className="mb-3">
//                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Address (House No, Building , Street, Area)'></textarea>
//                                 </div>
//                                 <div className="mb-3">
//                                     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Location/ Town" />
//                                 </div>
//                                 <div className='mb-3 d-flex justify-content-between'>
//                                     <div>
//                                         <button className='deliver_addres_point'>Pondicherry</button>
//                                     </div>
//                                     <div>
//                                         <button className='deliver_addres_point'>Pondicherry</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Save ADDRESS AS</h5>

//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Delivery_address;

import React from "react";

import phone from "../assets/image/pngwing-4.png";
import rupay from "../assets/image/pngwing.png";
import visa from "../assets/image/pngwing-2.png";
import pay from "../assets/image/Group 249.png";
import women from "../assets/image/women.png";
function Delivery_address() {
  return (
    <div className="mt-5">
      <div className="row delivery_address_1">
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-between">
            <div className="mt-2 delviery_address_content">
              <h5>Selcet Delivery Address</h5>
              <h6>Default Address</h6>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add Address
              </button>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="delviery_address_boxShow">
              <div className="row ">
                <div className="col-lg-1">
                  <input type="radio" className="" />
                </div>

                <div className="col-lg-6">
                  <div className="delivery_address_content12">
                    <h6 className="delviery_address_color">
                      Name{" "}
                      <span className="delivery_address_home ms-3">Home</span>
                    </h6>
                    <div className="mt-3">
                      <address>
                        60, This Street, Puducherry Villupuram, Tamilnadu -
                        605015
                      </address>
                      <div>
                        Mobile:{" "}
                        <span className="delviery_address_color">
                          98765 43210
                        </span>
                      </div>
                      <div>
                        <li>Pay on Delivery available</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex justify-content-end align-items-end gap-3 h-100">
                    <button className="delivery_address_edite">Edite</button>
                    <p>|</p>
                    <button className="delivery_address_edite">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="mt-2">
            <h5>Delivery Details</h5>
          </div>
          <div className="d-flex gap-4">
            <div className="delivery_address_image">
              <img src={women} width="100%" />
            </div>
            <div className="mt-4">
              <p className="delivery_address_content12 ">Delivery Between</p>
              <h6 className="fw-bold">21 Dec - 23 Dec</h6>
            </div>
          </div>
          <div className="mt-4">
            <div className="payment_details">
              <h6>Order Details</h6>
              <div className="d-flex justify-content-between p-2">
                <span>Total MRP</span>
                <span>Rs. 1599</span>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <span>Discount</span>
                <span style={{ color: "#18AC4A" }}>-Rs. 1000</span>
              </div>
              <div className="d-flex justify-content-between p-2">
                <span>Shipping Fee</span>
                <span>Rs. 99</span>
              </div>
              <div
                style={{ borderBottom: "1px solid black", padding: "5px" }}
              ></div>
              <div className="d-flex justify-content-between p-2">
                <span>
                  <span className="fw-bold">Total</span> MRP
                </span>
                <span>Rs. 698</span>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <button className="orderpalced_btn w-75">Continue</button>
          </div>
        </div>

        <div className="col-lg-1"></div>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-center gap-4 mt-3 mb-4">
          <div style={{ width: "6%" }}>
            <img src={rupay} width="100%" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={phone} width="100%" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={visa} width="100%" />
          </div>
          <div style={{ width: "2%" }}>
            <img src={pay} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery_address;
