import React from "react";
import { useLocation } from "react-router-dom";
import URL from "../utilis/Url";
import { useNavigate } from "react-router-dom";
function Viewproduct() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  return (
    <div>
      <div className="row mb-3">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4 className="text-center">Product Details</h4>
        </div>
        <div className="col-lg-4 text-end">
          <button
            className="brand_padding--border "
            onClick={() => navigate("/admin/product-list")}
          >
            Back Product
          </button>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-3 shadow p-3">
          <div className="row">
            <div className="col-lg-6 ">
              <h6>Product Name</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.name}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Product Model</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.model}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Product SKU</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.sku}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Price</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.price}</div>
          </div>

          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Product Stack</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.stack}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Quantity</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.quantity}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Tag</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.tag}</div>
          </div>
        </div>
        <div className="col-lg-3 shadow p-3">
          <div className="row">
            <div className="col-lg-6 ">
              <h6>Tax</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.Gst.gst_percentage}%</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Brand</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.brand}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Color</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">
              {state.color.map((item) => (
                <p>{item.color_hex_name}</p>
              ))}
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6">
              <h6>Category</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.category}</div>
          </div>

          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Reward Point</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.rewardpoint}</div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 ">
              <h6>Status</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className={`col-lg-5`}
              style={{ color: state && state.Available ? "green" : "red" }}
            >
              {state.Available ? "Active" : "InActive"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Sort</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">{state.sort}</div>
          </div>
        </div>
        <div className="col-lg-3 shadow p-3">
          <div className="row">
            <div className="col-lg-6 ">
              <h6>Weight</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state && state.weight ? "" : "red" }}
            >
              {state.weight ? state.weight : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Weight Class</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state && state.weight_class ? "" : "red" }}
            >
              {state.weight_class ? state.weight_class : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Height</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">
              <div
                className="col-lg-5"
                style={{ color: state && state.height ? "" : "red" }}
              >
                {state.height ? state.height : "Undefined"}
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Length</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state && state.length ? "" : "red" }}
            >
              {state.length ? state.length : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 ">
              <h6>Size</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className={`col-lg-5`}
              style={{ color: state && state.size ? "" : "red" }}
            >
              {state.size ? state.size : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Brether</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state.brether ? "" : "red" }}
            >
              {state.brether ? "" : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Diamension Class</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state.diamension_class ? "" : "red" }}
            >
              {state.diamension_class ? "" : "Undefined"}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between mt-3">
        <div className="col-lg-3 shadow p-3">
          <div className="row">
            <div className="col-lg-6 ">
              <h6>Meta Title</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state && state.meta_title ? "" : "red" }}
            >
              {state.weight ? state.meta_title : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Meta Keyboard</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: state && state.meta_keyboard ? "" : "red" }}
            >
              {state.weight_class ? state.meta_keyboard : "Undefined"}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Meta Description</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className="col-lg-5">
              <div
                className="col-lg-5"
                style={{ color: state && state.meta_description ? "" : "red" }}
              >
                {state.height ? state.meta_description : "Undefined"}
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-lg-6">
              <h6>Numviews</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div
              className="col-lg-5"
              style={{ color: "green", fontWeight: "bold" }}
            >
              {state.numViews}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 ">
              <h6>Total Rating</h6>
            </div>
            <div className="col-lg-1">:</div>
            <div className={`col-lg-5`}>{state.totalrating}</div>
          </div>
        </div>

        <div className="col-lg-8 shadow">
          <div className="row">
            {state.length ? (
              <div className="row">
                {state.images.map((item) => (
                  <div className="col-2">
                    <img src={`${URL.IMAGE_URL}${item.url}`} width="100%" />
                  </div>
                ))}
              </div>
            ) : (
              <p>Not data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
