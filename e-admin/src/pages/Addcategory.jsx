import React from "react";

function Addcategory() {
  return (
    <div className="mt-2">
        <h3>Add Category</h3>
      <div class="form-floating mt-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Color"
        />
        <label for="floatingInput" style={{fontWeight:'500'}}>Enter Blog Category</label>
      </div>
      <div className="mt-5">
       <button className="btn addcolor_btn">Add Category</button>
      </div>
    </div>
  );
}

export default Addcategory;
