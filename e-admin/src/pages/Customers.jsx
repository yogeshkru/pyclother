import React,{useEffect} from "react";

import {getUserFromServer} from "../features/SuperAdmin/superAdminSlice";
import {useDispatch, useSelector} from "react-redux";
import DataTable from "react-data-table-component";

function Customers() {
  const dispatch=useDispatch()
  const {getAllUser}=useSelector((state)=>state.superadmin)


  useEffect(()=>{
    dispatch(getUserFromServer())
  },[dispatch])

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone_number,
    },
    {
      name: "Craeted Time",
      selector: (row) => row.createdAt,
    },
    
  
    
  ];
  const data=[]
  for(let i=0;i<getAllUser.length;i++){
    data.push({
      id:i+1,
      name:getAllUser[i]?.user_name,
      email:getAllUser[i]?.user_email,
      phone_number:getAllUser[i]?.user_phone,
      createdAt:getAllUser[i]?.createdAt

    })
  }

  return (
    <div>
      <div className="mt-2">
        <h3>Customers</h3>
        <div className="mt-4">
        <DataTable columns={columns} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default Customers;
