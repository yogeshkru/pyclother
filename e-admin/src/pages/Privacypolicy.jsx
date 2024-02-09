import React, { useState } from "react";

import "../styles/Mainlayout.css";

import { privacy } from "../features/Privacypolicy/Privarypolicyslice";
import { useDispatch } from "react-redux";
function Privacypolicy() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  let privacyPolicy = { privary_policy: value };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(privacy(privacyPolicy));
    setValue("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="brand_padding--border">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Privacypolicy;
