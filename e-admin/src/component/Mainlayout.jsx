import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import men from "../assets/image/men_details.jpeg";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
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
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { RiCouponFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa6";
import { FaDisplay } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";


import { BsCalendarEventFill } from "react-icons/bs";


import { Link } from "react-router-dom";

// const items = [
//   {
//     key: "1",
//     label: <Link>Signout</Link>,
//   },
// ];

const { Header, Sider, Content } = Layout;
const Mainlayout = () => {



  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.shop)
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
            if (key === "signout") {
              localStorage.clear()
              navigate("/")
              window.location.reload()

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
              label: <span className="label-style"  style={{color:"#3e4b5b"}}>Catalog</span>,
              icon: (
                <MdShoppingCart
                  style={{ fontSize: "25px", color: "#BEABC2" }}
                />
              ),
              children: [
                {
                  key: "product-list",
                  label: "Product",
                  icon: <MdShoppingCart />,
                },

                {
                  key: "brand-list",
                  label: "Brand",
                  icon: <TbBrandBooking />,
                },

                {
                  key: "category-list",
                  label: "Category",
                  icon: <BiCategory />,
                },

                {
                  key: "color-list",
                  label: "Color",
                  icon: <IoColorFillOutline />,
                },
                {
                  key: "gst",
                  label: "Tax",
                  icon: <RiMoneyPoundCircleLine />


                }
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
              key: "events",
              label: <span className="label-style"  style={{color:"#3e4b5b"}}>Events</span>,
              icon: (
                <BsCalendarEventFill style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
              children: [
                {
                  key: "banners",
                  label: "Banners",
                  icon: (
                    <MdKeyboardDoubleArrowRight
                      style={{ fontSize: "25px", color: "#BEABC2" }}
                    />
                  ),
                },
              ],
            },
            {
              key: "payment",
              label: "Payment",
              icon: (
                <MdPayment style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
            },



            {
              key: "offers",
              label: <span className="label-style"  style={{color:"#3e4b5b"}}>Offers</span>,
              icon: (
                <BiSolidOffer style={{ fontSize: "25px", color: "#BEABC2" }} />
              ),
              children: [
                {
                  key: "coupon-list",
                  label: "Coupon",
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
              key: "policy",
              label: "Private-Policy",
              icon: (
                <MdOutlinePrivacyTip style={{ fontSize: "25px", color: "#BEABC2" }} />
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
                  {/* <Dropdown
                    menu={{
                      items,
                    }}
                  > */}
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        VcodeWonders
                        {/* <DownOutlined /> */}
                      </Space>
                    </a>
                  {/* </Dropdown> */}
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
