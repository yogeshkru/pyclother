import React from "react";
import whislist from "../assets/image/whislist1.jpeg";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import whislist1 from "../assets/image/whishlist2.jpeg";
import whislist2 from "../assets/image/whislist3.jpeg";

function Whislist() {
  return (
    <div className="mt-3 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div class="card">
              <div className="whislist_content_1">
                <img src={whislist} class="card-img-top" alt="..." />
                <div className="whislist_content_icon">
                  <IoMdClose
                    color="black"
                    style={{
                      fontSize: "18px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              <div class="whislist_content">
                <h5 class="card-title">US.POLO</h5>
                <p class="card-text">Men 's Cotton Pure cotton T-shirts</p>
                <p>Rs-499</p>
              </div>
              <hr className="whislist_horziation"/>
              <div className="whislist_button">
                <Link className="whislist_button_color">Add To Bag</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div class="card">
              <div className="whislist_content_1">
                <img src={whislist2} class="card-img-top" alt="..." />
                <div className="whislist_content_icon">
                  <IoMdClose
                    color="black"
                    style={{
                      fontSize: "18px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              <div class="whislist_content">
                <h5 class="card-title">US.POLO</h5>
                <p class="card-text">Men 's Cotton Pure cotton T-shirts</p>
                <p>Rs-499</p>
              </div>
              <hr className="whislist_horziation"/>
              <div className="whislist_button">
                <Link className="whislist_button_color">Add To Bag</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div class="card">
              <div className="whislist_content_1">
                <img src={whislist1} class="card-img-top" alt="..." />
                <div className="whislist_content_icon">
                  <IoMdClose
                    color="black"
                    style={{
                      fontSize: "18px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              <div class="whislist_content">
                <h5 class="card-title">US.POLO</h5>
                <p class="card-text">Men 's Cotton Pure cotton T-shirts</p>
                <p>Rs-499</p>
              </div>
              <hr className="whislist_horziation"/>
              <div className="whislist_button">
                <Link className="whislist_button_color">Add To Bag</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whislist;
