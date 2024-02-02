import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import "../styles/Mainlayout.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import UseInput from "../useCustom/useInput";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import {
  categoryPostData,
  categoryGetData,
  categoryPatchData,
  categoryDeleteData,
} from "../features/category/categorySlice";

function Categorylist() {
  const [render, setRender] = useState(0);
  const [edite, setEdite] = useState("");
  const dispatch = useDispatch();
  const { categoryGet } = useSelector((state) => state.category);
  console.log(categoryGet);

  const handleEdite = (i) => {
    const categoryEdite = categoryGet.find((item) => item._id === i);
    setEdite(categoryEdite);
    console.log(categoryEdite);
  };
  const handleDelete = (i) => {
    dispatch(categoryDeleteData(i));
    setRender((per) => per - 1);
  };
 

  const columns1 = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Meta title",
      selector: (row) => row.meta_title,
    },
    {
      name: "Meta Description",
      selector: (row) => row.meta_description,
    },
    {
      name: "Meta Keyword",
      selector: (row) => row.meta_keyword,
    },
    {
      name: "Sort",
      selector: (row) => row.sort,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const data = [];
  for (let id = 0; id < categoryGet.length; id++) {
    data.push({
      id: id + 1,
      category: categoryGet[id]?.category_title,
      description: categoryGet[id]?.category_description,
      meta_title: categoryGet[id]?.meta_title,
      meta_description: categoryGet[id]?.meta_description,
      meta_keyword: categoryGet[id]?.meta_keyWord,
      sort: categoryGet[id]?.sort,
      action: (
        <>
          <div className="d-flex">
            <Link
              style={{ marginRight: "10px" }}
              className="mainlayout_icons"
              onClick={() => handleEdite(categoryGet[id]._id)}
            >
              <FiEdit />
            </Link>
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(categoryGet[id]._id)}
              />
            </Link>
          </div>
        </>
      ),
    });
  }

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
      category_title: edite.category_title || "",
      category_description: edite.category_description || "",
      meta_title: edite.meta_title || "",
      meta_description: edite.meta_description || "",
      meta_keyWord: edite.meta_keyWord || "",
      sort: edite.sort || "",
    },
    onSubmit: (value) => {
      if (edite !== "") {
        const data = { id: edite._id, categoryValue: value };
        dispatch(categoryPatchData(data));
      } else {
        dispatch(categoryPostData(value));
      
      }
      resetForm();
      setEdite("");
      setRender((per) => per + 1);
    },
    validationSchema: Yup.object().shape({
      category_title: Yup.string().required("Category title is required "),
      // category_description: Yup.string().required("Description is required "), 
      // meta_title: Yup.string().required("Meta title is required "),
      // meta_description: Yup.string().required("Meta description is required "),
      // meta_keyWord: Yup.string().required("Meta keyword is required "),
      sort: Yup.string()
        // .matches(/^\d$/, "Please enter a single digit.")
        // .required("Sort is required."),
    }),
  });

  useEffect(() => {
    dispatch(categoryGetData());
  }, [render]);
  return (
    <div>
      <div className="mt-2">
        <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">
            {" "}
            {edite ? "Update Category" : "Category"}
          </div>
          <div className="col-lg-4">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <div class="card">
              <div class="card-body shadow ">
                <form>
                  <div className="mb-2">
                    <UseInput
                      type="text"
                      name="category_title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Category"
                      value={values.category_title}
                      label="Category"
                    />
                    {errors.category_title && touched.category_title ? (
                      <div style={{ color: "red" }}>
                        {errors.category_title}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-3">
                    <UseInput
                      type="text"
                      name="category_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Category"
                      value={values.category_description}
                      label="Description"
                    />
                    {errors.category_description &&
                    touched.category_description ? (
                      <div style={{ color: "red" }}>
                        {errors.category_description}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <h5>SEO</h5>
                  </div>
                  <div className="mb-2">
                    <UseInput
                      type="text"
                      name="meta_title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Meta Title"
                      value={values.meta_title}
                      label="Meta Title"
                    />
                    {errors.meta_title && touched.meta_title ? (
                      <div style={{ color: "red" }}>{errors.meta_title}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-2">
                    <UseInput
                      type="text"
                      name="meta_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Meta Description"
                      value={values.meta_description}
                      label="Meta Description"
                    />
                    {errors.meta_description && touched.meta_description ? (
                      <div style={{ color: "red" }}>
                        {errors.meta_description}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-2">
                    <UseInput
                      type="text"
                      name="meta_keyWord"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Category"
                      value={values.meta_keyWord}
                      label="Meta keyword"
                    />
                    {errors.meta_keyWord && touched.meta_keyWord ? (
                      <div style={{ color: "red" }}>{errors.meta_keyWord}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-2">
                    <UseInput
                      type="text"
                      name="sort"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Sort"
                      value={values.sort}
                      label="Sort"
                    />
                    {errors.sort && touched.sort ? (
                      <div style={{ color: "red" }}>{errors.sort}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="brand_padding">
                    <button
                      type="submit"
                      className="brand_padding--border"
                      onClick={handleSubmit}
                    >
                      {edite !== "" ? "Update Category" : "Add Category"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <DataTable columns={columns1} data={data} pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorylist;
