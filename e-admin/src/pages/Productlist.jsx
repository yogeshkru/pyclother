import React, { useEffect, useState, useRef } from "react";

import "../styles/Mainlayout.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { colorgets } from "../features/color/colorSlice";
import { categoryGetData } from "../features/category/categorySlice";
import { brandGets } from "../features/brandSlice";
import {
  shopData,
  deleteProductOnServer,
  productUpdateOnServer,
} from "../features/product/productSlice";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa6";
import "../styles/Mainlayout.css";
import UseInput from "../useCustom/useInput";
import { Getgst } from "../features/Gst/gstSlice";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import {
  deleletProductImageonserver,
  uploadProductImageOnServer,
} from "../features/uploadImages/uploadImagesSlice";
import URL from "../utilis/Url";

function Productlist() {
  const { Getbrand } = useSelector((state) => state.brand);
  const { categoryGet } = useSelector((state) => state.category);
  const { getAllColor } = useSelector((state) => state.color);
  const { getallGst } = useSelector((state) => state.gst);
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [edite, setEdite] = useState(null);
  const { getAllShopProduct } = useSelector((state) => state.product);
  const modelRef = useRef(null);
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: edite?.name || "",
      model: edite?.model || "",
      sku: edite?.sku || "",
      stack: edite?.stack || "",
      price: edite?.price || "",
      Gst: edite?.Gst._id || "",
      brand: edite?.brand || "",
      category: edite?.category || "",
      color: edite?.color|| "",
      rewardpoint: edite?.rewardpoint || "",
      Available: edite?.Available || "",
      sort: edite?.sort || "",
      quantity: edite?.quantity || "",
      tag: edite?.tag || "",
      size: edite?.size || "",
      meta_title: edite?.meta_title || "",
      meta_description: edite?.meta_description || "",
      meta_keyboard: edite?.meta_keyboard || "",
      length: edite?.length || "",
      brether: edite?.brether || "",
      diamension_class: edite?.diamension_class || "",
      height: edite?.height || "",
      weight: edite?.weight || "",
      weight_class: edite?.weight_class || "",
      description: edite?.description || "",
      images: edite?.images || "",
    },
    onSubmit: (value) => {
      const update = { id: edite?._id, productUpdate: value };
      dispatch(productUpdateOnServer(update));
      resetForm();
      handleClose();
    },
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/product");
  };

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
  const get_category = categoryGet.map((item) => (
    <option key={item._id} value={item.category_title}>
      {item.category_title}
    </option>
  ));

  const getGst = getallGst?.map((item) => (
    <option value={item._id} key={item._id}>
      {item.gst_percentage}%
    </option>
  ));

  const handleEye = (i) => {
    navigate("/admin/view", { state: i });
  };
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Product Model",
      selector: (row) => row.model,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Color",
      selector: (row) => row.color,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const handleDelete = (id) => {
    dispatch(deleteProductOnServer(id));
  };

  const handleUpdate = (i) => {
    // const data = getAllShopProduct.find((item) => item._id === i);
    // setEdite(data);
    // setModel(true);
    navigate(`/admin/product/${i}`)
  };

  
  const data = [];
  for (let i = 0; i < getAllShopProduct.length; i++) {
    data.push({
      id: i + 1,
      name: getAllShopProduct[i]?.name,
      model: getAllShopProduct[i]?.model,
      brand: getAllShopProduct[i]?.brand,
      category: getAllShopProduct[i]?.category,
      color: getAllShopProduct[i]?.color,
      price: getAllShopProduct[i]?.price,

      action: (
        <>
          <div className="d-flex justify-content-between">
            <div className="">
              <FiEdit
                fontSize={15}
                className="mainlayout_icons mr-4 fs-5"
                onClick={() => handleUpdate(getAllShopProduct[i]._id)}
              />
            </div>
            <Link className="ms-3">
              <MdDelete
                fontSize={15}
                className="mainlayout_icons fs-5"
                onClick={() => handleDelete(getAllShopProduct[i]._id)}
              />
            </Link>
            <div className="ms-3">
              <FaRegEye
                fontSize={15}
                className="mainlayout_icons fs-5"
                onClick={() => handleEye(getAllShopProduct[i])}
              />
            </div>
          </div>
        </>
      ),
    });
  }
  useEffect(() => {
    dispatch(shopData());

    dispatch(brandGets());
    dispatch(colorgets());
    dispatch(categoryGetData());
    dispatch(Getgst());

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleClose = () => {
    setModel(false);
  };

  const handleClickOutside = (e) => {
    if (modelRef.current && !modelRef.current.contains(e.target)) {
      handleClose();
    }
  };

  // **********************Image Upload *********************
  const { productImage } = useSelector((state) => state.upload);

  const handleImage = (image) => {
    dispatch(uploadProductImageOnServer(image));
  };

  const handleDeleteImage = async (data,id) => {
    try {
      await dispatch(deleletProductImageonserver(data,id));
    } catch (error) {
      console.log(error);
    }
  };
  let productImageUrl = edite?.images;

  let handleImageDeleteArray = (url) => {
    const deleteImage = productImageUrl.find((data) => data?.url === url);

    console.log(deleteImage);
    productImageUrl.splice(deleteImage, 1);
  };
  // ********************************************************

  return (
    <div className="product_model-2">
      <div className="mt-2">
        <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">Product</div>
          <div className="col-lg-4">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-4 text-end ">
            <button
              type="submit"
              className="brand_padding--border"
              onClick={handleClick}
            >
              Add Product{" "}
            </button>
          </div>
        </div>
       
        <div className="mt-4">
          <DataTable columns={columns} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default Productlist;
