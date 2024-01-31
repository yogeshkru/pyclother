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
        <div className="text-center">
          <h3>Product Details</h3>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <form>
                <div className="mt-3 mb-2">
                <UseInput type="text"  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
