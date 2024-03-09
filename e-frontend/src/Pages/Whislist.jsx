import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import whislist1 from "../assets/image/wishlist.jpeg";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import xtic from "../assets/image/ticxgame.png";
import otic from "../assets/image/ticgame.png";
import ProductCard from "../Component/ProductCard";
import { toast } from "react-toastify";
import { getAllUserFromServer, wishListGetData } from "../features/usersSlice";
import { getAllProduct } from "../features/product/productSlice";
function Whislist() {
  const dispatch = useDispatch();
  const [dataDetails, setDataDetails] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [count, setCount] = useState(0);

  const [lock, setLock] = useState(false);
  let [xoWinner, setWinner] = useState("");

  const toggle = (_, num) => {
    if (lock) {
      return 0;
    } else if (count % 2 == 0) {
      dataDetails[num] = "x";
      setCount((per) => per + 1);
    } else {
      dataDetails[num] = "o";
      setCount((per) => per + 1);
    }
    checkWin();
  };
  const reset = () => {
    setLock(false);
    setWinner("");
    setCount(0);
    setDataDetails(["", "", "", "", "", "", "", "", ""]);
  };

  const checkWin = () => {
    if (
      dataDetails[0] === dataDetails[1] &&
      dataDetails[1] === dataDetails[2] &&
      dataDetails[2] !== ""
    ) {
      won(dataDetails[2]);
    } else if (
      dataDetails[3] === dataDetails[4] &&
      dataDetails[4] === dataDetails[5] &&
      dataDetails[5] !== ""
    ) {
      won(dataDetails[5]);
    } else if (
      dataDetails[6] === dataDetails[7] &&
      dataDetails[7] === dataDetails[8] &&
      dataDetails[8] !== ""
    ) {
      won(dataDetails[8]);
    } else if (
      dataDetails[0] === dataDetails[3] &&
      dataDetails[3] === dataDetails[6] &&
      dataDetails[6] !== ""
    ) {
      won(dataDetails[6]);
    } else if (
      dataDetails[1] === dataDetails[4] &&
      dataDetails[4] === dataDetails[7] &&
      dataDetails[7] !== ""
    ) {
      won(dataDetails[7]);
    } else if (
      dataDetails[2] === dataDetails[5] &&
      dataDetails[5] === dataDetails[8] &&
      dataDetails[8] !== ""
    ) {
      won(dataDetails[8]);
    } else if (
      dataDetails[0] === dataDetails[4] &&
      dataDetails[4] === dataDetails[8] &&
      dataDetails[8] !== ""
    ) {
      won(dataDetails[8]);
    } else if (
      dataDetails[2] === dataDetails[4] &&
      dataDetails[4] === dataDetails[6] &&
      dataDetails[6] !== ""
    ) {
      won(dataDetails[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner == "x") {
      setWinner("X is winner");
    } else {
      setWinner("O is winner");
    }
  };

  const { Whislistget } = useSelector((state) => state.users);
  const { wholeProduct } = useSelector((state) => state.product);
  const [wishDetails, setWishDetails] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   let data = [];
  //   for (let i = 0; i < Whislistget.length; i++) {
  //     const DetailsCategory = Whislistget[i]?.category;
  //     const DetailsDescription = Whislistget[i]?.description;
  //     data.push({ DetailsCategory, DetailsDescription });
  //   }
  //   const filtered = wholeProduct.filter((item) =>
  //     data.some(
  //       (userData) =>
  //         userData.DetailsCategory === item.category &&
  //         userData.DetailsDescription === item.description
  //     )
  //   );

  //   setWishDetails(filtered);
  // }, [Whislistget]);

  // useEffect(() => {
  //   const wishlistSet = new Set(
  //     Whislistget.map((item) => `${item?.category}-${item?.description}`)
  //   );

  //   const filtered = wholeProduct.filter((item) =>
  //     wishlistSet.has(`${item?.category}-${item.description}`)
  //   );
  //   setWishDetails(filtered);
  // }, [Whislistget, wholeProduct]);

  useEffect(() => {
    const data = new Set();
    Whislistget.forEach(({ category, description }) => {
      data.add(`${category}_${description}`);
    });

    const filtered = wholeProduct.filter((item) =>
      Array.from(data).some((key) => {
        const [DetailsCategory, DetailsDescription] = key.split("_");
        return (
          DetailsCategory === item.category &&
          DetailsDescription === item.description
        );
      })
    );

    // dispatch(wishListGetData())
    // dispatch(getAllUserFromServer());
    dispatch(getAllProduct());
    setWishDetails(filtered);
  }, [Whislistget, wholeProduct]);

  return (
    <div className="mt-3 pb-5 mb-5 ">
      <div className="container mb-5 pb-5">
        <h5 className="mt-5">
          My Wishlist{" "}
          <span style={{ color: "gray" }}>({Whislistget.length} items)</span>
        </h5>

        <div className="row">
          {Whislistget?.length > 0 ? (
            <ProductCard data={Whislistget} />
          ) : (
            <>
              <div className="text-center">
                <div className="container">
                  <h4> {xoWinner ? xoWinner : "Seeking some excitement?"}</h4>
                  <div className="whislist-board">
                    <div className="wishlist-row1">
                      <div
                        className="wishlist-Box"
                        onClick={(_) => {
                          toggle(_, 0);
                        }}
                      >
                        {dataDetails[0] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[0] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 1)}
                      >
                        {dataDetails[1] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[1] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 2)}
                      >
                        {dataDetails[2] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[2] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                    </div>
                    <div className="wishlist-row2">
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 3)}
                      >
                        {dataDetails[3] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[3] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 4)}
                      >
                        {dataDetails[4] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[4] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 5)}
                      >
                        {dataDetails[5] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[5] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                    </div>
                    <div className="wishlist-row3">
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 6)}
                      >
                        {dataDetails[6] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[6] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 7)}
                      >
                        {dataDetails[7] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[7] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                      <div
                        className="wishlist-Box"
                        onClick={(e) => toggle(e, 8)}
                      >
                        {dataDetails[8] === "x" ? (
                          <img src={xtic} />
                        ) : dataDetails[8] === "o" ? (
                          <img src={otic} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      padding: "5px 20px",
                      color: "white",
                      backgroundColor: "#df0067",
                      borderRadius: "14px",
                    }}
                    onClick={reset}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div>
                <button
                  style={{
                    padding: "5px 20px",
                    color: "white",
                    backgroundColor: "#df0067",
                    borderRadius: "14px",
                  }}
                  onClick={() => navigate("/ourstore")}
                >
                  Shop now
                </button>
              </div>
            </>
          )}
        </div>
        <div className="mt-3">
          <h5>You would like this products:</h5>
        </div>
        <div className="row">
          <ProductCard data={wishDetails} />
        </div>
      </div>
    </div>
  );
}

export default Whislist;
