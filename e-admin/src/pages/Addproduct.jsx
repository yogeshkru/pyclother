import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Select } from "antd";
import { colorgets } from "../features/color/colorSlice";
import { brandGets } from "../features/brandSlice";
import { categoryGetData } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../useCustom/useInput";
import Dropzone from "react-dropzone";
import "../styles/Mainlayout.css";
import { Getgst } from "../features/Gst/gstSlice";
import {useFormik} from "formik";
import * as Yup from "yup";

function Addproduct() {
  const dispatch = useDispatch();
  const { Getbrand } = useSelector((state) => state.brand);
  const { categoryGet } = useSelector((state) => state.category);
  const { getAllColor } = useSelector((state) => state.color);
  const { getGstData } = useSelector((state) => state.gst);

  const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
    initialValues:{
      name:"",
      description:"",
      brand:"",
      color:"",
      price:"",
      sku:"",
      tags:"",
      Available:"",
      model:"",
      stack:"",
      Gst:"",
      quantity:"",
      category:"",
      rewardpoint:"",
      sort:"",
      length:"",
      width:"",
      height:"",
      brether:"",
      weight:"",
      weight_class:"",
      meta_title:"",
      meta_description:"",
      meta_keyboard:""  
    }
  })

  const get_brand = Getbrand?.map((item) => (
    <option key={item?._id} value={item.brand_title}>
      {item.brand_title}
    </option>
  ));

  const get_color = getAllColor?.map((item) => (
    <option
      key={item._id}
      value={item.color_title}
      style={{ backgroundColor: item.color_title, color: "white" }}
      className="addproduct_color"
    >
      {item.color_title}
    </option>
  ));

  const getGst = getGstData?.map((item) => (
    <option value={item.gst_percentage} key={item._id}>
      {item.gst_percentage}
    </option>
  ));

  const get_category = categoryGet.map((item) => (
    <option key={item._id} value={item.category_title}>
      {item.category_title}
    </option>
  ));

  useEffect(() => {
    dispatch(brandGets());
    dispatch(colorgets());
    dispatch(categoryGetData());
    dispatch(Getgst());
  }, [dispatch]);

  return (
    <div className="row">
      <form>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <div class="card">
                <div class="card-body product_input">
                  <div className="row mb-3">
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Name</label>
                      <UseInput type="text" label="Name" />
                    </div>
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Model</label>
                      <UseInput type="text" label="Model" />
                    </div>

                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">SKU</label>
                      <UseInput type="text" label="SKU" />
                    </div>
                  </div>
                  <div className="row mb-2  ">
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Stack</label>
                      <UseInput type="text" label="Stack" />
                    </div>
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Price</label>
                      <UseInput type="text" label="Model" />
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Tax</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          {getGst}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Brand</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          {get_brand}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product_custom-dropdown">
                        <label className="fw-bold fs-10">Color</label>
                        <UseInput type="text" label="Color" />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Category</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          {get_category}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Reward Point</label>
                        <UseInput type="text" label="Reward Point" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Status</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Enable</option>
                          <option value="2">Disable</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Sort</label>
                        <UseInput type="number" label="Sort" />
                      </div>
                    </div>
                  </div>
                   

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Quantity</label>
                        <UseInput type="text" label="Quantity" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Tag</label>
                        <UseInput type="text" label="Tag" />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                       
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 mb-2">
                    <label className="fw-bold fs-10">Description</label>
                    <UseInput type="text" label="Description" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card p-4">
                <div
                  class="card-body "
                  style={{ border: "1px solid black", borderRadius: "20px" }}
                >
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      dispatch(uploadImgtoServer(acceptedFiles))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p className="text-center">Upload Image</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>

                <div className="">
                  <label className="fw-bold fs-10">Sort</label>
                  <UseInput type="text" label="Sort" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div class="card mt-2">
                <div class="card-body product_input">
                  <div className="">
                    <h4>Dimension</h4>
                  </div>

                  <div className="row mb-1">
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Length</label>
                      <UseInput type="text" label="Length" />
                    </div>
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Brether</label>
                      <UseInput type="text" label="Brether" />
                    </div>
                  </div>
                  <div className="mt-3 mb-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Height</label>
                        <UseInput type="text" label="Length" />
                      </div>
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Dimension class</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Centimeter</option>
                          <option value="2">Millimeter</option>
                          <option value="3">Inch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Weight</label>
                        <UseInput type="text" label="Length" />
                      </div>
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Weight class</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Kilogram</option>
                          <option value="2">Gram</option>
                          <option value="3">Pound</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div class="card mt-2">
                <div
                  class="card-body  product_input"
                  style={{ padding: " 23px 12px" }}
                >
                  <div className="">
                    <h4>SEO</h4>
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold fs-10">Meta Title </label>
                    <UseInput type="text" label="Meta Title" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold fs-10">Meta Description </label>
                    <UseInput type="text" label="Meta Description" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold fs-10">Meta Keyword </label>
                    <UseInput type="text" label="Meta Keyword" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addproduct;
