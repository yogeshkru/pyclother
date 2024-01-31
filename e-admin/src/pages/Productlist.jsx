import React from "react";
import { Button, Table } from "antd";
import "../styles/Mainlayout.css";
import { useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter:(a,b)=>a.brand.localeCompare(b.brand)
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter:(a,b)=>a.category.localeCompare(b.category)
  },
  {
    title: "Color",
    dataIndex: "color",
    sorter:(a,b)=>a.color.localeCompare(b.color)
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter:(a,b)=>a.price.localeCompare(b.price)
  },
  {
    title: "Action",
    dataIndex: "action",
   
  },
 
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    title:`${i}`,
    brand: `${i}`,
    product: 32,
    color:`${i}`,
    price:`${i}`, 
    category: `London, Park Lane no. ${i}`,
    action:(
      <>
      <Link to="/admin/product" style={{marginRight:"10px"}}><FiEdit  className="mainlayout_icons"/></Link>
      <Link><MdDelete fontSize={15} className="mainlayout_icons"/></Link>
      </>
    )
  });
}
function Productlist() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/admin/product')
  }
  return (
    <div>
      <div className="mt-2">
      <div className="row">
          <div className="col-lg-4 fs-4 fw-bold">Product</div>
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
            <button type="submit" className="brand-button_padding" onClick={handleClick}>Add Product </button>
          </div>
        </div>
        <div className="mt-4">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Productlist;
