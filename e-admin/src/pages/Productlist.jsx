import React, { useEffect, useState } from "react";

import "../styles/Mainlayout.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {
  shopData,
  deleteProductOnServer,
} from "../features/product/productSlice";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa6";
import "../styles/Mainlayout.css";
import UseInput from "../useCustom/useInput";
function Productlist() {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const { getAllShopProduct } = useSelector((state) => state.product);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/product");
  };

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
    // {
    //   name: "Image",
    //   selector: (row) => row.image,
    // },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const handleDelete = (id) => {
    dispatch(deleteProductOnServer(id));
  };

  const handleUpdate = (i) => {
    setModel(!model);
  };
  const data = [];
  for (let i = 0; i < getAllShopProduct.length; i++) {
    data.push({
      id: i + 1,
      name: getAllShopProduct[i]?.name,
      model: getAllShopProduct[i]?.model,
      brand: getAllShopProduct[i]?.brand,
      category: getAllShopProduct[i]?.category,
      color: getAllShopProduct[i]?.color[0]?.color_hex_name,
      price: getAllShopProduct[i]?.price,

      action: (
        <>
          <div className="d-flex justify-content-between">
            <div className="ms-2">
              <FiEdit
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleUpdate(getAllShopProduct[i])}
              />
            </div>
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(getAllShopProduct[i]._id)}
              />
            </Link>
            <div className="ms-2">
              <FaRegEye
                fontSize={15}
                className="mainlayout_icons"
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
  }, [dispatch]);
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
        <div>
          {model ? (
            <div className="product_model--data">
              <div>
                <h5 className="text-center">Update Product</h5>
                <div className="row">
                  <div className="col-lg-6">
                   <UseInput
                   type="text"
                   label="Name"
                   />
                  </div>
                  <div className="col-lg-6">
                  <UseInput
                   type="text"
                   label="Product"
                   />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4">
          <DataTable columns={columns} data={data} pagination />
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
