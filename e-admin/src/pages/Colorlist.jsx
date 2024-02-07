import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import "../styles/Mainlayout.css";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import UseInput from "../useCustom/useInput";
import {
  createColor,
  colorgets,
  colorpatch,
  colorDelete
} from "../features/color/colorSlice";
import { useDispatch, useSelector } from "react-redux";
const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Color",
    selector: (row) => row.color,
    sortable: true,
  },
  {
    name: "Color Name",
    selector: (row) => row.color_hex_name,
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


function Colorlist() {
  const [render,setRender]=useState(0)
  const dispatch = useDispatch();
  const { getAllColor } = useSelector((state) => state.color);
  const [edite, setEdite] = useState("");
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
      color_title: edite.color_title || "",
      color_hex_name:edite.color_hex_name || "",
      meta_title:edite.meta_title || "",
      meta_description:edite.meta_description || "",
      meta_keyWord:edite.meta_keyWord || "",
      sort:edite.sort || ""
      

    },
    onSubmit: (value) => {
      if (edite !== "") {
        const data = { id: edite._id, colorValue: value };
        dispatch(colorpatch(data));
      } else {
        dispatch(createColor(value));
      }
      resetForm()
      setEdite("")
    
    },
    validationSchema: Yup.object().shape({
      color_title: Yup.string().required("Color title is required "),
      // color_hex_name: Yup.string().required("Description is required "),
      // meta_title: Yup.string().required("Meta title is required "),
      // meta_description: Yup.string().required("Meta description is required "),
      // meta_keyWord: Yup.string().required("Meta keyword is required "),
      sort: Yup.string()
        .matches(/^\d$/, "Please enter a single digit.")
        .required("Sort is required."),
    }),
  });

  const handleEdite = (i) => {
    const findColor = getAllColor.find((item) => item._id === i);
    setEdite(findColor);
   
  };
  const handleDelete=(i)=>{
    dispatch(colorDelete(i))
    setRender((per)=>per-1)
  }

  useEffect(() => {
    dispatch(colorgets());
  }, [render]);

  const data = [];
  for (let id = 0; id < getAllColor.length; id++) {
    data.push({
      id: id + 1,
      color: getAllColor[id]?.color_title,
      // color_hex_name: getAllColor[id]?.color_hex_name,
      meta_title: getAllColor[id]?.meta_title,
      meta_description: getAllColor[id]?.meta_description,
      meta_keyword: getAllColor[id]?.meta_keyWord,
      sort: getAllColor[id]?.sort,
      action: (
        <>
          <div className="d-flex">
            <Link
              style={{ marginRight: "10px" }}
              className="mainlayout_icons"
              onClick={() => handleEdite(getAllColor[id]._id)}
            >
              <FiEdit />
            </Link>
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(getAllColor[id]._id)}
              />
            </Link>
          </div>
        </>
      ),
    });
  }

  return (
    <div>
      <div className="mt-2">
        <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">{edite? "Update Color":"Color"}</div>
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
                      type="color"
                      name="color_title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    
                      value={values.color_title}
                      label="Color"
                    />
                    {errors.color_title && touched.color_title ? (
                      <div style={{ color: "red" }}>
                        {errors.color_title}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-3">
                    <UseInput
                      type="text"
                      name="color_hex_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                     
                      value={values.color_hex_name}
                      label="Color Name"
                    />
                    {errors.color_hex_name &&
                    touched.color_hex_name ? (
                      <div style={{ color: "red" }}>
                        {errors.color_hex_name}
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
                      {edite !== "" ? "Update Color" : "Add Color"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <DataTable columns={columns} data={data} pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colorlist;
