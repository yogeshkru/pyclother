import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { RatingsPost } from "../features/product/productSlice";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";

function Reviews({details}) {
  const { singleProduct } = useSelector(
    (state) => state?.product
  );
  console.log(singleProduct?.ratings)
  const [show, setShow] = useState(false);
  const [Rating, setRatings] = useState(0);

  const [textarea, setTextarea] = useState(null);
 const dispatch=useDispatch()
  const handleRatingChange = (newRating) => {
    
    setRatings(newRating);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (Rating === 0 || textarea.trim() === ''){
      toast.error("Please Enter the Review");
      return false;
    } 
    else{
      const data={star:Rating,comment:textarea,prodId:details}
     dispatch(RatingsPost(data))
    }
    setRatings("")
    setTextarea("")
    setShow(false)
   
  }
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
                     
                    />
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
              <form onSubmit={handleSubmit}>
              <div className="">
                Write Review
                <div className="mt-1">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={Rating}
                    onChange={handleRatingChange}
                  ></ReactStars>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Comment"
                    value={textarea}
                    onChange={(e)=>setTextarea(e.target.value)}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    style={{
                      padding: "10px",
                      borderRadius: "15px",
                      color: "white",
                      backgroundColor: "#df0067",
                    }}
                  >
                    Submit Reivew
                  </button>
                </div>
              </div>
              </form>
            </>
          ) : (
            ""
          )}

          <div className="pt-2">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
