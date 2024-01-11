import React from "react";

function Addcolor() {
  return (
    <div className="mt-2">
        <h3>Add Color</h3>
      <div class="form-floating mt-3">
        <input
          type="color"
          class="form-control"
          id="floatingInput"
          placeholder="Color"
        />
        <label for="floatingInput" style={{fontWeight:'500'}}>Color</label>
      </div>
      <div className="mt-5">
       <button className="btn addcolor_btn">Add Color</button>
      </div>
    </div>
  );
}

export default Addcolor;
