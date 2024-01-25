import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {brandSignup} from "../features/brandSlice";
function Addbrand() {

  const dispatch=useDispatch()
  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        brand_title: "",
      },
      onSubmit: (value) => {
        dispatch(brandSignup(value))
      },
      validationSchema: Yup.object().shape({
        brand_title: Yup.string().required("Brand title is required "),
      }),
    });

  return (
    <div className="mt-2">
      <h3>Add Brand</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Color"
            name="brand_title"
            value={values.brand_title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label for="floatingInput" style={{ fontWeight: "500" }}>
            Enter Brand
          </label>
        </div>
        {errors.brand_title && touched.brand_title && <div style={{color:"red"}}>{errors.brand_title}</div>}
      
        <div className="mt-5">
          <button className="btn addcolor_btn" type="submit">Add Brand</button>
        </div>
      </form>
    </div>
  );
}

export default Addbrand;
