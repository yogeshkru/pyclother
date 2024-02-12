
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";

function UpdateProductData({ setOpen, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = function () {};
  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }
  
  return (
    <>
      <div className="bg-light w-100">
        {data ? (
          <div className="fixed w-100 h-100 top-0 left-0 bg-light-transparent z-40 d-flex align-items-center justify-content-center">
            <div className="w-90 800px:w-60 h-90vh overflow-y-scroll 800px:h-75vh bg-white rounded-md shadow-sm relative p-4">
              <RxCross1
                size={30}
                className="position-absolute top-3 end-3 z-50"
                onClick={() => setOpen(false)}
              />

              {/* <div className="d-block w-100 800px:flex ">
                <div className="w-100 800px:w-50">
                  <img src={data?.image_Url[0]?.url} alt={data?.name} />
                  <div className="d-flex">
                    <img
                      src={data?.shop?.shop_avatar?.url}
                      alt="product"
                      className="w-50 h-50 rounded-circle me-2"
                    />
                    <div>
                      <h3 className="pt-3 text-15 text-blue-400 pb-3">
                        {data?.shop?.name}
                      </h3>
                      <h5 className="pb-3 text-15 ">
                        ({data?.shop?.ratings}) Ratings
                      </h5>
                    </div>
                  </div>
                  <div
                    className="btn btn-primary mt-4 rounded-4 h-11"
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white d-flex align-items-center">
                      Send Message <AiOutlineMessage className="ms-1" />
                    </span>
                  </div>
                  <h5 className="text-16 text-red mt-5">
                    ({data?.total_sell}) Sold Out
                  </h5>
                </div>

                <div className="w-100 800px:w-50 pt-5 pe-5 ps-5">
                  <h1 className="font-600 font-Roboto text-333 text-20">
                    {data?.name}
                  </h1>
                  <p>{data?.description}</p>
                  <div className="d-flex pt-3">
                    <h4 className="font-bold text-18 text-333 font-Roboto">
                      {data?.discount_price} $
                    </h4>

                    <h3 className="font-500 text-16 text-d55b45 ps-3 mt--4 text-decoration-line-through">
                      {data?.price ? data?.price + "" : null}
                    </h3>
                  </div>

                  <div className="d-flex align-items-center mt-12 justify-content-between pe-3 ">
                    <div>
                      <button
                        className="btn btn-primary rounded-start px-4 py-2 shadow-lg hover-opacity-75 transition duration-300 ease-in-out"
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px] ">
                        {count}
                      </span>
                      <button
                        className="btn btn-primary rounded-end px-4 py-2 shadow-lg hover-opacity-75 transition duration-300 ease-in-out"
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>

                    <div>
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Remove from wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer"
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Add to wishlist"
                        />
                      )}
                    </div>
                  </div>

                  <div className="btn btn-primary w-150 bg-black h-50 my-3 d-flex align-items-center mt-6 justify-content-center rounded-4 cursor-pointer">
                    <span className="text-white d-flex align-items-center">
                      Add to cart <AiOutlineShoppingCart className="ms-1" />
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default UpdateProductData;
