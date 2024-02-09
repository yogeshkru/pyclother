import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import logo from "../assets/image/logo12.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { usersSignup } from "../features/usersSlice";
import { useNavigate } from "react-router-dom";
function Signup() {
  // *************************************************************
  const dispatch = useDispatch();
  const { createUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  useEffect(() => {
    if (createUser !== "") {
      navigate("/");
    }
  }, []);

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        user_name: "",
        user_phone: "",
        user_email: "",
        user_password: "",
      },
      validationSchema: Yup.object({
        user_phone: Yup.string()
          .matches(/^\d{10}$/, "Must be exactly 10 digits")
          .required("Mobile Number is required"),
        user_name: Yup.string()
          .matches(
            /^[A-Z][a-z]*$/,
            "Name must start with a capital letter and be followed by lowercase letters"
          )
          .required("Name is required"),
        user_email: Yup.string()
          .required("Email is required")
          .matches(
            /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Invalid email address"
          ),
        user_password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol")
          .required("Please enter new password"),
      }),
      onSubmit: (value) => {
        dispatch(usersSignup(value));
      },
    });
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="otp_background">
        <div className="row otp_page_scroll justify-content-center">
          <div className="col-lg-4  col-sm-12 col-md-7 pt-1">
            <div className="otp_box">
              <div className="otp_font_welcome">
                <h3>Welcome</h3>
                <h3>to</h3>
                <div className="otp_welcome_img">
                  <img src={logo} width="100%" />
                </div>
              </div>
              <div className="login_font_padding">
                <p>Sign Up</p>
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="login_input1">
                    <input
                      type="text"
                      className={`login_input ${
                        errors.user_name && touched.user_name
                          ? "login_error1"
                          : ""
                      } ${
                        touched.user_name && !errors.user_name
                          ? "login_success_1"
                          : ""
                      }`}
                      placeholder="Name"
                      name="user_name"
                      value={values.user_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    <div className="login_label_2">
                      <label className="fs-4">
                        <FaRegUserCircle />
                      </label>
                    </div>
                  </div>
                  {touched.user_name && errors.user_name ? (
                    <div style={{ color: "red" }}>{errors.user_name}</div>
                  ) : (
                    ""
                  )}

                  <div className="login_input1">
                    <input
                      type="text"
                      className={`login_input ${
                        errors.user_email && touched.user_email
                          ? "login_error1"
                          : ""
                      } ${
                        touched.user_email && !errors.user_email
                          ? "login_success_1"
                          : ""
                      }`}
                      placeholder="Email"
                      name="user_email"
                      value={values.user_email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    <div className="login_label_2">
                      <label className="fs-4">
                        <MdOutlineMailOutline />
                      </label>
                    </div>
                  </div>
                  {touched.user_email && errors.user_email ? (
                    <div style={{ color: "red" }}>{errors.user_email}</div>
                  ) : (
                    ""
                  )}
                  <div className="login_input1">
                    <input
                      type="number"
                      className={`login_input ${
                        touched.user_phone && errors.user_phone
                          ? "login_error1"
                          : ""
                      } ${
                        touched.user_phone && !errors.user_phone
                          ? "login_success_1"
                          : ""
                      }`}
                      placeholder="Mobile Number"
                      name="user_phone"
                      maxlength="10"
                      value={values.user_phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    <div className="login_label_1">
                      <label className="login_label">+91</label>
                    </div>
                  </div>
                  {touched.user_phone && errors.user_phone ? (
                    <div style={{ color: "red" }}>{errors.user_phone}</div>
                  ) : (
                    ""
                  )}

                  <div className="login_input1">
                    <input
                      type={show ? "password" : "text"}
                      className={`login_input ${
                        touched.user_password && errors.user_password
                          ? "login_error1"
                          : ""
                      } ${
                        touched.user_password && !errors.user_password
                          ? "login_success_1"
                          : ""
                      }`}
                      placeholder="Password"
                      name="user_password"
                      value={values.user_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    <div className="login_label_2">
                      <label className="fs-4">
                        <RiLockPasswordLine />
                      </label>
                    </div>
                    <div className="login_label_3">
                      <label className="fs-4" onClick={handleShow}>
                        {show ? <FaRegEyeSlash /> : <IoEyeOutline />}
                      </label>
                    </div>
                  </div>
                  {touched.user_password && errors.user_password ? (
                    <div style={{ color: "red" }}>{errors.user_password}</div>
                  ) : (
                    ""
                  )}

                  <div className="mt-4">
                    <p className="login_size">
                      By continuing. I agree to the{" "}
                      <span className="login_color">Terms of use</span> &{" "}
                      <span className="login_color">Privacy policy</span>
                    </p>
                  </div>
                  <div className="mt-5">
                    <button className="login_button" type="submit">
                      Continue
                    </button>
                  </div>
                </form>

                <div className="mt-4">
                  <p className="login_size">
                    Having trouble while logging in{" "}
                    <span className="login_color">Get Help</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Loadersdesign = () => {
  return (
    <>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          a blanditiis velit, nam veritatis eaque corporis quisquam vitae qui?
          Sequi, distinctio hic explicabo rem ullam nemo nesciunt ipsam, sed
          iste architecto soluta laborum eum excepturi ex reiciendis? Distinctio
          odio tempora laborum itaque esse quasi dicta ratione aperiam illo
          maiores deleniti possimus dignissimos soluta placeat quae suscipit
          quas eveniet vel, accusamus eius. Asperiores sint facilis enim quos
          reiciendis, nesciunt alias repudiandae odit porro aut necessitatibus
          quidem eligendi accusamus eum omnis exercitationem nulla est fugit.
          Delectus laborum architecto libero dolores molestias fugiat, sint
          eaque officia at commodi porro repellat eum, consequatur vitae. Maxime
          dicta amet nisi, laborum facilis illo consequatur! Provident sequi
          dicta tempora illum repellat, officia asperiores ex at in beatae ipsum
          explicabo natus minus facere corporis atque veritatis quasi. Amet
          sapiente maxime necessitatibus illo officia natus impedit quod
          placeat, a nulla fuga in iusto, aliquam aliquid at corrupti quaerat
          nihil omnis assumenda blanditiis deleniti itaque nam expedita.
          Expedita quisquam consequatur esse ipsum illo! Magni quasi repellendus
          necessitatibus soluta beatae asperiores! Debitis, at! Molestiae itaque
          natus eos veniam id dolorum corporis voluptates est eaque! Itaque in
          amet nihil rerum. Accusamus quo quisquam quidem modi fugiat! Aliquam
          voluptatibus ullam ad earum officia? Accusantium nesciunt quos
          voluptatum dolorum, laudantium reiciendis fugit sequi beatae, itaque
          magni dignissimos iste consectetur nobis inventore nostrum
          necessitatibus alias incidunt nemo voluptatibus illo ullam. Delectus
          dignissimos eveniet a iure eos, iste facere corrupti sed recusandae
          nesciunt. Aliquam, id temporibus eveniet eum molestias eaque modi
          incidunt aperiam unde odit nam consequuntur tempore labore ab, esse
          natus consectetur? Optio nam veniam exercitationem rerum aut tempora
          necessitatibus adipisci magni neque quia deleniti accusamus impedit
          nostrum reiciendis minima nisi vitae eius voluptatem, placeat
          veritatis unde aliquam, rem enim est. Molestias deleniti dignissimos
          autem officiis eos totam sapiente, sunt omnis? Earum sed quos aliquid
          fuga architecto molestiae facere recusandae tenetur ut corrupti esse
          facilis, omnis natus praesentium, laboriosam similique doloribus
          itaque? In, odio dolore officiis dolorum deserunt voluptatem ducimus,
          porro veniam quaerat beatae tenetur consectetur perspiciatis ipsum eos
          mollitia nostrum sed asperiores debitis recusandae id molestias minus?
          Ad maiores est iusto quia animi similique et cum sunt eum explicabo
          magni maxime laudantium amet, repellendus aliquid pariatur aperiam
          ipsa magnam ea laborum! Omnis eaque libero quod ipsam voluptate
          dolorum quasi perspiciatis natus animi, laborum ullam culpa minima
          exercitationem debitis, non earum ad error cupiditate et minus
          dolorem! Odit voluptatum beatae repellendus laudantium minus ducimus
          provident.
        </p>
      </div>
    </>
  );
};
export default Signup;
