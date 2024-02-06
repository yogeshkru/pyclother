import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import "../../styles/bannercontent.css";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import UseInput from "../../useCustom/useInput";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// ****************************************
import {
  uploadProductImageOnServer,
  deleletProductImageonserver,
} from "../../features/uploadImages/uploadImagesSlice";
import URL from "../../utilis/Url";
import {
  postEvent,
  getEvent,
  deleteEvent,
  uploadBannerImage
} from "../../features/events/eventSlice";

// *********************************************************
import DataTable from "react-data-table-component";

const BannerContent = ({ active }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { productImage } = useSelector((state) => state.upload);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    originalPrice: "",
    discountPrice: "",
    start_date: "",
    finish_date: "",
    status: "",
    images: "",
  });

  // ********************************************

  useEffect(() => {
    const img = [];
    productImage.flat()?.forEach((element) => {
      img.push({
        url: element,
      });
    });

    setFormData((preFormData) => ({
      ...preFormData,
      images: img,
    }));
  }, [productImage]);

  // ******************************************

  const today = new Date().toISOString().slice(0, 10);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);

    if (isNaN(startDate.getTime())) {
      return;
    }

    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);

    setFormData({
      ...formData,
      start_date: startDate.toISOString().slice(0, 10),
      finish_date: null,
    });

    document.getElementById("end_date").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    if (isNaN(endDate.getTime())) {
      return;
    }
    setEndDate(endDate);
    setFormData({
      ...formData,
      finish_date: endDate.toISOString().slice(0, 10),
    });
  };

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : today;

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setError((preError) => ({
      ...preError,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationsErrors = validateForm(formData);
    if (Object.keys(validationsErrors).length > 0) {
      setError(validationsErrors);
      return;
    }

    dispatch(postEvent(formData));
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }

    if (!data.description) {
      errors.description = "Description is required";
    }
    if (!data.status) {
      errors.status = "Category is requied";
    }
    if (!data.discountPrice) {
      errors.discountPrice = "Discount Price";
    }

    if (!data.originalPrice) {
      errors.originalPrice = "Original Price";
    }
    if (!data.start_date) {
      errors.start_date = "Start is required";
    }
    return errors;
  };
  return (
    <>
      <div className="w-100">
        {active === 1 && (
          <>
            <div className="container mt-3">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 bg-white shadow rounded p-3 overflow-y-scroll">
                  <h5 className="text-30px font-Poppins text-center">
                    Create Events
                  </h5>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label pb-2">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        className="form-control"
                      />
                      <div className="error">{errors.name}</div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <label htmlFor="description">
                          Description <span className="text-danger">*</span>
                        </label>

                        <input
                          type="text"
                          id="description"
                          name="description"
                          onChange={handleChange}
                          value={formData.description}
                          className="form-control"
                        />
                      </div>
                      <div className="error">{errors.description}</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="category" className="form-label pb-2">
                        Category <span className="text-danger">*</span>
                      </label>

                      <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={handleChange}
                        value={formData.category}
                        className="form-control"
                      />

                      <div className="error">{errors.category}</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="status" className="form-label pb-2">
                        Status
                      </label>

                      <input
                        type="text"
                        id="status"
                        name="status"
                        onChange={handleChange}
                        value={formData.status}
                        className="form-control"
                      />
                      <div className="error">{errors.status}</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="discountPrice">Discount Price</label>
                      <input
                        type="text"
                        id="discountPrice"
                        name="discountPrice"
                        onChange={handleChange}
                        value={formData.discountPrice}
                        className="form-control"
                      />
                      <div className="error">{errors.discountPrice}</div>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="originalPrice"
                        className="form-label pb-2"
                      >
                        Originl Price
                      </label>

                      <input
                        type="text"
                        name="originalPrice"
                        onChange={handleChange}
                        value={formData.originalPrice}
                        className="form-control"
                      />
                      <div className="error">{errors.originalPrice}</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="start_date" className="form-label pb-2">
                        Event Start Date
                      </label>
                      <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        onChange={handleStartDateChange}
                        value={formData.start_date}
                        className="form-control"
                      />
                      <div className="error">{errors.start_date}</div>
                    </div>

                    <div className="mb-3 border ">
                      <Dropzone
                        onDrop={(acceptedFiles) =>
                          dispatch(uploadProductImageOnServer(acceptedFiles))
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p className=" d-flex justify-content-center align-items-center">
                                Upload Image
                              </p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                    </div>

                    <div className="d-flex flex-wrap gap-3 mb-3">
                      {Array.isArray(productImage) &&
                        productImage.length > 0 &&
                        productImage.flat()?.map((i, j) => {
                          return (
                            <div className="position-relative" key={j}>
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(deleletProductImageonserver(i))
                                }
                                className="btn-close position-absolute"
                                style={{ top: "10px", right: "10px" }}
                              ></button>

                              <img
                                src={`${URL.IMAGE_URL}/${i}`}
                                alt="images"
                                width={100}
                                height={100}
                              />
                            </div>
                          );
                        })}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="end_date" className="form-label pb-2">
                        Event End Date
                      </label>
                      <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        onChange={handleEndDateChange}
                        min={minEndDate}
                        value={formData.finish_date || ""}
                        className="form-control "
                      />
                    </div>

                    <button
                      className="btn btn-primary mt-2 d-flex justify-content-end"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}

        {active === 2 && (
          <>
            <ProjectTracking />
          </>
        )}

        {active === 3 && (
          <>
            <HomeSlideShow />
          </>
        )}
      </div>
    </>
  );
};

function ProjectTracking() {
  const dispatch = useDispatch();
  const { eventArray } = useSelector((state) => state.event);
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(getEvent());
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const col = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "DiscountPrice",
      selector: (row) => row.discountPrice,
    },
    {
      name: "S-Date",
      selector: (row) => row.startdate,
    },
    {
      name: "E-Date",
      selector: (row) => row.enddate,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = [];
  for (let id = 0; id < eventArray.length; id++) {
    data.push({
      id: id + 1,
      name: eventArray[id]?.name,
      description: eventArray[id]?.description,
      discountPrice: eventArray[id]?.discountPrice,
      startdate: new Date(eventArray[id]?.start_date).toLocaleDateString(),
      enddate: new Date(eventArray[id]?.finish_date).toLocaleDateString(),
      action: (
        <>
          <div className="d-flex">
            {/* <Link
              style={{ marginRight: "10px" }}
              className="mainlayout_icons"
              onClick={() => handleEdit(eventArray[id]._id)}
            >
              <FiEdit />
            </Link> */}
            <Link>
              <MdDelete
                fontSize={15}
                className="mainlayout_icons"
                onClick={() => handleDelete(eventArray[id]._id)}
              />
            </Link>
          </div>
        </>
      ),
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <DataTable columns={col} data={data} pagination />
        </div>
      </div>
    </>
  );
}

const HomeSlideShow = () => {
  const { productImage } = useSelector((state) => state.upload);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    images: "",
  });

  useEffect(() => {
    const img = [];
    productImage.flat()?.forEach((element) => {
      img.push({
        url: element,
      });
    });

    setFormData((preFormData) => ({
      ...preFormData,
      images: img,
    }));
  }, [productImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadBannerImage (formData))
  };

  return (
    <>
      <div>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 bg-white shadow rounded p-3 overflow-y-scroll">
              <h5 className="text-30px font-Poppins text-center">
                Create Banner
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-3 border ">
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      dispatch(uploadProductImageOnServer(acceptedFiles))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p className=" d-flex justify-content-center align-items-center">
                            Upload Image
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>

                <div className="d-flex flex-wrap gap-3 mb-3">
                  {Array.isArray(productImage) &&
                    productImage.length > 0 &&
                    productImage.flat().map((i, j) => {
                      return (
                        <div className="position-relative" key={j}>
                          <button
                            type="button"
                            onClick={() => dispatch( deleletProductImageonserver(i))}
                            className="btn-close position-absolute"
                            style={{ top: "10px", right: "10px" }}
                          ></button>

                          <img
                            src={`${URL.IMAGE_URL}${i}`}
                            alt="images"
                            width={500}
                            height={200}
                          />
                        </div>
                      );
                    })}
                </div>

                <button className="btn btn-primary mt-2 d-flex justify-content-end" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
