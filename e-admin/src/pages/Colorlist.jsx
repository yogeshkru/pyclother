import React from "react";
import { Button, Table } from "antd";
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
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
function Colorlist() {
  return (
    <div>
      <div className="mt-2">
        <h3>Colors</h3>
        <div className="mt-4">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Colorlist;
