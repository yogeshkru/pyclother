import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "../../styles/bannercontent.css";
import * as yup from "yup";
import { useFormik } from "formik";
import UseInput from "../../useCustom/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BannerContent = ({ active }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    originalPrice: "",
    discountPrice: "",
    start_Date: "",
    Finish_date: "",
    status: "",
  });
  const dispath = useDispatch();
  const navigate = useNavigate();

  const today = new Date().toISOString().slice(0, 10);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);

    setFormData({
      ...formData,
      start_Date: startDate.toISOString().slice(0, 10),
      Finish_date: null,
    });

    document.getElementById("end_date").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
    setFormData({
      ...formData,
      Finish_date: endDate.toISOString().slice(0, 10),
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
    if (!data.start_Date) {
      errors.start_Date = "Start is required";
    }
    return errors
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
                        value={formData.start_Date}
                        className="form-control"
                      />
                      <div className="error">{errors.start_Date}</div>
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
                        value={formData.Finish_date || ""}
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
      </div>
    </>
  );
};

function ProjectTracking() {
  return (
    <>
      <div className="d-flex justify-content-center">No Data</div>
    </>
  );
}

export default BannerContent;
