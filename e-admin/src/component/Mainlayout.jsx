import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import men from "../assets/image/men_details.jpeg";

import { BiSolidOffer } from "react-icons/bi";
import logo from "../assets/image/logo12.png";
import logo1 from "../assets/image/928f1cc2-3799-403e-9ac5-3b9bb99765ba.jpeg";
import { Outlet } from "react-router-dom";
import "../styles/Mainlayout.css";
import { MdHome } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IoColorFillOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaCartArrowDown } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { RiCouponFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: <Link>Signout</Link>,
  },
];

const { Header, Sider, Content } = Layout;
const Mainlayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <img src={logo} width="100%" className="lg-logo" />
          <img src={logo1} width="100%" className="sm-logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signup") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              label: "Dashboard",
              icon: <MdHome style={{ fontSize: "25px", color: "#BEABC2" }} />,
            },
            {
              key: "customers",
              label: "Customers",
              icon: <FaUser style={{ fontSize: "20px", color: "#BEABC2" }} />,
            },
            {
              key: "catalog",
              label: "Catalog",
              icon: (
                <MdShoppingCart
                  style={{ fontSize: "25px", color: "#BEABC2" }}
                />
              ),
              children: [
                {
                  key: "product",
                  label: "Add Product",
                  icon: <MdShoppingCart />,
                },
                {
                  key: "product-list",
                  label: "Product List",
                  icon: <MdShoppingCart />,
                },
               
                {
                  key: "brand-list",
                  label: "Brand List",
                  icon: <TbBrandBooking />,
                },
                {
                  key: "category",
                  label: "Category",
                  icon: <BiCategory />,
                },
                {
                  key: "category-list",
                  label: "Category List",
                  icon: <BiCategory />,
                },
                {
                  key: "color",
                  label: "Color",
                  icon: <IoColorFillOutline />,
                },
                {
                  key: "color-list",
                  label: "Color List",
                  icon: <IoColorFillOutline />,
                },
              ],
            },
            {
              key: "orders",
              label: "Orders",
              icon: (
                <FaCartArrowDown
                  style={{ fontSize: "25px", color: "#BEABC2" }}
                />
              ),
            },
            {
              key: "offers",
              label: "Offers",
              icon: (
                <BiSolidOffer style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
              children: [
                {
                  key: "add-coupon",
                  label: "Add Coupon",
                  icon: <RiCouponFill />,
                },
                {
                  key: "coupon-list",
                  label: "Coupon List",
                  icon: <RiCouponFill />,
                },
              ],
            },
            {
              key: "enquiries",
              label: "Enquiries",
              icon: (
                <FaQuestion style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
            },
            {
              key: "signout",
              label: "Signout",
              icon: (
                <FaSignOutAlt style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <div className="row mainlayout_row">
          <Header
            className="d-flex justify-content-between ps-1 "
            style={{
              padding: "0px 10px",
              background: colorBgContainer,
            }}
          >
            <div className="col-lg-1">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div className="col-lg-5"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-2">
              <div className="d-flex gap-2">
                <div className="mainlayout_image1">
                  <img src={men} width="100%" className="mainlayout_image" />
                </div>
                <div className="mt-2">
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        VcodeWonders
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Header>
        </div>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
