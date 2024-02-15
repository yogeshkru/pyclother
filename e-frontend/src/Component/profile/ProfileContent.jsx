import React, { useEffect, useState } from "react";

import { MdOutlineEditNote } from "react-icons/md";
import {getUserProfileOnServer, userUpdates} from "../../features/usersSlice"
import DataTable from "react-data-table-component";

import { useFormik } from "formik";


import { Postenquiry } from "../../features/enquery/enqSlice";
import { useSelector,useDispatch } from "react-redux";

const ProfileContent = ({ active }) => {
  const [edite, setEdite] = useState(false);
   const dispatch=useDispatch()

   useEffect(()=>{
  
    let timeOut =setTimeout(()=>{

      dispatch(getUserProfileOnServer())
    },300)
    
    return ()=>{
      clearTimeout(timeOut)
    }
   },[])
   const {userProfile} = useSelector((data)=>data.users)

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      user_name: userProfile?.user_name,
      user_email: userProfile?.user_email,
      user_phone:userProfile?.user_phone
    },
    onSubmit: (value) => {
     dispatch(userUpdates(value))
     setEdite(true)
    },
  });
  const handleEdite = () => {
    setEdite(!edite);
  };

  return (
    <>
      <div className="w-75">
        {active === 1 && (
          <>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <div className="w-30 h-30 bg-secondary rounded-circle cursor-pointer position-absolute bottom-0 end-0">
                  {/* <AiOutlineCamera /> */}
                </div>
              </div>
            </div>
            <br />
            <br />

            <h4 className="text-center">
              Edite Profile{" "}
              <span style={{ cursor: "pointer" }} onClick={handleEdite}>
                <MdOutlineEditNote />
              </span>
            </h4>
            <div className="px-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                    disabled={!edite}
                  />
                </div>
                <div className="mb-2">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                    disabled={!edite}
                  />
                </div>
                <div className="mb-2">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_phone}
                    disabled={!edite}
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

      {active === 3 && <Query />}
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
  
  return (
    <>
      <div className="w-75">
        <DataTable columns={columns} data={data} pagination />
      </div>
    </>
  );
}

const Query = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Postenquiry(query));
  };
  return (
    <>
      <div className="container mt-5 d-flex align-items-center pt-5  ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <textarea
                name=""
                id=""
                style={{ height: "70px", width: "500px" }}
                className="form-control"
                rows="16"
                placeholder="Enter your query"
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>

              <div className="d-flex mx-auto">
                <button type="submit" className="btn btn-secondary mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileContent;
