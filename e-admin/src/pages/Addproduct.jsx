import React, { useEffect, useState, useRef } from "react";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import $ from "jquery";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { colorgets } from "../features/color/colorSlice";
import { brandGets } from "../features/brandSlice";
import { categoryGetData } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../useCustom/useInput";
import "../styles/Mainlayout.css";
import { Getgst } from "../features/Gst/gstSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

import "dropify/dist/css/dropify.min.css";

import { useParams } from "react-router-dom";
import {
  getOneProduct,
  postProductOnServer,
} from "../features/product/productSlice";
// import URL from "../utilis/Url";
import {
  uploadProductImageOnServer,
  deleletProductImageonserver,
} from "../features/uploadImages/uploadImagesSlice";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Addproduct() {
  const dispatch = useDispatch();


  const [Available, setAvailable] = useState(true);

  const { Getbrand } = useSelector((state) => state.brand);
  const { categoryGet } = useSelector((state) => state.category);
  const { getAllColor } = useSelector((state) => state.color);
  const { getallGst } = useSelector((state) => state.gst);
  const { productImage } = useSelector((state) => state.upload);


  // ***************** Images************************
  const [images, setImages] = useState([]);
  const [showSortNotification, setShowSortNotification] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleImageDelete = (data) => {
    setImages((prevImages) => prevImages.filter((img) => img !== data));
  };

  const handleImageOrderChange = (dragIndex, hoverIndex) => {
    const newImages = [...images];
    const draggedImage = newImages[dragIndex];

    newImages.splice(dragIndex, 1);
    newImages.splice(hoverIndex, 0, draggedImage);

    setImages(newImages);
    setShowSortNotification(false);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };



  // *********************************************
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

        model: "",
        stack: "",
        Gst: "",
        quantity: "",
        category: "",
        diamension_class: "",
        rewardpoint: "",
        sort: "",
        length: "",
        size: "",
        height: "",
        brether: "",
        weight: "",
        weight_class: "",
        meta_title: "",
        meta_description: "",
        meta_keyboard: "",
        // images: "",
      },
      onSubmit: (value) => {
        // console.log(value)
        const data = { ...value, Available: Available, images: images };
        dispatch(postProductOnServer(data));
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
        size: Yup.string().required("Size is Required"),
      }),
    });

  const get_brand = Getbrand?.map((item) => (
    <option key={item?._id} value={item.brand_title}>
      {item.brand_title}
    </option>
  ));

  const get_color = getAllColor?.map((item) => (
    <option key={item._id} value={item?.color_title}>
      {item?.color_title}
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

  // ********************************
  // const img = [];
  // console.log(img)

  //  const newForm = new FormData()

  //  images.forEach((image)=>{
  //   newForm.append("images",image)
  //  })



  // useEffect(() => {
  //   values.images = img;
  // }, [img]);

  // *********************************

  useEffect(() => {
    dispatch(brandGets());
    dispatch(colorgets());
    dispatch(categoryGetData());
    dispatch(Getgst());
   
  }, [dispatch]);





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
                        <div style={{ color: "red" }}>{errors.name}</div>
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
                        <div style={{ color: "red" }}>{errors.model}</div>
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
                      {errors.sku && touched.sku ? (
                        <div style={{ color: "red" }}>{errors.sku}</div>
                      ) : (
                        ""
                      )}
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
                        <div style={{ color: "red" }}>{errors.stack}</div>
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
                        <div style={{ color: "red" }}>{errors.price}</div>
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
                          <option>Open this GST</option>
                          {getGst}
                        </select>
                        {errors.Gst && touched.Gst ? (
                          <div style={{ color: "red" }}>{errors.Gst}</div>
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
                          <option>Open this Brand menu</option>
                          {get_brand}
                        </select>
                        {errors.brand && touched.brand ? (
                          <div style={{ color: "red" }}>{errors.brand}</div>
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
                          <option>Open this Color</option>
                          {get_color}
                        </select>
                        {errors.color && touched.color ? (
                          <div style={{ color: "red" }}>{errors.color}</div>
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
                          <div style={{ color: "red" }}>{errors.category}</div>
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
                          className="form-select"
                          aria-label="Default select example"
                          value={Available}
                          onChange={(e) => setAvailable(e.target.value)}
                          onBlur={handleBlur}
                        >
                          <option value={true}>Enable</option>
                          <option value={false}>Disable</option>
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
                        <div style={{ color: "red" }}>{errors.sort}</div>
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
                        <div style={{ color: "red" }}>{errors.quantity}</div>
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
                      {errors.tag && touched.tag ? (
                        <div style={{ color: "red" }}>{errors.tag}</div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-lg-4">
                      <div className="">
                        <label className="fw-bold fs-10">Size</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="size"
                          value={values.size}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option selected>Open this select menu</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                      {errors.size && touched.size ? (
                        <div style={{ color: "red" }}>{errors.size}</div>
                      ) : (
                        ""
                      )}
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
                  {errors.description && touched.description ? (
                    <div style={{ color: "red" }}>{errors.description}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-12 mt-2">
                  <div class="card p-4">

                    <div className="pb-2">
                      {showSortNotification && (
                        <div className="notification d-flex justify-content-end" style={{ fontFamily: 'Roboto, sans-serif' }}>
                          You can sort the images by drag-and-drop!
                        </div>
                      )}

                      <label className="pb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Minimum five image <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />

                      <div className="w-100 d-flex align-items-center flex-wrap ms-4">
                        <label htmlFor="upload">
                          <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                        </label>

                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="position-relative"
                            draggable
                            onDragStart={(e) => {
                              e.dataTransfer.setData('text/plain', index);
                            }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                              e.preventDefault();
                              const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
                              handleImageOrderChange(dragIndex, index);
                            }}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                          >
                            <button
                              type="button"
                              onClick={() => handleImageDelete(image)}
                              className="btn-close position-absolute"
                              style={{ top: '10px', right: '10px' }}
                            ></button>
                            <img
                              src={URL.createObjectURL(image)}
                              alt="image"
                              className="image-preview ms-2 bg-white"
                              title={hoveredIndex === index ? `Image ${index + 1}` : null}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-lg-12">
                <div class="card mt-2">
                  <div class="card-body product_input">
                    <div className="">
                      <h4>Dimension</h4>
                    </div>

                    <div className="row mb-1">
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Length</label>
                        <UseInput
                          type="number"
                          label="Length"
                          name="length"
                          onChange={handleChange}
                          value={values.length}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="fw-bold fs-10">Brether</label>
                        <UseInput
                          type="number"
                          label="Brether"
                          name="brether"
                          value={values.brether}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="mt-3 mb-2">
                      <div className="row">
                        <div className="col-lg-6">
                          <label className="fw-bold fs-10">Height</label>
                          <UseInput
                            type="number"
                            label="height"
                            name="height"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.height}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label className="fw-bold fs-10">
                            Dimension class
                          </label>
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
                          <UseInput
                            type="number"
                            label="Weight"
                            name="weight"
                            value={values.weight}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
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
              <div className="col-lg-12 ">
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
                      <UseInput
                        type="text"
                        label="Meta Title"
                        name="meta_title"
                        value={values.meta_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="fw-bold fs-10">Meta Description </label>
                      <UseInput
                        type="text"
                        label="Meta Description"
                        name="meta_description"
                        value={values.meta_description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="fw-bold fs-10">Meta Keyword </label>
                      <UseInput
                        type="text"
                        label="Meta Keyword"
                        name="meta_keyboard"
                        value={values.meta_keyboard}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <button type="submit" className="brand_padding--border">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addproduct;
