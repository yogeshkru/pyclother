import { Link } from "react-router-dom";
import Color from "../Component/Colors";
import ProductCard from "../Component/ProductCard";

const OurStore = function () {
  return (
    <>
      <div className="container py-5 ourStore-breadcrumb ">
        <div className="row">
          <div className="d-flex justify-content-around">
            <div className="col-4  mb-0 d-flex align-items-center ">
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
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

            <div className="col-4 d-flex align-items-center ourStore-product-count">
              <div className="d-flex flex-column text-center ">
                <h4>Men Top wear</h4>
                <p className="ourStore-stock">(12345 items)</p>
              </div>
            </div>

            <div className="col-4 sort-store d-flex align-items-center ">
              <div className="d-flex mx-auto ">
                <p className="mb-0  ">Sort By:</p>

                <select
                  name=""
                  defaultValue={"Low to High"}
                  className="bg-transparent border-0 d-flex ms-2  "
                  id=""
                >
                  <option value="Low to High">Low to high</option>
                  <option value="High to low"> High to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-1 ourStore-border-top  ">
        <div className="row ">
          <div className="col-3 ourStore-border-right ">
            <div className="ourStore-filter-card ">
              <h3 className="ourStore-filter-title pt-3">CATEGORIES</h3>
              <div >
                <ul className="ps-0">
                  <li  className="ourstore-category-filter" >Tshirts <span className="ourstore-filter ms-1 mb-0">(12345 items )</span></li>
                  <li className="ourstore-category-filter">Shirts <span className="ourstore-filter ms-1 mb-0">(123456 items)</span></li>
                  <li className="ourstore-category-filter">Sweat Shirts <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                  <li className="ourstore-category-filter">Kurtas <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                </ul>
              </div>
            </div>

            <div className="outStore-brand-card">
              <h3 className="ourStore-brand-title"> BRAND</h3>
              <div>
                <ul className="ps-0">
                  <li className="ourstore-brand-filter">Roadster <span className="ourstore-filter ms-1 mb-0 ">(12346 items)</span></li>
                  <li className="ourstore-brand-filter">Gucci <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
                  <li className="ourstore-brand-filter">H&M <span className="ourstore-filter ms-1 mb-0 ">(12345 items)</span></li>
                  <li className="ourstore-brand-filter">Versace <span className="ourstore-filter ms-1 mb-0">(12345 items)</span></li>
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
                  <li className="ourstore-discount-filter">10% and above</li>
                  <li className="ourstore-discount-filter">20% and above</li>
                  <li className="ourstore-discount-filter">40% and above</li>
                  <li className="ourstore-discount-filter">50% and above</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-9 ourStore-product-render flex-grow-1">
            <div className="d-flex gap-10 flex-wrap ">
              <ProductCard />
            </div>

            <div className="ourStore-pagination d-lg-flex ">
              <div className="ourStore-page d-flex align-items-center  ms-3 mb-0">
                <p className="mb-0">page 1 of 56</p>
              </div>

              <div className="ourStore-page-number ">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                 
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
