import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/image/logo12.png";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import HeadRoom from "react-headroom";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiSolidStore } from "react-icons/bi";

import "../styles/Home.css";
import { getAllProduct } from "../features/product/productSlice";
import URL from "../../../e-admin/src/utilis/Url";
import {
  wishListGetData,
  getUserProfileOnServer,
} from "../features/usersSlice";
import { useNavigate } from "react-router-dom";

function Header() {
 
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { wholeProduct } = useSelector((state) => state.product);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const navigate = useNavigate();
  const handleFont = {
    fontWeight: "bold",
    color: "#343434",
  };
  const openNav = () => {
    setSidenavWidth(250);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

  const dispatch = useDispatch();

  // *********************Search funtionality***********************

  const { Whislistget, userCartProduct } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSeachData] = useState(null);
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(wishListGetData());
    dispatch(getUserProfileOnServer());
  }, [dispatch]);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("user"));
    if (localUsers && localUsers.token !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);
  

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      wholeProduct &&
      wholeProduct?.filter((product) => {
        return product?.name.toLowerCase().includes(term.toLowerCase());
      });

    const firstTenFilteredProducts = filteredProducts.slice(0, 5);

    setSeachData(firstTenFilteredProducts);
    
  };
  

  // ****************************************************

  // *******************

  const handleClick = () => {
    navigate("/Whislist");
  };
  const handleStore = () => {
    navigate("/ourstore");
  };

  const handleImage = () => {
    navigate("/");
  };
  const handleBag = () => {
    navigate("/stepper");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {isMobile ? (
        <div className="header_padding">
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <img src={logo} width="100%" />
            </div>
            <div>
              <PiHandbagBold fontSize={20} />
              <p>Bag</p>
            </div>
            <div
              id="mySidenav"
              className="header__sidenav"
              style={{ width: `${sidenavWidth}px` }}
            >
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={closeNav}
              >
                &times;
              </a>

              <div class="dropdown">
                <button
                  className="btn header__mobile--mens mb-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mens
                </button>
                <ul
                  className="dropdown-menu header_mobile_menu "
                  aria-labelledby="dropdownMenuButton1"
                ></ul>
              </div>

              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>

            <div className="text-center">
              <FaRegHeart fontSize={20} />

              <p>Wishlist</p>
            </div>

            <div onClick={openNav} className="text-center">
              <Link to="/profile">
                <FaRegUser fontSize={20} />
                Profile
              </Link>
            </div>
          </div>
          <div>
            <div className="text-center header--search" >
              <input
                type="search"
                autoComplete="off"
                className="header__input--search"
                placeholder="Search for Products, brands and more "
              />

              <div className="header__icon">
                <IoMdSearch />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <HeadRoom>
          {/* <header> */}

          <div className="header_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="header_logo" onClick={handleImage}>
                    <img
                      src={logo}
                      width="100%"
                      onClick={() => navigate("/")}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
             
                </div>
                <div className="col-lg-4">
                  <div className="text-center header--search" >
                    <input
                      type="search"
                      autoComplete="off"
                      className="header__input--search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search for Products, brands and more "
                    />

                    <div className="header__icon">
                      <IoMdSearch />
                    </div>
                 
                    {searchData && searchData.length !== 0 ? (
                      <div
                        className="position-absolute min-h-30vh bg-white shadow-sm-2 p-4  w-100 rounded-4 mouseOutDta"
                      
                        style={{ zIndex: 999 }}
                      >
                        {searchData &&
                          searchData.map((item, index) => {
                            const productName = item?.category?.replace(
                              /\s+/g,
                              "-"
                            );

                            return (
                              <Link
                                to={`singleProduct/${productName}/${item?._id}`}
                                key={index}
                                className="text-decoration-none"
                               
                              >
                                <div className="d-flex py-3 justify-conten-between">
                                  <div>
                                    <img
                                      src={`${URL.IMAGE_URL}${item?.images}`}
                                      alt={item?.name}
                                      style={{
                                        height: "30px",
                                        width: "40px",
                                        color: "#777777",
                                      }}
                                    />
                                  </div>

                                  <div>
                                    <h1
                                      className="ms-3"
                                      style={{
                                        fontSize: "14px",
                                        color: "#777777",
                                      }}
                                    >
                                      {item?.name}
                                    </h1>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-1 mt-1 ">
                  <div className="d-flex justify-content-between">
                    {isLoggedIn ? (
                      <div
                        className="d-flex flex-column text-center "
                        onClick={handleProfile}
                        style={{ cursor: "pointer" }}
                      >
                        <FaRegUser
                          style={{
                            marginLeft: "10px",
                            fontSize: "20px",
                            color: "#343434",
                          }}
                        />

                        <span style={handleFont}>Profile</span>
                      </div>
                    ) : (
                      <div
                        className="d-flex flex-column text-center "
                        onClick={handleLogin}
                        style={{ cursor: "pointer" }}
                      >
                        <FaRegUser
                          style={{
                            marginLeft: "10px",
                            fontSize: "20px",
                            color: "#343434",
                          }}
                        />

                        <span style={handleFont}>Login</span>
                      </div>
                    )}
                    <div className="Header--wishlist">
                      <div
                        className="d-flex flex-column text-center ms-4"
                        onClick={handleStore}
                        style={{ cursor: "pointer" }}
                      >
                        <BiSolidStore
                          style={{ marginLeft: "10px", fontSize: "20px" }}
                        />

                      

                        <span style={handleFont}>Shop </span>
                      </div>
                    </div>

                   

                    <div className="Header--wishlist">
                      <div
                        className="d-flex flex-column text-center ms-4"
                        onClick={handleClick}
                        style={{ cursor: "pointer" }}
                      >
                        <FaRegHeart
                          style={{ marginLeft: "10px", fontSize: "20px" }}
                        />

                        <div
                          className={
                            Whislistget?.length > 0 ? "Header--wishlist1" : ""
                          }
                        >
                          {Whislistget?.length > 0 ? Whislistget.length : ""}
                        </div>

                        <span style={handleFont}>Wishlist</span>
                      </div>
                    </div>

                    <div className="Header--wishlist">
                      <div
                        className="d-flex flex-column text-center ms-4"
                        onClick={handleBag}
                        style={{ cursor: "pointer" }}
                      >
                        <PiHandbagBold
                          style={{ marginLeft: "10px", fontSize: "20px" }}
                        />

                        <div
                          className={
                            userCartProduct.length > 0
                              ? "Header--wishlist1"
                              : ""
                          }
                        >
                          {userCartProduct.length > 0
                            ? userCartProduct.length
                            : ""}
                        </div>

                        <span className="text-center fw-bold ps-1">Bag</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </header> */}
        </HeadRoom>
      )}
    </div>
  );
}

export default Header;
