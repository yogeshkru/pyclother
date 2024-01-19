import React, { useState } from "react";
import axios from 'axios'

function Addcolor() {

  const [color, setColor] = useState('');


  const handlechange = (e) => {

    setColor(e.target.value);
  }

  //   const handleSubmit =async (e) => {
  //     e.preventDefault();


  //  try{
  //   const response=await axios.post(`http://localhost:1509/api/color/colors`,{color})
  //   .then((response)=>{
  // console.log(response);
  //   })
  //  }catch(error){
  //   console.log(error);
  //  }
  //   }

  return (
    <div className="mt-2">
      <h3>Add Color</h3>
      <div className="form-floating mt-3">
        <input
          type="color"
          className="form-control"
          id="floatingInput"
          placeholder="Color"
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="floatingInput" style={{ fontWeight: '500' }}>Color</label>
      </div>
      <div className="mt-5">
        <button className="btn addcolor_btn" onClick={(e) => handleSubmit(e)}>Add Color</button>
      </div>
    </div>
  );
}

export default Addcolor;
