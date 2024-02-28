import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { orderdetailsGets } from "../features/Order/OrderSlice";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
function Orders() {
  const [selectOption, setSelectOption] = useState("");
  const naviageta=useNavigate()
  const { ordergetallorders } = useSelector((state) => state.orderget);

  const dispatch = useDispatch();

  const handleViews=(i)=>{
    naviageta("/admin/viewuser",{state:i})
  }

  useEffect(() => {
    dispatch(orderdetailsGets());
  }, [dispatch]);

  const col = [
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
      name: "Product",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  let data = [];
  for (let i = 0; i < ordergetallorders.length; i++) {
    data.push({
      id: i + 1,
      name: ordergetallorders[i]?.order_user?.user_name,
      product: <span style={{cursor:"pointer"}} onClick={()=>handleViews(ordergetallorders[i])}>View User Product</span>,
      email: ordergetallorders[i]?.order_user?.user_email,
      action: (
        <select
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
        >
          <option value="Ordered">Ordered</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      ),
    });
  }

  return (
    <div>
      <div className="mt-2">
        <h3>Orders</h3>
        <div className="mt-4">
          <DataTable columns={col} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default Orders;
