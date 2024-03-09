import { Link, useNavigate, useParams } from "react-router-dom";

import ProductCard from "../Component/ProductCard";
import "../styles/ourstore.css";
import Slider from "../Component/Slider";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import { GetColorName } from "hex-color-to-color-name";
import Meta from "../Component/Meta";

const OurStore = function () {
  <Meta title={`${"Our Store"}`} />;

  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };

  const [bshow, bsetShow] = useState(true);

  const bhandleShow = () => {
    bsetShow(false);
  };
  // ************************Product filter*******************************
  const { wholeProduct } = useSelector((state) => state?.product);

  const [filtered, setFiltered] = useState();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [prices, setPrices] = useState([]);

  //filter

  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [price, setPrice] = useState(null);

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  // const [sort, setSort] = useState(null);

  const dispatch = useDispatch();

  const { searchTerm } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  // console.log(searchTerm)
  useEffect(() => {
    let AllProduct = new Set();

    let newBrand = [];
    let category = [];
    let newColors = [];
    let price = [];
    // let discountPrice =[];

    for (let i = 0; i < wholeProduct?.length; i++) {
      const element = wholeProduct[i];
      newBrand?.push(element?.brand);
      category?.push(element?.category);
      newColors?.push(element?.color);
      price.push(element?.price);

    }
    setBrands(newBrand);
    setCategories(category);
    setColors(newColors);
    setPrices(price);

    // const filteredProducts = wholeProduct.filter(product =>
    //   Object.values(product).some(value => {
    //     if (typeof value === 'string') {
    //       return value.toLowerCase().includes(searchTerm.toLowerCase());
    //     } else if (typeof value === 'number') {
    //       // Convert searchTerm to a number if it's not NaN
    //       const searchTermNumber = parseFloat(searchTerm);

    //       if (!isNaN(searchTermNumber)) {
    //          value === searchTermNumber;
    //       }
    //     }
    //     return false;
    //   })
    // );
    

    // setFilteredData(filteredProducts)
  }, [wholeProduct, searchTerm]);

  // ******************************************************************
  const [obj, setObj] = useState({});
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(getAllProduct({ category, price, brand, color }));
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [category, price, color, brand]);

  // ***************************************************************************************

  // const copyHandleBrand=()=>{

  //   navigate(`/ourstore/${brand}`)
  // }

  // const handleBrand =(item)=>{

  //   setBrand(item)
  // }
  // ****************************************************************************************

  //brand
    const brandDetails =
    brands &&
    [...new Set(brands)].map((item, i) => (
      <div key={i} className="d-flex gap-1">
        <input type="checkbox" onClick={() => setBrand(item)} />
        <span style={{ textTransform: "capitalize", fontSize: "13px" }}>
          {item}
        </span>
      </div>
    ));
  //category
  const categoryDetails =
    categories &&
    [...new Set(categories)].map((item, i) => (
      <div key={i} className="d-flex gap-1">
        <input type="checkbox" onClick={() => setCategory(item)} />
        <span style={{ textTransform: "capitalize", fontSize: "13px" }}>
          {item}
        </span>
      </div>
    ));

  //colors

  const colorDetails =
    colors &&
    [...new Set(colors)].map((item, i) => {
      const colorNAme = GetColorName(item);
      return (
        <div key={i} className="d-flex gap-1">
          <div className="row">
            <div className="col-lg-1">
              <input type="checkbox" onClick={() => setColor(item)} />
            </div>
            <div className="col-lg-1 pt-1">
              <div
                style={{
                  width: "13px",
                  height: "13px",
                  border: `1px solid ${item}`,
                  backgroundColor: item,
                  borderRadius: "12px",
                }}
              ></div>
            </div>
            <div className="col-lg-8">{colorNAme}</div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      );
    });

  // price

  const priceDetails =
    prices &&
    [...new Set(prices)].map((item, i) => {
      return (
        <div key={i} className="d-flex gap-1 mb-2">
          <input type="checkbox" onClick={() => setPrice(item)} />
          <span style={{ textTransform: "capitalize", fontSize: "13px" }}>
            ₹{item}
          </span>
        </div>
      );
    });

  //Search

  
  
  useEffect(() => {
  
  
    let wholeDataBackend;
  
    if (searchTerm) {
      wholeDataBackend = wholeProduct.filter((product) =>
      Object.values(product).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    } else {
      wholeDataBackend = wholeProduct
    }
  
    setFiltered(wholeDataBackend);
  }, [wholeProduct, searchTerm]);

  // *******************************************************************
  return (
    <>
      <Meta title={`${searchTerm}`} />

      <section className="container py-5 ourStore-breadcrumb ">
        <div className="row ms-0">
          <div className="d-flex justify-content-around ms-0">
            <div className="  mb-0 d-flex align-items-center ms-0">
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
                className="ms-0"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className=" breadcrumb-item">
                      Home
                    </Link>
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Clothing
                  </li>
                  &nbsp;/&nbsp;
                  <li className="fw-bold">{searchTerm}</li>
                </ol>
              </nav>
            </div>

            <div className=" d-flex align-items-center ourStore-product-count mb-0 ms-0">
              <div className="d-flex flex-column text-center mb-0 ms-0 ">
                <h4 className="mb-0 ms-0">Men Top wear</h4>
                <p className="ourStore-stock mb-0 ms-0">(12345 items)</p>
              </div>
            </div>

            <div className="  d-flex align-items-center  ms-0">
              <div className="d-flex mx-auto ">
                {/* <p className="mb-0 ms-0 ">Sort By:</p> */}

                {/* <select
                  name=""
                  defaultValue={"Low to High"}
                  className="bg-transparent border-0 d-flex ms-0 "
                  id=""
                >
                  <option value="Low to High">Low to high</option>
                  <option value="High to low"> High to low</option>
                </select> */}

                <input type="text" placeholder="pincode"></input>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-1 ourStore-border-top  ">
        <div className="row ">
          <div className={"col-lg-3 ourStore-border-right col-12"}>
            <div className="ourStore-filter-card ">
              <div onClick={handleShow}>
                {show ? (
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="ourStore-price-title">CATEGORY</h5>
                    </div>
                    <div>
                      <FaMagnifyingGlass />
                    </div>
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      className="searchstore"
                      onClick={() => setShow(false)}
                    />
                    <IoMdClose onClick={() => setShow(false)} />
                  </div>
                )}
              </div>

              <div>
                <ul className="ps-0">{categoryDetails}</ul>
              </div>
            </div>

            <div className="outStore-brand-card">
              <div onClick={bhandleShow}>
                {bshow ? (
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="ourStore-price-title">BRAND</h5>
                    </div>
                    <div>
                      <FaMagnifyingGlass />
                    </div>
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      className="searchstore"
                      placeholder=""
                      onClick={() => setShow(false)}
                    />
                    <IoMdClose onClick={() => setShow(true)} />
                  </div>
                )}
              </div>
              <div>
                <ul className="ps-0">{brandDetails}</ul>
              </div>
            </div>

            <div className="ourStore-price-gap ">
              <h5 className="ourStore-price-title">PRICE</h5>

              {priceDetails}
            </div>

            <div className="ourStore-color">
              <h3 className="ourStore-color-title">COLOR</h3>
              <div className="mb-3">{colorDetails}</div>
            </div>

            <div className="ourStore-color">
              <h3 className="ourStore-discount-title mt-3">DISCOUNT</h3>
            </div>
          </div>

          <div className="col-lg-9 col-6 ourStore-product-render">
            <div className="d-flex gap-18 flex-wrap ">
              <ProductCard data={wholeProduct} />
            </div>

            <div className="ourStore-pagination d-lg-flex mt-5  justify-content-center  m-auto row ">
              <div className="ourStore-page   ms-3 ">
                <p className="m">page 1 of 56</p>
              </div>

              <div className="ourStore-page-number  col-lg-2 ">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">4</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" id="nextpg">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStore;
