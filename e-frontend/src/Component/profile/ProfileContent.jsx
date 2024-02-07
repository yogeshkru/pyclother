import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import * as yup from "yup";
import DataTable from "react-data-table-component";



import { useFormik } from "formik";

import { MdOutlineTrackChanges } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Postenquiry } from "../../features/enquery/enqSlice";

const profileSchema = yup.object({
  user_name: yup.string(),
  user_email: yup.string(),
  user_phone: yup.number(),
});

const ProfileContent = ({ active }) => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
    },
    onSubmit: (value) => { },
  });

  return (
    <>
      <div className="w-75">
        {active === 1 && (
          <>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <img
                  src="https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg"
                  alt="user-image"
                  className="rounded-circle object-cover border mt-5"
                  width={100}
                />
                <div className="w-30 h-30 bg-secondary rounded-circle cursor-pointer position-absolute bottom-0 end-0">
                  <AiOutlineCamera />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="px-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-column pb-3">
                  <input
                    type="text"
                    className="border p-1 rounded mb-3 w-50 mx-auto"
                    placeholder="Full Name"
                    value={formik.values.user_name}
                    onBlur={formik.handleBlur("user_name")}
                    onChange={formik.handleChange("user_name")}
                  />
                  <input
                    type="text"
                    className="border p-1 rounded mb-3 w-50 mx-auto"
                    placeholder="Email"
                    value={formik.values.user_email}
                    onBlur={formik.handleBlur("user_email")}
                    onChange={formik.handleChange("user_email")}
                  />
                  <input
                    type="text"
                    className="border p-1 rounded mb-3  w-50 mx-auto"
                    placeholder="Phone"
                    value={formik.values.user_phone}
                    onBlur={formik.handleBlur("user_phone")}
                    onChange={formik.handleChange("user_phone")}
                  />
                </div>
                <button
                  type="submit"
                  className="border p-1 rounded-2 d-flex mx-auto mb-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      {active === 2 && (
        <div className="mt-5 d-flex mx-auto ">
          <AllOrders />
        </div>
      )}


      {active === 3 && (


        <Query />



      )}
    </>
  );
};

function AllOrders() {




  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Coupon",
      selector: (row) => row.coupon,
    },
    {
      name: "Expired",
      selector: (row) => row.expired,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];


  const data = [];
  // for (let id = 0; id < couponGet.length; id++) {
  //   data.push({
  //     id: id + 1,
  //     coupon: couponGet[id]?.coupon_name,
  //     expired: new Date(couponGet[id]?.coupon_expired).toLocaleDateString(),
  //     discount: couponGet[id]?.coupon_discount,

  //     action: (
  //       <>
  //         <div className="d-flex">
  //           <Link
  //             style={{ marginRight: "10px" }}
  //             className="mainlayout_icons"
  //             onClick={() => handleEdite(couponGet[id]._id)}
  //           >
  //             <FiEdit />
  //           </Link>
  //           <Link>
  //             <MdDelete
  //               fontSize={15}
  //               className="mainlayout_icons"
  //               onClick={() => handleDelete(couponGet[id]._id)}
  //             />
  //           </Link>
  //         </div>
  //       </>
  //     ),
  //   });
  // }
  return (
    (<>


      <div className="w-75">

        <DataTable columns={columns} data={data} pagination />
      </div>

    </>)
  )
}


const Query = () => {

  const dispatch = useDispatch()
  const [query,setQuery]= useState("")

     
    
  const handleSubmit=(e)=>{
    e.preventDefault()

    dispatch(Postenquiry(query))
    console.log(query)

  }
  return (
    <>

      <div className="container mt-5 d-flex align-items-center pt-5  ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} >
              <textarea
                name=""
                id=""
                style={{ height: "70px", width: "500px" }}
                className="form-control"
                rows="16"
                placeholder="Enter your query"
                onChange={(e)=>setQuery(e.target.value)}
              ></textarea>

              <div className="d-flex mx-auto">


                <button type="submit" className="btn btn-secondary mt-2">Sumbmit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProfileContent;
