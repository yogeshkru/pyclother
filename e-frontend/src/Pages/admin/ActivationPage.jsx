import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const dipatch = useDispatch();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </>
  );
};

export default ActivationPage;
