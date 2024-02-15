import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Mainlayout.css";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import UseInput from "../useCustom/useInput";
import { IoIosSearch } from "react-icons/io";
import {
  Postgst,
  Getgst,
  DeleteGst,
  PatchGst
} from "../features/Gst/gstSlice"
import { useDispatch, useSelector } from "react-redux";






const Gst = () => {

  const [render, setRender] = useState(0)
  const [edit, setEdit] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { getallGst } = useSelector((state) => state.gst)



  const col = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "HSN_code",
      selector: (row) => row.hsn_code,
      sortable: true,
    },
    {
      name: "GST",
      selector: (row) => row.gst,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ]





  const handleEdit = (i) => {
    const edits = getallGst.find((item) => item._id === i);
    setEdit(edits)


  }
  const handleDelete = (i) => {
    dispatch(DeleteGst(i))
    setRender(per => per - 1)

  }
  const searchGst = getallGst.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase()))
  );

  const data = [];
  for (let id = 0; id < searchGst.length; id++) {
    data.push({
      id: id + 1,
      hsn_code: searchGst[id]?.gst_hsn_code,
      gst: searchGst[id]?.gst_percentage,

      action: (
        <>
          <div className="d-flex">
            <Link
              style={{ marginRight: "10px" }}
              className="mainlayout_icons"
              onClick={() => handleEdit(searchGst[id]._id)}
            >
              <FiEdit />
            </Link>
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(searchGst[id]._id)}
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
      HSN_code: edit.gst_hsn_code || "",
      Gst: edit.gst_percentage || "",

    },
    onSubmit: (value) => {
      if (edit !== "") {
        const data = { id: edit._id, gstValue: value };
        dispatch(PatchGst(data));
      } else {
        dispatch(Postgst(value));

      }
      resetForm();
      setEdit("");
      setRender((per) => per + 1);
    },
    validationSchema: Yup.object().shape({
      HSN_code: Yup.string().required("HSN_code is required "),
      Gst: Yup.string()
      .required('GST is required')
      .matches(/^\d{3}$/, 'GST must contain exactly three numbers'),
    }),
  });
  useEffect(() => {
    dispatch(Getgst());
  }, [render])

  return (
    <div>
      <div className="mt-2">
        <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">GST</div>
          <div className="col-lg-4">
            <form class="d-flex">
              <div className="input-group w-75">
              <span className="input-group-text"><IoIosSearch /></span>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value) }}
                />
               
              </div>
           
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
                      name="HSN_code"
                      onChange={handleChange}
                      onBlur={handleBlur}

                      value={values.HSN_code}
                      label="HSN_code"
                    />
                    {errors.HSN_code && touched.HSN_code ? (
                      <div style={{ color: "red" }}>
                        {errors.HSN_code}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-3">
                    <UseInput
                      type="number"
                      name="Gst"
                      onChange={handleChange}
                      onBlur={handleBlur}

                      value={values.Gst}
                      label="Gst"
                    />
                    {errors.Gst &&
                      touched.Gst ? (
                      <div style={{ color: "red" }}>
                        {errors.Gst}
                      </div>
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
                      {edit !== "" ? "Update GST" : "Add GST"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <DataTable columns={col} data={data} pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Gst;