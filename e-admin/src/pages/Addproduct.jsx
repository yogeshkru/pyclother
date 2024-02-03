import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import UseInput from "../useCustom/useInput";
import Dropzone from "react-dropzone";
import { Select } from "antd";
import URL from "../utilis/Url";
import { uploadProductImageOnServer } from "../features/uploadImages/uploadImagesSlice";
import { useDispatch, useSelector } from "react-redux";

function Addproduct() {
  const dispatch = useDispatch()
  const [desc, setdesc] = useState();
  const handleColors = (e) => {
    setdesc(e);
  };

  const{productImage} = useSelector((state)=>state.updload)
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-8">
            <div class="card">
              <div class="card-body product_input">
                <div className="row mb-3">
                  <div className="col-lg-4">
                    <label className="fw-bold fs-10">Product Name</label>
                    <UseInput type="text" label="Name" />
                  </div>
                  <div className="col-lg-4">
                    <label className="fw-bold fs-10">Product Model</label>
                    <UseInput type="text" label="Model" />
                  </div>

                  <div className="col-lg-4">
                    <label className="fw-bold fs-10">SKU</label>
                    <UseInput type="text" label="SKU" />
                  </div>
                </div>
                <div className="row mb-2  ">
                  <div className="col-lg-4">
                    <label className="fw-bold fs-10">Stack</label>
                    <UseInput type="text" label="Stack" />
                  </div>
                  <div className="col-lg-4">
                    <label className="fw-bold fs-10">Product Price</label>
                    <UseInput type="text" label="Model" />
                  </div>

                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Tax</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Brand</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Color</label>
                      <Select
              mode="multiple"
              allowClear
              className="w-100"
              placeholder="Select colors"
              // defaultValue={color}
              onChange={(i) => handleColors(i)}
              // options={colorsWidget}
            />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Category</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Reward Point</label>
                      <UseInput type="text" label="Reward Point" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Status</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="">
                      <label className="fw-bold fs-10">Sort</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-2">
                  <label className="fw-bold fs-10">Description</label>
                  <UseInput type="text" label="Description" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card p-4">
              <div class="card-body">
                <Dropzone
                  onDrop={(acceptedFiles) =>
                    dispatch(uploadProductImageOnServer(acceptedFiles))
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="text-center">Upload Image</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>

              <div className="showimages d-flex flex-wrap gap-3">
              {Array.isArray(productImage) &&
                productImage.length > 0 &&
                productImage?.map((i, j) => {
                  return (
                    <div className="position-relative" key={j}>
                      <button
                        type="button"
                        // onClick={() => dispatch(deleteImg(i?.public_id))}
                        className="btn-close position-absolute"
                        style={{ top: "10px", right: "10px" }}
                      ></button>
                      <img src={`${URL.IMAGE_URL}/${i}`} alt="images" width={200} height={200} />

                    </div>
                  );
                })}
            </div>

              <div className="">
                <label className="fw-bold fs-10">Sort</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div class="card mt-2">
              <div class="card-body product_input">
                <div className="">
                  <h4>Dimension</h4>
                </div>

                <div className="row mb-1">
                  <div className="col-lg-6">
                    <label className="fw-bold fs-10">Length</label>
                    <UseInput type="text" label="Length" />
                  </div>
                  <div className="col-lg-6">
                    <label className="fw-bold fs-10">Weight</label>
                    <UseInput type="text" label="Weight" />
                  </div>
                </div>
                <div className="mt-3 mb-2">
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Height</label>
                      <UseInput type="text" label="Length" />
                    </div>
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Dimension class</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-2">
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Weight</label>
                      <UseInput type="text" label="Length" />
                    </div>
                    <div className="col-lg-6">
                      <label className="fw-bold fs-10">Weight class</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>






          </div>
          <div className="col-lg-4 ">
            
          <div class="card mt-2">
              <div class="card-body  product_input" style={{padding:" 23px 12px"}}>
                <div className="">
                  <h4>SEO</h4>
                </div>
                <div className="mb-2">
                  <label className="fw-bold fs-10">Meta Title </label>
                  <UseInput type="text" label="Meta Title" />
                </div>
                <div className="mb-2">
                  <label className="fw-bold fs-10">Meta Description </label>
                  <UseInput type="text" label="Meta Description" />
                </div>
                <div className="mb-2">
                  <label className="fw-bold fs-10">Meta Keyword </label>
                  <UseInput type="text" label="Meta Keyword" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
