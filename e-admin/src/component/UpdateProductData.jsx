import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

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
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default UpdateProductData;
