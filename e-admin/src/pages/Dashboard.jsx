import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { Button, Table } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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

function Dashboard() {
  const items = [
    {
      key: "1",
      label: <a>1st menu item</a>,
    },
    {
      key: "2",
      label: <a>2nd menu item</a>,
    },
  ];

  
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <h3>Dashboard</h3>
        </div>
        <div className="col-lg-4 fs-4">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Branch
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="col-lg-4 fs-4">
        <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Management
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-lg-4 mb-2">
            <div className="Dashboard_background">
              <div className="row">
                <div className="col-lg-6 col-3">
                  <p>Total orders</p>
                  <h3 className="mainlayout_price">$2899.50</h3>
                </div>

                <div className="col-lg-6 col-9">
                  <div className="d-flex justify-content-end">
                    <CiMenuKebab style={{ fontSize: "15px" }} />
                  </div>
                  <div className="mt-2 d-flex justify-content-end">
                    <span style={{ fontWeight: "500", color: "green" }}>
                      <GoArrowUpRight style={{ fontSize: "15px" }} />
                      38.7%
                    </span>
                  </div>
                  <div className="mt-2  d-flex justify-content-end">
                    <span className="mainlayout_compared">
                      Compared to April 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-2">
            <div className="Dashboard_background Dashboard_background1">
              <div className="row">
                <div className="col-lg-6 col-3">
                  <p>Total orders</p>
                  <h3 className="mainlayout_price">$257.00</h3>
                </div>

                <div className="col-lg-6 col-9">
                  <div className="d-flex justify-content-end">
                    <CiMenuKebab style={{ fontSize: "15px" }} />
                  </div>
                  <div className="mt-2 d-flex justify-content-end">
                    <span style={{ fontWeight: "500", color: "red" }}>
                      <GoArrowDownLeft style={{ fontSize: "15px" }} />
                      20.7%
                    </span>
                  </div>
                  <div className="mt-2  d-flex justify-content-end">
                    <span className="mainlayout_compared">
                      Compared to April 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="Dashboard_background  Dashboard_background2">
              <div className="row">
                <div className="col-lg-6 col-3">
                  <p>Total orders</p>
                  <h3 className="mainlayout_price">587</h3>
                </div>

                <div className="col-lg-6 col-9">
                  <div className="d-flex justify-content-end">
                    <CiMenuKebab style={{ fontSize: "15px" }} />
                  </div>
                  <div className="mt-2 d-flex justify-content-end">
                    <span style={{ fontWeight: "500", color: "green" }}>
                      <GoArrowUpRight style={{ fontSize: "15px" }} />
                      38.7%
                    </span>
                  </div>
                  <div className="mt-2  d-flex justify-content-end">
                    <span className="mainlayout_compared">
                      Compared to April 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3>Income Statics</h3>

        <div className="mt-4">
          <BarChart width={900} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#B66DFF" />
            <Bar dataKey="uv" fill="#3FD8C0" />
          </BarChart>
        </div>
      </div>
      <div className="mt-4">
        <h3>Order lists</h3>
        <div className="mt-3">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
