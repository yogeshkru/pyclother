import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Getone, Getenquirys } from "../features/Enquiry/enquirySlice";

import { BiArrowBack } from "react-icons/bi";
const ViewEnq = () => {
  const location = useLocation();
  const getEnq = location.pathname.split("/")[3];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { GetAllenquirys } = useSelector((state) => state?.enquiry);

  console.log(GetAllenquirys);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(Getenquirys());
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);

  const goBack = () => {
    navigate(-1);
  };
  const findData = GetAllenquirys?.find((data) => data._id === getEnq);

  return (
    <>
      <div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4" style={{color:"#beabc2"}}>View Enquiry</h3>
            <button
              className="bg-transparent border-0 d-flex align-items-center"
              onClick={goBack}
            >
              <BiArrowBack className="fs-5 mb-0" />
              Go Back
            </button>
          </div>

          <div className="mt-5 bg-white p-4 rounded-3">
            <div className="mb-3">
              <h5 className="mb-0" style={{color:"#beabc2"}}>Name :</h5>
              <p className="mb-0">{findData?.enquiry_name}</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-0" style={{color:"#beabc2"}}>Mobile :</h5>
              <p className="mb-0">{findData?.enquiry_mobile}</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-0" style={{color:"#beabc2"}}>Email :</h5>
              <a href={`mailto:${findData?.enquiry_email}`} className="mb-0">{findData?.enquiry_email}</a>

            </div>

            <div className="mb-3">
              <h5 className="mb-0" style={{color:"#beabc2"}}>Comment :</h5>
              <p className="mb-0">{findData?.enquiry_comment}</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-0" style={{color:"#beabc2"}}>Status :</h5>
              <p className="mb-0">{findData?.enquiry_status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEnq;
