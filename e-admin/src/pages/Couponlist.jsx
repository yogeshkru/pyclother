import React, { useEffect, useState } from "react";
import UseInput from "../useCustom/useInput";
import DataTable from "react-data-table-component";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  couponPostData,
  Couponget,
  couponPatchData,
  couponDeletes,
} from "../features/coupon/couponSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Couponlist() {
  const [render, setRender] = useState(0);
  const dispatch = useDispatch();
  const [edite, setEdite] = useState("");
  const { couponGet } = useSelector((state) => state.coupon);
  console.log(couponGet);
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      coupon_name: edite.coupon_name || "",
      coupon_expired: edite.coupon_expired || "",

      coupon_discount: edite.coupon_discount || "",
    },
    validationSchema: Yup.object().shape({
      coupon_name: Yup.string().required("Name is required"),
      coupon_expired: Yup.date()
        .required("Date of birth is required")
        .nullable(),
      coupon_discount: Yup.string().required("Discount is required"),
    }),
    onSubmit: (value) => {
      if (edite !== "") {
        const data = { id: edite._id, couponValue: value };
        dispatch(couponPatchData(data));
      } else {
        dispatch(couponPostData(value));
      }
      resetForm();
      setEdite("");
      setRender((per) => per + 1);
    },
  });
  useEffect(() => {
    dispatch(Couponget());
  }, [dispatch, render]);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Coupon",
      selector: (row) => row.coupon,
    },
    {
      name: "Expired",
      selector: (row) => row.expired,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const handleEdite = (i) => {
    const couponEdite = couponGet.find((item) => item._id === i);
    setEdite(couponEdite);
  };

  const handleDelete = (i) => {
    dispatch(couponDeletes(i));
    setRender((per) => per - 1);
  };

  const data = [];
  for (let id = 0; id < couponGet.length; id++) {
    data.push({
      id: id + 1,
      coupon: couponGet[id]?.coupon_name,
      expired: new Date(couponGet[id]?.coupon_expired).toLocaleDateString(),
      discount: couponGet[id]?.coupon_discount,

      action: (
        <>
          <div className="d-flex">
            <Link
              style={{ marginRight: "10px" }}
              className="mainlayout_icons"
              onClick={() => handleEdite(couponGet[id]._id)}
            >
              <FiEdit />
            </Link>
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(couponGet[id]._id)}
              />
            </Link>
          </div>
        </>
      ),
    });
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <div class="card">
            <div class="card-body shadow">
              <div className="">
                <h4 className="pb-2">Coupon</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label className="fw-bold">Coupon Name</label>
                    <UseInput
                      type="text"
                      label="Name"
                      value={values.coupon_name}
                      name="coupon_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.coupon_name && touched.coupon_name ? (
                      <div style={{ color: "red" }}>{errors.coupon_name}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold">Coupon Expired</label>
                    <UseInput
                      type="date"
                      label="expired"
                      value={values.coupon_expired}
                      name="coupon_expired"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.coupon_expired && touched.coupon_expired ? (
                      <div style={{ color: "red" }}>
                        {errors.coupon_expired}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold"> Coupon Discount</label>
                    <UseInput
                      type="number"
                      label="discount"
                      value={values.coupon_discount}
                      name="coupon_discount"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.coupon_discount && touched.coupon_discount ? (
                      <div style={{ color: "red" }}>
                        {errors.coupon_discount}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="brand_padding">
                    <button type="submit" className="brand_padding--border">
                      {edite ? "Update Coupon" : "Add Coupon"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <DataTable columns={columns} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default Couponlist;
