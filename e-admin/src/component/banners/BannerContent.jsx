import React from "react";
import Dropzone from "react-dropzone";
import "../../styles/bannercontent.css";
import * as yup from "yup";
import { useFormik } from "formik";
const bannerContentSchema = yup.object({
  title: yup.string().required("Title is required"),
  image: yup.string(),
  offer: yup.string(),
});
const BannerContent = ({ active }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      offer: "",
    },
    validationSchema: bannerContentSchema,
    onSubmit: (values) => {},
  });

  return (
    <>
      <div className="w-100">
        {active === 1 && (
          <>
            <div className=" mx-auto d-flex justify-content-center w-50 banner-content-dropzone border rounded-3">
              <Dropzone onDrop={() => dispatch()}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="d-flex align-items-center mx-auto mt-3">
                        Banner Image 732 * 400
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>

            <>
              <div className="row mt-3">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                  <input />
                </div>
                <div className="col-lg-3">
                  <input />
                  <div className="pt-2">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
                <div className="col-lg-3">
                 
                </div>
              </div>
            </>
          </>
        )}
      </div>
    </>
  );
};

export default BannerContent;
