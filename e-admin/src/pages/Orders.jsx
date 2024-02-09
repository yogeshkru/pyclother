import React from "react";
import DataTable from "react-data-table-component";

function Orders() {


  const columns = [
    {
      title: "SNo",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <select>
          <option>select order</option>
        </select>
      ),
    },
  ];
  
 const data=[]
 for(let i=0;i<data.length;i++){
  
 }
  return (
    <div>
      <div className="mt-2">
        <h3>Orders</h3>
        <div className="mt-4">
        <DataTable columns={columns} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default Orders;
