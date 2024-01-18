import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
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
    <div className="mt-2">
      <h3>Add Product</h3>
      <div className="form-floating mt-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Color"
        />
        <label for="floatingInput" style={{ fontWeight: "500" }}>
          Enter Brand
        </label>
      </div>
      <div className="mt-3">
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-floating mt-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Price"
        />
        <label for="floatingInput" style={{ fontWeight: "500" }}>
          Enter Price
        </label>
      </div>

      <div class="form-floating mt-3">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Select Brands</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Brands</label>
      </div>
      <div class="form-floating mt-3">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Select Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Category</label>
      </div>
      <div class="form-floating mt-3">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Select Color</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Color</label>
      </div>
      <div className="mt-3">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click file to this area to upload
          </p>
          <p className="ant-upload-hint">
           
          </p>
        </Dragger>
      </div>
      <div className="mt-5">
        <button className="btn addcolor_btn">Add Brand</button>
      </div>
    </div>
  );
}

export default Addproduct;
