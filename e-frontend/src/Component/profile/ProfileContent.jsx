import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import * as yup from "yup";

import { useFormik } from "formik";

import { MdOutlineTrackChanges } from "react-icons/md";

const profileSchema = yup.object({
  user_name: yup.string(),
  user_email: yup.string(),
  user_phone: yup.number(),
});

const ProfileContent = ({ active }) => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
    },
    onSubmit: (value) => {},
  });

  return (
    <>
      <div className="w-75">
        {active === 1 && (
          <>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <img
                  src="https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg"
                  alt="user-image"
                  className="rounded-circle object-cover border mt-5"
                  width={100}
                />
                <div className="w-30 h-30 bg-secondary rounded-circle cursor-pointer position-absolute bottom-0 end-0">
                  <AiOutlineCamera />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="px-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-column pb-3">
                  <input
                    type="text"
                    className="border p-1 rounded mb-3 w-50 mx-auto"
                    placeholder="Full Name"
                    value={formik.values.user_name}
                    onBlur={formik.handleBlur("user_name")}
                    onChange={formik.handleChange("user_name")}
                  />
                  <input
                    type="text"
                    className="border p-1 rounded mb-3 w-50 mx-auto"
                    placeholder="Email"
                    value={formik.values.user_email}
                    onBlur={formik.handleBlur("user_email")}
                    onChange={formik.handleChange("user_email")}
                  />
                  <input
                    type="text"
                    className="border p-1 rounded mb-3  w-50 mx-auto"
                    placeholder="Phone"
                    value={formik.values.user_phone}
                    onBlur={formik.handleBlur("user_phone")}
                    onChange={formik.handleChange("user_phone")}
                  />
                </div>
                <button
                  type="submit"
                  className="border p-1 rounded-2 d-flex mx-auto mb-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
    </>
  );
};

function AllOrders(){
    
    return (
        <>
        dddddddddddddd
        </>
    )
}
export default ProfileContent;
