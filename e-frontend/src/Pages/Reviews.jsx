import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
function Reviews() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h4>Reviews</h4>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h6>Customer Review</h6>
            <div className="row">
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-5">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>
                  <div className="col-lg-6 pt-1">Based on review</div>
                </div>
              </div>

              <div className="col-lg-9 text-end">
                <p
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                >
                  Write a Review
                </p>
              </div>
            </div>
          </div>

          {show ? (
            <>
              <hr />
              <div className="">
                Write Review
                <div className="mt-1">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  ></ReactStars>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Comment
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="pt-4">
                    <button type="submit" style={{padding:"10px",borderRadius:"15px",color:"white",backgroundColor:"#df0067"}}>Submit Reivew</button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Reviews;
