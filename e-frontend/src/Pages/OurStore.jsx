import { Link } from "react-router-dom";
import Color from "../Component/Colors";
import ProductCard from "../Component/ProductCard";
import "../styles/ourstore.css"
import Slider from "../Component/Slider";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";

const OurStore = function () {

  const [mobile, setMobile] = useState(false)


  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(false)
  }

  const [bshow, bsetShow] = useState(true)

  const bhandleShow = () => {
    bsetShow(false)
  }


  const { wholeProduct } = useSelector((state) => state.product)

  const dispatch = useDispatch()
  useEffect(() => {
    const timeOut = setTimeout(() => {
     dispatch(getAllProduct())

    }, 500)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <>

      <section className="container py-5 ourStore-breadcrumb ">
        <div className="row ms-0">
          <div className="d-flex justify-content-around ms-0">
            <div className="col-4  mb-0 d-flex align-items-center ms-0">
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
                className="ms-0"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className=" breadcrumb-item">Home</Link>
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Clothing
                  </li>
                  &nbsp;/&nbsp;
                  <li className="fw-bold">Men Top wear</li>
                </ol>
              </nav>
            </div>

            <div className="col-4 d-flex align-items-center ourStore-product-count mb-0 ms-0">
              <div className="d-flex flex-column text-center mb-0 ms-0 ">
                <h4 className="mb-0 ms-0">Men Top wear</h4>
                <p className="ourStore-stock mb-0 ms-0">(12345 items)</p>
              </div>
            </div>

            <div className="col-4 sort-store d-flex align-items-center  ms-0">
              <div className="d-flex mx-auto ">
                <p className="mb-0 ms-0 ">Sort By:</p>

                <select
                  name=""
                  defaultValue={"Low to High"}
                  className="bg-transparent border-0 d-flex ms-0 "
                  id=""
                >
                  <option value="Low to High">Low to high</option>
                  <option value="High to low"> High to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "col-lg-3 col-12 ourStore-border-right " */}

      <section className="container py-1 ourStore-border-top  ">
        <div className="row ">
          <div className={"col-lg-3 ourStore-border-right col-12"}>
            <div className="ourStore-filter-card ">


              {/* 
<div className="d-flex">
{show === true && (
  <h3 className="ourStore-filter-title pt-3">CATEGORIES</h3>
)}   
<input type="search " className="searchstore" placeholder="search here..."onClick={()=>setShow(false)} ></input> <FaMagnifyingGlass />
</div> */}
              <div onClick={handleShow}>
                {
                  show ? (
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4>Category</h4>
                      </div>
                      <div>
                        <FaMagnifyingGlass />
                      </div>
                    </div>
                  ) : (
                    <div >
                      <input
                        type="text"
                        className="searchstore"

                        onClick={() => setShow(false)}


                      />
                      <IoMdClose onClick={() => setShow(false)} />



                    </div>
                  )
                }
              </div>




              <div >
                <ul className="ps-0">
                  <li className="ourstore-category-filter  d-flex" ><input type="checkbox" className="ourcheck "></input> Tshirts <span className="ourstore-filter ms-1 mb-0">(12345 items )</span></li>
                  <li className="ourstore-category-filter d-flex"><input type="checkbox" className="ourcheck"></input>Shirts <span className="ourstore-filter ms-1 mb-0">(123456 items)</span></li>
                  <li className="ourstore-category-filter d-flex"><input type="checkbox" className="ourcheck"></input>Sweat Shirts <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                  <li className="ourstore-category-filter d-flex"><input type="checkbox" className="ourcheck"></input>Kurtas <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                </ul>
              </div>
            </div>

            <div className="outStore-brand-card">
              <div onClick={bhandleShow}>
                {
                  bshow ? (
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4>BRAND</h4>
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
                  )
                }
              </div>
              <div>
                <ul className="ps-0">
                  <li className="ourstore-brand-filter d-flex"><input type="checkbox" className="ourcheck"></input>Roadster <span className="ourstore-filter ms-1 mb-0 ">(12346 items)</span></li>
                  <li className="ourstore-brand-filter d-flex"><input type="checkbox" className="ourcheck"></input>Gucci <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                  <li className="ourstore-brand-filter d-flex"><input type="checkbox" className="ourcheck"></input>H&M <span className="ourstore-filter ms-1 mb-0 ">(12345 items)</span></li>
                  <li className="ourstore-brand-filter d-flex"><input type="checkbox" className="ourcheck"></input>Versace <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                </ul>
              </div>
            </div>

            <div className="ourStore-price-gap">
              <h5 className="ourStore-price-title">PRICE</h5>

              <div className="ourStore-price">
                <div className="ourStore-range">
                  <input
                    type="range"
                    className="form-range w-75 d-flex mx-auto"
                    min="0"
                    max="5"
                    id="customRange2"
                  />
                </div>
                <div className="d-flex justify-content-around px-5 mt-4 mb-3 price-range">
                  <div className="form-floating ms-0 mb-3">
                    <input
                      type="text"
                      className="form-control "
                      id="floatingInput-2"
                      name="loops"
                      placeholder=""
                    />
                    <label htmlFor="floatingInput-2">From</label>
                  </div>
                  <div className="form-floating ms-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput-1"
                      name="loops"
                      placeholder=""
                    />
                    <label htmlFor="floatingInput-1">To</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="ourStore-color">
              <h3 className="ourStore-color-title">COLOR</h3>
              <div>
                <Color />
              </div>
            </div>

            <div className="ourStore-discount">
              <h3 className="ourStore-discount-title mt-3">DISCOUNT</h3>
              <div className="li-gap">
                <ul className="ps-0">
                  <li className="ourstore-discount-filter d-flex"><input type="checkbox" className="ourcheck"></input>10% and above</li>
                  <li className="ourstore-discount-filter d-flex"><input type="checkbox" className="ourcheck"></input>20% and above</li>
                  <li className="ourstore-discount-filter d-flex"><input type="checkbox" className="ourcheck"></input>40% and above</li>
                  <li className="ourstore-discount-filter d-flex"><input type="checkbox" className="ourcheck"></input>50% and above</li>

                  <li className="ourstore-discount-filter"><input type="checkbox" className="ourcheck"></input>60% and above</li>

                  <li className="ourstore-discount-filter"><input type="checkbox" className="ourcheck"></input>70% and above</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-6 ourStore-product-render  ">
            <div className="d-flex gap-10 flex-wrap ">
              <ProductCard data={wholeProduct}  />
            </div>


            <div className="ourStore-pagination d-lg-flex mt-5  justify-content-center  m-auto row ">
              <div className="ourStore-page   ms-3 ">
                <p className="m">page 1 of 56</p>
              </div>

              <div className="ourStore-page-number  col-lg-2 ">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">

                    <li className="page-item">
                      <a className="page-link" >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" >
                        4
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" id="nextpg" >
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
