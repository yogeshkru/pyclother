import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import UseInput from "../useCustom/useInput";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
function Addproduct() {
  const [desc, setdesc] = useState();
  const handleChange = (e) => {
    setdesc(e);
  };

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

                <div className="mt-3 mb-2">
                  <label className="fw-bold fs-10">Image</label>
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

          <div className="col-lg-4">
            <div class="card">
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

            <div class="card mt-1">
              <div class="card-body  product_input">
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
