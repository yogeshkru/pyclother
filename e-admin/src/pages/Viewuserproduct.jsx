import React from "react";
import { useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";
function Viewuserproduct() {
  const { state } = useLocation();
  let details = [state];
  console.log(details)

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Product Model",
      selector: (row) => row.model,
    },
    {
      name: "Product Price",
      selector: (row) => row.price,
    },
    {
      name: "Totalprice",
      selector: (row) => row.totalprice,
    },
    {
      name: "Totaldiscount",
      selector: (row) => row.totaldiscount,
    },
    {
      name: "Size",
      selector: (row) => row.userSize,
    }
   
  ];
  const data = [];
  for (let id = 0; id < details?.length; id++) {
    data.push({
      id: id + 1,
      name: details[id]?.cartItem[0]?.name,
      model: details[id]?.cartItem[0]?.model,
      price:details[id]?.cartItem[0]?.price,
      totalprice:details[id]?.order_totalPrice,
      totaldiscount:details[id]?.order_total_Discount,
      userSize:details[id]?.cartItem[0]?.userSize
    });
  }
  return (
    <div>
      <div>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
}

export default Viewuserproduct;
