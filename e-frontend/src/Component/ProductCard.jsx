import React from "react";
import Wish from "../assets/images/wishlist.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductCard = function (props) {
  return (
    <>
      <div className="col-3 mt-3">
        <div>
          <div className="wishlist-icon">
            <img src alt="wish" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
