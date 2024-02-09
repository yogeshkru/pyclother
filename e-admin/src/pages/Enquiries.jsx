import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { AiFillDelete, AiOutlineEye } from "react-icons/ai";

import {
  Getone,
  Getenquirys,
  DeleteEnquiry,
  Patchenquiry,
  Postenquiry,
} from "../features/Enquiry/enquirySlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  { title: "Status", dataIndex: "status" },
  { title: "Action", dataIndex: "action" },
];

function Enquiries() {
  const data1 = [];

  const dispatch = useDispatch();
  const { GetAllenquirys } = useSelector((state) => state?.enquiry);

  const deteQuery =(i)=>{
    dispatch(DeleteEnquiry(i))
  } 

  const setEnquiryStatus=(e,id)=>{
    const data = {id:id,enqData:e}
    dispatch(Patchenquiry(data))
  }

  useEffect(()=>{
  const timeOut= setTimeout(()=>{
    dispatch(Getenquirys())
  },500)


  return()=>{
    clearTimeout(timeOut)
  }
  },[dispatch])
  for (let i = 0; i < GetAllenquirys?.length; i++) {
    data1.push({
      key: i + 1,
      name: GetAllenquirys[i]?.user_id?.user_name,
      email: (
        <a href={`mailto:${GetAllenquirys[i]?.user_id?.user_email}`}>
          {GetAllenquirys[i]?.user_id?.user_email}
        </a>
      ),
      mobile: GetAllenquirys[i]?.user_id?.user_phone,
      date: new Date(GetAllenquirys[i]?.createdAt).toLocaleDateString(),
      status: (
        <>
          <select
            name=""
            id=""
            defaultValue={
              GetAllenquirys[i]?.enquiry_status
                ? GetAllenquirys[i]?.enquiry_status
                : "Submitted"
            }
            className="form-control form-select"
            onChange={(e) =>
              setEnquiryStatus(e.target.value, GetAllenquirys[i]?._id)
            }
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link
            className="ms-3 fs-3 text-danger"
            to={`/admin/enquiries/${GetAllenquirys[i]?._id}`}
          >
            <AiOutlineEye />
          </Link>

          <button className="ms-3 fs-3 text-danger bg-transparent border-0" onClick={()=>deteQuery(GetAllenquirys[i]?._id)}>
            <AiFillDelete/>
          </button>
        </>
      ),
    });
  }
  return (
    <div>
      <div className="mt-2">
        <h3>Enquiries</h3>
        <div className="mt-4">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
