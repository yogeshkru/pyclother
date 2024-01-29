import React from "react";
import { Button, Table } from "antd";
import "../styles/Mainlayout.css";
import { useNavigate} from "react-router-dom"
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
function Categorylist() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/admin/category')
  }
  return (
    <div>
      <div className="mt-2">
      <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">Category List</div>
          <div className="col-lg-4">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-4 text-end ">
            <button type="submit" className="brand-button_padding" onClick={handleClick}>Add Category</button>
          </div>
        </div>
        <div className="mt-4">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Categorylist;
