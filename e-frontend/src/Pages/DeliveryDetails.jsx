import React, { useState } from "react";
import gpay from "../assets/image/pngwing-3.png";
import phone from "../assets/image/pngwing-4.png";
import cod from "../assets/image/Group 266.png";
import visa from "../assets/image/pngwing-2.png";
import rupay from "../assets/image/pngwing.png";

import pay from "../assets/image/Group 249.png";
import StepHeader from "../Component/StepHeader";
import {
  Postorder,
  PostAddress,
  getCartOne
} from "../features/deliveryDetails/deliverySlice"
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";



function DeliveryDetails() {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locations = [
    { id: 1, value: 'Home' },
    { id: 2, value: 'Work' }
  ];
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  // console.log(event.target.value, "diuwgivugvduig")
  const { values, errors, handleBlur, handleChange, handleSubmit, touched, resetForm } = useFormik({
    initialValues: {
      user_name: "",
      user_phone: "",
      address_pincode: "",
      address_area: "",
      address_city: "",
      address_state: "",
      address_country:""
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string().required("name is required"),
      user_phone: Yup.string().required("phone number is required"),
      address_pincode: Yup.string().required("pincode is required"),
      address_area: Yup.string().required("area is required"),
      address_city: Yup.string().required("city is required"),
      address_state: Yup.string().required("state is required"),
      address_country:Yup.string().required("country is required")
    }),
    onSubmit:async(value)=>{
     try {
      const addressresponse= await dispatch(PostAddress(value))
      const addressId = addressresponse.payload.data._id;
     
      const orderValues = {...value,order_user_address:addressId};
    
      const order=await dispatch(Postorder(orderValues))
      console.log(order,"address id")
      resetForm();
     } catch (error) {
      console.error('Error submitting form:', error);
     }
    }
  })

  return (
    <div>
    
        <StepHeader />
     

      <div className="row  p-3 delviery_details_row">
        <div className="col-lg-2"></div>

        <div
          className="col-lg-4 delivery-input-border"
          style={{
            border: "2px solid #e1e2e2",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div>
            <h5 className="text-uppercase fs-6 fw-bold">Contact Details</h5>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div>
                  <input
                    type="text"
                    className="deliverydetails_input_fild"
                    placeholder="Name*"
                    name="user_name"
                    onChange={handleChange}
                    value={values.user_name}
                    onBlur={handleBlur}
                  />
                    {errors.user_name && touched.user_name ? (
                        <div style={{ color: "red" }}>{errors.user_name}</div>
                      ) : (
                        ""
                      )}
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <input
                    type="number"
                    className="deliverydetails_input_fild"
                    placeholder="Mobile no*"
                    name="user_phone"
                    onChange={handleChange}
                    value={values.user_phone}
                    onBlur={handleBlur}
                  />
                    {errors.user_phone && touched.user_phone ? (
                        <div style={{ color: "red" }}>{errors.user_phone}</div>
                      ) : (
                        ""
                      )}
                </div>
              </div>
              <div className="mt-4">
                <h5 className="fs-6 fw-bold">ADDRESS</h5>
                <div className="mt-4">
                  <div>
                    <input
                      type="number"
                      className="deliverydetails_input_fild"
                      placeholder="Pin code*"
                      name="address_pincode"
                      onChange={handleChange}
                      value={values.address_pincode}
                      onBlur={handleBlur}
                    />
                      {errors.address_pincode && touched.address_pincode ? (
                        <div style={{ color: "red" }}>{errors.address_pincode}</div>
                      ) : (
                        ""
                      )}
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <input
                      type="text"
                      className="deliverydetails_input_fild"
                      placeholder="Address(House No,Building, Street Area)* "
                      name="address_area"
                      onChange={handleChange}
                      value={values.address_area}
                      onBlur={handleBlur}
                    />
                      {errors.address_area && touched.address_area ? (
                        <div style={{ color: "red" }}>{errors.address_area}</div>
                      ) : (
                        ""
                      )}
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <input
                      type="text"
                      className="deliverydetails_input_fild"
                      placeholder="Locality/ Town*"
                      name="address_city"
                      onChange={handleChange}
                      value={values.address_city}
                      onBlur={handleBlur}
                    />
                      {errors.address_city && touched.address_city ? (
                        <div style={{ color: "red" }}>{errors.address_city}</div>
                      ) : (
                        ""
                      )}
                  </div>

                </div>
               
                <div className="mt-4">
                  <div>
                    <input
                      type="text"
                      className="deliverydetails_input_fild"
                      placeholder="State*"
                      name="address_state"
                      onChange={handleChange}
                      value={values.address_state}
                      onBlur={handleBlur}
                    />
                      {errors.address_state && touched.address_state ? (
                        <div style={{ color: "red" }}>{errors.address_state}</div>
                      ) : (
                        ""
                      )}
                  </div>

                </div>
                <div className="mt-4">
                  <div>
                    <input
                      type="text"
                      className="deliverydetails_input_fild"
                      placeholder="country*"
                      name="address_country"
                      onChange={handleChange}
                      value={values.address_country}
                      onBlur={handleBlur}
                    />
                      {errors.address_country && touched.address_country ? (
                        <div style={{ color: "red" }}>{errors.address_country}</div>
                      ) : (
                        ""
                      )}
                  </div>

                </div>
                <div className="mt-4">
                  <h5 className="fs-6 fw-bold">SAVE ADDRESS AS</h5>
                </div>
                <div className="mt-4">
                  <div className="row">
                    {locations.map(location => (
                      <div key={location.id} className="col-lg-3 col-4 d-flex align-items-center">
                        <input
                          type="radio"
                          name="address_deliver"  // Use "address_deliver" as the name for all radio buttons
                          value={location.value}  // Use location.value as the value for the radio button
                          checked={selectedLocation === location.value}  // Check if selectedLocation matches location.value
                          onChange={handleLocationChange}
                        />
                        <label className="p-2">{location.value}</label>
                      </div>
                    ))}

                  </div>
                </div>
               
                <div className="mt-4">
                  <div>
                    <button type="submit" className="delivery-details_button">
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3 ">
          <div className="payment_details ">
            <h6 className="fw-bold">Order Details</h6>
            <div className="d-flex justify-content-between p">
              <span>Total MRP</span>
              <span>Rs. 1599</span>
            </div>
            <div className="d-flex justify-content-between p ">
              <span>Discount</span>
              <span style={{ color: "#18AC4A" }}>-Rs. 1000</span>
            </div>
            <div className="d-flex justify-content-between p">
              <span>Shipping Fee</span>
              <span>Rs. 99</span>
            </div>
            <div
              style={{
                borderBottom: "2px solid rgb(225, 226, 226)",
                padding: "5px",
              }}
            ></div>
            <div className="d-flex justify-content-between p-2">


            </div>
            <div className="d-flex justify-content-between p">
              <span>
                <span className="fw-bold">Total</span> MRP
              </span>
              <span className="fw-bold">Rs. 698</span>
            </div>

          </div>

        </div>

        <div className="col-lg-2"></div>
      </div>

      <div className="d-flex justify-content-center gap-4 mt-3 mb-4 py-4">
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
  );
}

export default DeliveryDetails;
