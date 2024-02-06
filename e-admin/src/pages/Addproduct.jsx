import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { colorgets } from "../features/color/colorSlice";
import { brandGets } from "../features/brandSlice";
import { categoryGetData } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../useCustom/useInput";
import Dropzone from "react-dropzone"; 
import "../styles/Mainlayout.css";
import { Getgst } from "../features/Gst/gstSlice";
import {  useFormik } from "formik";
import * as Yup from "yup";
import URL from "../utilis/Url";
import { uploadProductImageOnServer,deleletProductImageonserver } from "../features/uploadImages/uploadImagesSlice";


function Addproduct() {
  const dispatch = useDispatch();
  const { Getbrand } = useSelector((state) => state.brand);
  const { categoryGet } = useSelector((state) => state.category);
  const { getAllColor } = useSelector((state) => state.color);
  const { getallGst } = useSelector((state) => state.gst);
  const {productImage} = useSelector((state)=>state.upload)
 




 


  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        brand: "",
        color: "",
        price: "",
        sku: "",
        tag: "",
        Available: "",
        model: "",
        stack: "",
        Gst: "",
        quantity: "",
        category: "",
        diamension_class:"",
        rewardpoint: "",
        sort: "",
        length: "",
       
        height: "",
        brether: "",
        weight: "",
        weight_class: "",
        meta_title: "",
        meta_description: "",
        meta_keyboard: "",
        images:""
      },
      onSubmit: (value) => {
        console.log(value);
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().required("Product Name is required"),
        description: Yup.string().required("Product Description is required"),
        brand: Yup.string().required("Brand is required"),
        model: Yup.string().required("Model is required"),
        sku: Yup.string().required("SKU is required"),
        stack: Yup.number().required("Stack is required"),
        price: Yup.number().required("Price is required"),
        Gst: Yup.string().required("GST is required"),
        color: Yup.string().required("Color is required"),
        category: Yup.string().required("Category is required"),
        sort: Yup.string().required("Sort is required"),
        quantity: Yup.string().required("Quantity is required"),
      }),
    });

  const get_brand = Getbrand?.map((item) => (
    <option key={item?._id} value={item.brand_title}>
      {item.brand_title}
    </option>
  ));

  const get_color = getAllColor?.map((item) => (
    <option key={item._id} value={item?._id}>
      {item.color_hex_name}
    </option>
  ));

  const getGst = getallGst?.map((item) => (
    <option value={item._id} key={item._id}>
      {item.gst_percentage}%
    </option>
  ));

  const get_category = categoryGet.map((item) => (
    <option key={item._id} value={item.category_title}>
      {item.category_title}
    </option>
  ));

  const img=[]

  productImage.flat()?.forEach((element)=>{
      img.push({
         url:element
      })
  })

  useEffect(() => {
    dispatch(brandGets());
    dispatch(colorgets());
    dispatch(categoryGetData());
    dispatch(Getgst());
   
  }, []);
  useEffect(()=>{
    values.images=img;

  },[])

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <div class="card">
                <div class="card-body product_input">
                  <div className="row mb-3">
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Name</label>
                      <UseInput
                        type="text"
                        label="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Model</label>
                      <UseInput
                        type="text"
                        label="Model"
                        name="model"
                        value={values.model}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.model && touched.model ? (
                        <div>{errors.model}</div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">SKU</label>
                      <UseInput
                        type="text"
                        label="SKU"
                        name="sku"
                        value={values.sku}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.sku && touched.sku ? <div>{errors.sku}</div> : ""}
                    </div>
                  </div>
                  <div className="row mb-2  ">
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Stack</label>
                      <UseInput
                        type="number"
                        label="Stack"
                        name="stack"
                        value={values.stack}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.stack && touched.stack ? (
                        <div>{errors.stack}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-lg-4">
                      <label className="fw-bold fs-10">Product Price</label>
                      <UseInput
                        type="number"
                        label="Model"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.price && touched.price ? (
                        <div>{errors.price}</div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Tax</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="Gst"
                          value={values.Gst}
                          onChange={handleChange}
                        >
                          <option selected>Open this select menu</option>
                          {getGst}
                        </select>
                        {errors.Gst && touched.Gst ? (
                          <div>{errors.Gst}</div>
                        ) : (
                          ""
                        )}
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
                          value={values.brand}
                          name="brand"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected>Open this select menu</option>
                          {get_brand}
                        </select>
                        {errors.brand && touched.brand ? (
                          <div>{errors.brand}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product_custom-dropdown">
                        <label className="fw-bold fs-10">Color</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="color"
                          value={values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected>Open this select menu</option>
                          {get_color}
                        </select>
                        {errors.color && touched.color ? (
                          <div>{errors.color}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Category</label>

                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="category"
                          value={values.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected>Open this select menu</option>
                          {get_category}
                        </select>
                        {errors.category && touched.category ? (
                          <div>{errors.category}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Reward Point</label>
                        <UseInput
                          type="number"
                          label="Reward Point"
                          name="rewardpoint"
                          value={values.rewardpoint}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
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
                        <UseInput
                          type="number"
                          label="Sort"
                          name="sort"
                          value={values.sort}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.sort && touched.sort ? (
                        <div>{errors.sort}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Quantity</label>
                        <UseInput
                          type="number"
                          label="Quantity"
                          name="quantity"
                          value={values.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.quantity && touched.quantity ? (
                        <div>{errors.quantity}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Tag</label>
                        <UseInput
                          type="text"
                          label="Tag"
                          name="tag"
                          value={values.tag}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.tag && touched.tag ? <div>{errors.tag}</div> : ""}
                    </div>

                    <div className="col-lg-4">
                      <div className=""></div>
                    </div>
                  </div>

                  <div className="mt-3 mb-2">
                    <label className="fw-bold fs-10">Description</label>
                    <UseInput
                      type="text"
                      label="Description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.description && touched.description ? <div>{errors.description}</div>:""}
                </div>

                <div className="col-lg-4">
            <div class="card p-4">
              <div class="card-body">
                <Dropzone
                  onDrop={(acceptedFiles) =>
                    dispatch(uploadProductImageOnServer(acceptedFiles))
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

              <div className="showimages d-flex flex-wrap gap-3">
              {Array.isArray(productImage) &&
                productImage.length > 0 &&
                productImage.flat()?.map((i, j) => {
                  return (
                    <div className="position-relative" key={j}>
                      <button
                        type="button"
                        onClick={() => dispatch(deleletProductImageonserver(i))}
                        className="btn-close position-absolute"
                        style={{ top: "10px", right: "10px" }}
                      ></button>
                      <img src={`${URL.IMAGE_URL}/${i}`} alt="images" width={200} height={200} />

                    </div>
                  );
                })}
            </div>

              <div className="">
                <label className="fw-bold fs-10">Sort</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
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
                      <UseInput type="number" label="Length" name="length" onChange={handleChange} value={values.length} onBlur={handleBlur}/>
                    </div>
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Brether</label>
                      <UseInput type="number" label="Brether" name="brether" value={values.brether} onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                  </div>
                  <div className="mt-3 mb-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Height</label>
                        <UseInput type="number" label="height"  name="height" onChange={handleChange} onBlur={handleBlur} value={values.height}/>
                      </div>
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Dimension class</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="diamension_class"
                          value={values.diamension_class}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected>Open this select menu</option>
                          <option value="Centimeter">Centimeter</option>
                          <option value="Millimeter">Millimeter</option>
                          <option value="Inch">Inch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Weight</label>
                        <UseInput type="number" label="Weight" name="weight" value={values.weight} onChange={handleChange} onBlur={handleBlur}/>
                      </div>
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Weight class</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="weight_class"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.weight_class}
                        >
                          <option selected>Open this select menu</option>
                          <option value="Kilogram">Kilogram</option>
                          <option value="Gram">Gram</option>
                          <option value="Pound">Pound</option>
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
                    <UseInput type="text" label="Meta Title" name="meta_title" value={values.meta_title} onChange={handleChange} onBlur={handleBlur}/>
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold fs-10">Meta Description </label>
                    <UseInput type="text" label="Meta Description"  name="meta_description" value={values.meta_description} onChange={handleChange} onBlur={handleBlur}/>
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold fs-10">Meta Keyword </label>
                    <UseInput type="text" label="Meta Keyword" name="meta_keyboard" value={values.meta_keyboard} onChange={handleChange} onBlur={handleBlur}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default Addproduct;