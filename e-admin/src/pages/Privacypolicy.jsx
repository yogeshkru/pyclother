import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../styles/Mainlayout.css";
import "react-quill/dist/quill.snow.css";
import {privacy} from "../features/Privacypolicy/Privarypolicyslice";
import { useDispatch } from "react-redux";
function Privacypolicy() {
    const dispatch=useDispatch()
  const [value, setValue] = useState("");
  
  let privacyPolicy={privary_policy:value}
 
  const handleSubmit=(e)=>{
    e.preventDefault()
     dispatch(privacy(privacyPolicy))
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
        <button type="submit"   className="brand_padding--border">Submit</button>
      </form>
    </div>
  );
}

export default Privacypolicy;
