import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import phone from "../assets/image/pngwing-4.png";
import rupay from "../assets/image/pngwing.png";
import visa from "../assets/image/pngwing-2.png";
import pay from "../assets/image/Group 249.png";
import {
  PostAddress,
  deleteUserAddress,
  getUserAddress,
  PatchUserAddress,
  resetAll,
} from "../features/deliveryDetails/deliverySlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartProductFromServer } from "../features/usersSlice";
import CONN from "../utils/Url";
import "../styles/Delivery_address.css";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { postOrder, Reset_all } from "../features/order/orderSlice";
import ProductCard from "../Component/ProductCard";
import Address from "../assets/image/noAddress.png";
import {Back} from "../features/stepper/StepperSlice"
import { useNavigate } from "react-router-dom";
function Delivery_address() {
  return (
    <>
      <UpdateForm />
    </>
  );
}

const UpdateForm = () => {
  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [detailsCategory, setDetailsCategory] = useState([]);
  const modalRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addressId, setAddressId] = useState("");

  function handleRadioClick(id) {
    setAddressId(id);
  }
  const [place, setPlace] = useState("");
  const [editeItem, setEditeItem] = useState(null);

  
  const { userAddress, getUserAddressSuccess } = useSelector(
    (state) => state.userAddress
  );
  // *************************User cart *************************************//

  const { userCartProduct } = useSelector((state) => state.users);
  const { wholeProduct } = useSelector((state) => state.product);
  const [userCart, setUserCart] = useState([]);
  // **********************************************************************
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let cart = [];
    let sum = 0;
    for (let index = 0; index < userCartProduct?.length; index++) {
    
      const newObj = {
        _id: userCartProduct[index]?.productId?._id,
        cartUserQuantity: userCartProduct[index]?.cart_quantity,
        userSize: userCartProduct[index]?.size
      };
      
      cart.push(newObj);
      sum =
        sum +
        Number(
          userCartProduct[index]?.cart_quantity *
            userCartProduct[index]?.cart_price
        );
      setTotalAmount(sum);
    }

    setUserCart(cart);

    let data = [];
    for (let i = 0; i < userCartProduct?.length; i++) {
      let categoryDetails = userCartProduct[i]?.productId?.category;
      let DescriptionDetails = userCartProduct[i]?.productId?.description;
      data.push({ categoryDetails, DescriptionDetails });
    }



    const filtered =
      wholeProduct &&
      wholeProduct.filter((item) =>

        data.some(
          (userData) =>
            userData.categoryDetails === item.category &&
            userData.DescriptionDetails === item.description
        )
      );
    setDetailsCategory(filtered);
  }, [userCartProduct]);

  const [cartProduct, setCartProductState] = useState([]);

  useEffect(() => {
    let items = [];

    for (let index = 0; index < userCartProduct?.length; index++) {
      items.push({
        quantity: userCartProduct[index]?.cart_quantity,
        price: userCartProduct[index]?.cart_price,
        size: userCartProduct[index]?.size,
      });
    }
    setCartProductState(items);
  }, [userCartProduct]);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(getUserAddress());
      dispatch(getUserCartProductFromServer());
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkOutHandler = async () => {


    if(!addressId){
      alert("Select Address")

      return 
      
    }


    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to Load");
      return;
    }
    const result = await axios.post(
      `${CONN.BASE_URL}user/checkout-point`,
      { amount: totalAmount },
      config
    );

    if (!result) {
      alert("Something went wrong");
      return;
    }

    

    const { amount, id: order_id, currency } = result?.data?.order;
    const options = {
      key: "rzp_test_bGxiXE38CRwzQU",
      amount: amount,
      curreny: currency,
      name: "VCW ",
      description: "Test Transaction",
      image: {},
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response?.razorpay_payment_id,
          razorpayOrderId: response?.razorpay_order_id,
        };

        const result = await axios.post(
          `${CONN.BASE_URL}user/payment-point`,
          data,
          config
        );

          
        

          setTimeout(() => {
            dispatch(
              postOrder({
                order_totalPrice: totalAmount,
                order_total_Discount: totalAmount,
                cartItem: userCart,
                orderItems: cartProduct,
                order_paymentInfo: result.data,
                order_user_address: addressId,
              })
            );
          }, 3000);


         
       
      },
      prefill: {
        name: "VCW",
        email: "krish.naren@gmail.com",
        contact: "999999999999",
      },
      notes: {
        address: "VCW Office",
      },
      theme: {
        color: "#61dafb",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        address_pincode: editeItem?.address_pincode || "",

        address_city: editeItem?.address_city || "",
        user_name: editeItem?.user_name || "",
        user_phone: editeItem?.user_phone || "",
        address_state: editeItem?.address_state || "",
        address_country: editeItem?.address_country || "",
        address_details: editeItem?.address_details || "",
        defaultAddress: editeItem?.defaultAddress || false,
      },
      onSubmit: (value) => {
        if (editeItem !== null) {
          const data = { ...value, place };

          dispatch(PatchUserAddress({ id: editeItem._id, addressPatch: data }));
        } else {
          const data = { ...value, place };

          dispatch(PostAddress(data));
        }
        handleClose();
        resetForm();
      },
    });
  const handleEdite = (i) => {
    const findItem = userAddress.find((item) => item._id === i);
    setEditeItem(findItem);
    setShow(true);
  };
  const handleRadio = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div className="">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-7 col-12 ">
            <div className=" row">
              <div className="mt-2 col-lg-5">
                <h5 className="mb-0">Select Delivery Address</h5>
                <h6 className="mb-0">Default Address</h6>
              </div>

              <div className="col-lg-1"></div>

              <div className="col-lg-6">
                <button
                  className="delivery_address-modal-btn mb-0"
                  onClick={handleShow}
                >
                  Add New Address
                </button>

                {show ? (
                  <div className="delivery-address-overlay">
                    <div className="delivery-address-overlay1" ref={modalRef}>
                      <div className="d-flex justify-content-between">
                        <h6 className="fs-5 mt-1">Add New Address</h6>
                        <button
                          className="close-modal-btn"
                          onClick={handleClose}
                        >
                          &times;
                        </button>
                      </div>
                      <hr />
                      <h5 className="fs-6 ">ADDRESS</h5>
                      <form
                        onSubmit={handleSubmit}
                        className="delivery-address_fluid"
                      >
                        <div className="mt-4">
                          <input
                            type="text"
                            className="deliverydetails_input_fild"
                            placeholder="Name"
                            name="user_name"
                            value={values.user_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>

                        <div className="mt-4">
                          <input
                            type="number"
                            className="deliverydetails_input_fild"
                            value={values.user_phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone"
                            id="user_phone"
                          />
                        </div>
                        <div className="mt-4">
                          <input
                            type="number"
                            className="deliverydetails_input_fild"
                            placeholder="Pin code"
                            name="address_pincode"
                            value={values.address_pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="mt-4">
                          <input
                            type="text"
                            className="deliverydetails_input_fild"
                            placeholder="Address"
                            name="address_details"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address_details}
                          />
                        </div>
                        <div className="mt-4">
                          <input
                            type="text"
                            className="deliverydetails_input_fild"
                            placeholder="Locality/Town"
                            name="address_city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address_city}
                          />
                        </div>
                        <div className="mt-4">
                          <input
                            type="text"
                            className="deliverydetails_input_fild"
                            placeholder="State"
                            name="address_state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address_state}
                          />
                        </div>
                        <div className="mt-4">
                          <input
                            type="text"
                            className="deliverydetails_input_fild"
                            placeholder="Country"
                            name="address_country"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address_country}
                          />
                        </div>
                        <div className="mt-3">
                          <h5 className="fs-6 fw-bold">SAVE ADDRESS AS</h5>
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col-lg-2 col-4">
                              <div className="d-flex ">
                                <input
                                  type="radio"
                                  name="place"
                                  value="Home"
                                  onChange={handleRadio}
                                />
                                <span className="ms-1">Home</span>
                              </div>
                            </div>
                            <div className="col-lg-2 col-4 ms-2">
                              <div className="d-flex ">
                                <input
                                  type="radio"
                                  name="place"
                                  value="Work"
                                  onChange={handleRadio}
                                />
                                <span className="ms-1">Work</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="mt-4">
                          <input
                            type="checkbox"
                            name="defaultAddress"
                            value={values.defaultAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Make this my default address
                        </div> */}
                        <div className="mt-4">
                          <div>
                            <button
                              type="submit"
                              className="delivery-details_button1"
                            >
                              Add Address
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {userAddress.length ? (
              userAddress?.map((item, i) => (
                <div className="mt-4 w-75" key={i}>
                  <div className="delviery_address_boxShow">
                    <div className="row">
                      <div className="col-lg-1">
                        <input
                          type="radio"
                          checked={addressId === item._id}
                          onChange={() => handleRadioClick(item._id)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="delivery_address_content12">
                          <h6 className="delivery_address_color">
                            {item?.user_name}
                            <span className="delivery_address_home ms-3">
                              {item?.place}
                            </span>
                          </h6>
                          <div className="mt-3">
                            <address>{item?.address_area}</address>
                          </div>
                          <div>
                            Mobile:
                            <span
                              className="delviery_address_color ms-2 "
                              style={{ color: "#6c757d" }}
                            >
                              {item?.user_phone}
                            </span>
                          </div>
                          <div className="mt-2">
                            <p>Pay on Delivery available</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-end align-items-end gap-3 h-100">
                          <button
                            className="delivery_address_edite text-danger"
                            onClick={() => handleEdite(item._id)}
                          >
                            Edit
                          </button>
                          <span>|</span>
                          <button
                            className="delivery_address_edite text-danger"
                            onClick={() =>
                              dispatch(deleteUserAddress(item?._id))
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-4">
                <img src={Address} width="30%" />
                <div className="mt-2">
                  <h4>Please Add Address</h4>
                </div>
              </div>
            )}


            <div className="mt-2">
                 <button onClick={()=>dispatch(Back())} style={{padding:"7px 20px",backgroundColor:"#df0067",color:"white",borderRadius:"20px"}}>Back Page</button>
            </div>
          </div>

          <div className="col-5 mt-4 ">
            <div className="pb-0 d-flex">
              <div className="col-6 mt-4">
                {userCartProduct?.map((item, j) => {
                 const {category,_id} = item?.productId
                 const productName = category?.replace(/\s+/g,"-")
                  const { cart_three_delivery_data, cart_delivery_date } = item;
                  const { images, brand } = item?.productId;
                  const startDate = new Date(cart_delivery_date);
                  const endDate = new Date(cart_three_delivery_data);

                  const startDay = startDate.getDate();
                  const startMonth = startDate.toLocaleString("default", {
                    month: "short",
                  });

                  const endDay = endDate.getDate();
                  const endMonth = endDate.toLocaleString("default", {
                    month: "short",
                  });
                  const deliveryPeriod = `${startDay} ${startMonth} - ${endDay} ${endMonth}`;

                  return (
                    <>
                      <div className="image-fluid d-flex align-items-center gap-2 " key={j}>
                        <img
                          src={`${CONN.IMAGE_URL}${images[0]}`}
                          alt={brand}
                          height={60}
                          className="gap-2 mt-3"
                          onClick={()=>navigate(`/singleProduct/${productName}/${_id}`)}
                        />
                        <div className="mt-4">
                          <p className="delivery_address_content12 ">
                            Delivery Between
                          </p>
                          <h6 className="fw-bold">{deliveryPeriod}</h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="col-lg-6 col-12">
                <div className="mt-4">
                  <div className="payment_details">
                    <h6>Order Details</h6>
                    <div className="d-flex justify-content-between p-2">
                      <span>Total MRP</span>
                      <span>&#x20b9; {totalAmount}</span>
                    </div>
                    <div className="d-flex justify-content-between p-2 ">
                      <span>Discount</span>
                      <span style={{ color: "#18AC4A" }}>Rs. -</span>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                      <span>Shipping Fee</span>
                      <span>Rs. -</span>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        padding: "5px",
                      }}
                    ></div>
                    <div className="d-flex justify-content-between p-2">
                      <span>
                        <span className="fw-bold">Total</span> MRP
                      </span>
                      <span> {totalAmount}</span>
                    </div>

                    <div
                      className=" d-flex justify-content-center rounded-3 "
                      style={{ backgroundColor: "#df0067" }}
                    >
                      <button
                        className="  p-2"
                        style={{ background: "none", color: "white" }}
                        onClick={() => checkOutHandler()}
                      >
                        Pay here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" delivery_address_payment">
        <div className="d-flex justify-content-center gap-4 mt-3 mb-4">
          <div style={{ width: "6%" }}>
            <img src={rupay} width="100%" alt="Rupay" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={phone} width="100%" alt="Phone" />
          </div>
          <div style={{ width: "4%" }}>
            <img src={visa} width="100%" alt="Visa" />
          </div>
          <div style={{ width: "2%" }}>
            <img src={pay} width="100%" alt="Pay" />
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex flex-wrap">
        <ProductCard data={detailsCategory} />
      </div>
    </div>
  );
};

export default Delivery_address;
