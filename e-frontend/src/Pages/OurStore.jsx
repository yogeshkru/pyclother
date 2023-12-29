<<<<<<< HEAD
import { Link } from "react-router-dom";
import Color from "../Component/Colors";
import ProductCard from "../Component/ProductCard";

const OurStore = function () {
  return (
    <>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-4 ">
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
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
          <div className="col-4">
            <div className="d-flex flex-column text-center ">
              <h4>Men Top wear</h4>
              <p className="">(888888888888)</p>
            </div>
          </div>
          <div className="col-1"></div>

          <div className="col-3 sort-store ">
            <div className="d-flex">
              <p className="mb-0 font-weight-bold ">Sort By:</p>

              <select
                name=""
                defaultValue={"Low to High"}
                className="bg-transparent border-0 d-flex ms-2 "
                id=""
              >
                <option value="Low to High">Low to high</option>
                <option value="High to low"> High to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row">
          <div className="col-3">
            <div className="ourStore-filter-card ">
              <h3 className="ourStore-filter-title">CATEGORIES</h3>
              <div>
                <ul className="ps-0">
                  <li>Tshirts</li>
                  <li>Shirts</li>
                  <li>Sweat Shirts</li>
                  <li>Kurtas</li>
                </ul>
              </div>
            </div>

            <div className="outStore-brand-card">
              <h3 className="ourStore-brand-title"> BRAND</h3>
              <div>
                <ul className="ps-0">
                  <li>Roadster</li>
                  <li>Gucci</li>
                  <li>H&M</li>
                  <li>Versace</li>
                </ul>
              </div>
            </div>

            <div className="ourStore-price-gap">
              <h5 className="ourStore-price-title">PRICE</h5>

              <div className="ourStore-price">
                <div className="ourStore-range">
                  <input
                    type="range"
                    className="form-range"
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
                  <li>10% and above</li>
                  <li>20% and above</li>
                  <li>40% and above</li>
                  <li>50% and above</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
          
          <div className="d-flex gap-10 flex-wrap">
          <ProductCard />
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
=======
import React from 'react'

function OurStore() {
  return (
    <div>OurStore</div>
  )
}

export default OurStore
>>>>>>> bd688712cf8889176da1e894382cc4c03860309b
