import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo12.png";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import HeadRoom from "react-headroom";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { getAllProduct } from "../features/product/productSlice";
function Header() {
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const handleFont = {
    fontWeight: "bold",
  };
  const openNav = () => {
    setSidenavWidth(250);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

  const dispatch = useDispatch();

  // ************************************************
  const { wholeProduct } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSeachData] = useState(null);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      wholeProduct &&
      wholeProduct?.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });

    setSeachData(filteredProducts);
  };

  // ****************************************************

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
              <FaRegUser fontSize={20} />
              <p className="text-center">Profile</p>
            </div>
          </div>
          <div>
            <div className="text-center header--search">
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
          <div className="header_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="header_logo">
                    <img src={logo} width="100%" />
                  </div>
                </div>
                <div className="col-lg-3  ">
                  <div className="d-flex justify-content-between">
                    {/* Mens */}
                    <div className="dropdown mb-0">
                      <button
                        className="btn header__button1 mb-0"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mens
                      </button>

                      <ul
                        class="dropdown-menu Headers__menus"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="row d-flex justify-content-">
                          <div className="col-lg-3">
                            <h5
                              style={{
                                fontWeight: "bold",
                                color: "#56DDFF",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Top Wear
                            </h5>
                            <li className="mt-2 dropdown-item">T-Shirts</li>
                            <li className="dropdown-item">Casual Shirts</li>
                            <li className="dropdown-item">Formal Shirts</li>
                            <li className="dropdown-item">Sweat Shirts</li>
                            <li className="dropdown-item">Sweaters</li>
                            <li className="dropdown-item">Jackets</li>
                            <li className="dropdown-item">Blazers & Coats</li>
                            <li className="dropdown-item">Suits</li>
                            <li className="dropdown-item">Rain Jackets</li>
                          </div>
                          <div className="col-lg-3">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#56DDFF",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Bottom Wear
                            </li>
                            <li className="mt-2 dropdown-item">Jeans</li>
                            <li className="dropdown-item">Casual Trousers</li>
                            <li className="dropdown-item">Formal Trousers</li>
                            <li className="dropdown-item">Shorts</li>
                            <li className="dropdown-item">Track Pants</li>
                            <li className="dropdown-item">Joggers</li>
                          </div>
                          <div className="col-lg-3">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#56DDFF",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Traditional wear
                            </li>
                            <li className="mt-2 dropdown-item">
                              Kurtas & Kurta Set
                            </li>
                            <li className="dropdown-item">Sherwains</li>
                            <li className="dropdown-item">Nehru Jackets</li>
                            <li className="dropdown-item">Dhotis</li>
                          </div>
                          <div className="col-lg-3">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#56DDFF",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Inner Wear & Sleep Wear
                            </li>
                            <li className="mt-2 dropdown-item ">
                              Briefs & Trunks
                            </li>
                            <li className="dropdown-item">Boxers</li>
                            <li className="dropdown-item">Vests</li>
                            <li className="dropdown-item">
                              Sleep Wear & Lounge Wear
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                    {/* Womens */}
                    <div class="dropdown">
                      <button
                        class="btn header__button2"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        Womens
                      </button>

                      <ul
                        class="dropdown-menu header__Womens Headers__menus"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="row">
                          <div className="col-lg-4">
                            <h5
                              style={{
                                fontWeight: "bold",
                                color: "#FCB03F",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Indian & Fusion Wear
                            </h5>
                            <li className="mt-2 dropdown-item">
                              Kurtas & Suits
                            </li>
                            <li className="dropdown-item">
                              Kurtas, Tunics & Top
                            </li>
                            <li className="dropdown-item">Sareers</li>
                            <li className="dropdown-item">Ethnic Wear</li>
                            <li className="dropdown-item">
                              Leggings, Salwar's Churidars
                            </li>
                            <li className="dropdown-item">Skirts & Palazzos</li>
                            <li className="dropdown-item">Dress Materisls</li>
                            <li className="dropdown-item">Lehengas Cholis</li>
                            <li className="dropdown-item">Jackets</li>
                          </div>
                          <div className="col-lg-4">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#FCB03F",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Western Wear
                            </li>
                            <li className="mt-2 dropdown-item">Dresses</li>
                            <li className="dropdown-item">Tops</li>
                            <li className="dropdown-item">T-Shirts</li>
                            <li className="dropdown-item">Jeans</li>
                            <li className="dropdown-item">Trousers & Capris</li>
                            <li className="dropdown-item">Play suits</li>
                            <li className="dropdown-item">Jump suits</li>
                            <li className="dropdown-item">
                              Sweaters & Sweat Shirts
                            </li>
                            <li className="dropdown-item">
                              Blazers & WaitCoat
                            </li>
                          </div>
                          <div className="col-lg-4">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#FCB03F",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Sleep Wear
                            </li>
                            <li className="mt-2 dropdown-item">Shape Wear</li>
                            <li className="dropdown-item">
                              Sleep Wear & Lounge Wear
                            </li>
                            <li className="dropdown-item">Swim Wear</li>
                            <li className="dropdown-item">Thermals</li>
                          </div>
                        </div>
                      </ul>
                    </div>
                    {/* Kids */}
                    <div class="dropdown">
                      <button
                        class="btn header__button3"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        Kids
                      </button>

                      <ul
                        class="dropdown-menu  header__Womens Headers__menus"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="row">
                          <div className="col-lg-4">
                            <h5
                              style={{
                                fontWeight: "bold",
                                color: "#DF0067",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Boys Clothing
                            </h5>
                            <li className="mt-2 dropdown-item">T-Shirts</li>
                            <li className="dropdown-item">Shirts</li>
                            <li className="dropdown-item">Shorts</li>
                            <li className="dropdown-item">Jeans</li>
                            <li className="dropdown-item">Trousers</li>
                            <li className="dropdown-item">Clothing Sets</li>
                            <li className="dropdown-item">Dress Materisls</li>
                            <li className="dropdown-item">Party Wear</li>
                            <li className="dropdown-item">Value Packs</li>
                          </div>
                          <div className="col-lg-4">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#DF0067",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Girls Clothing
                            </li>
                            <li className="mt-2 dropdown-item">Dresses</li>
                            <li className="dropdown-item">Tops</li>
                            <li className="dropdown-item">T-Shirts</li>
                            <li className="dropdown-item">Jeans</li>
                            <li className="dropdown-item">Shorts & Skirts</li>
                            <li className="dropdown-item">Tights & leggings</li>
                            <li className="dropdown-item">Jump suits</li>
                            <li className="dropdown-item">
                              Sweaters & Sweat Shirts
                            </li>
                            <li className="dropdown-item">
                              Blazers & WaitCoat
                            </li>
                          </div>
                          <div className="col-lg-4">
                            <li
                              style={{
                                fontWeight: "bold",
                                color: "#DF0067",
                                fontSize: "15px",
                              }}
                              className="dropdown-item"
                            >
                              Infants
                            </li>
                            <li className="mt-2 dropdown-item">Bodysuits</li>
                            <li className="dropdown-item">
                              Rompers & Sleepsuits
                            </li>
                            <li className="dropdown-item">Clothing Sets</li>
                            <li className="dropdown-item">T-Shirts & Top</li>
                            <li className="dropdown-item">Bottom Wear</li>
                            <li className="dropdown-item">Winter Wear</li>
                            <li className="dropdown-item">
                              Inner Wear & Sleep Wear
                            </li>
                            <li className="dropdown-item">Infant Care</li>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-center header--search">
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
                      <div className="position-absolute min-h-30vh bg-secondary shadow-sm-2 z-9 p-4">
                        {searchData &&
                          searchData.map((item, index) => {
                            const productName = item?.name?.replace(
                              /\s+/g,
                              "-"
                            );

                            return (
                            
                            <Link to={`/product/${productName}`} key={index} className="text-decoration-none">
                            
                                    <div className="d-flex align-items-start py-3">
                                     {/* <img src={} alt="" /> */}
                                    </div>
                            </Link>);
                          })}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-2 mt-1 ">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column text-center ">
                      <FaRegUser
                        style={{ marginLeft: "10px", fontSize: "20px" }}
                      />
                      <span style={handleFont}>Profile</span>
                    </div>
                    <div className="d-flex flex-column text-center ms-4">
                      <FaRegHeart
                        style={{ marginLeft: "10px", fontSize: "20px" }}
                      />
                      <span style={handleFont}>Wishlist</span>
                    </div>
                    <div className="d-flex flex-column text-center ms-4">
                      <PiHandbagBold
                        style={{ marginLeft: "10px", fontSize: "20px" }}
                      />
                      <span style={{ marginLeft: "7px", fontWeight: "bold" }}>
                        Bag
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeadRoom>
      )}
    </div>
  );
}

export default Header;
