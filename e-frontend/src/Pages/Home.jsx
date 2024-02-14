import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import useCode from "../assets/image/usecode.jpeg";
import men_wear from "../assets/image/men_wear.png";
import women_wear from "../assets/image/women_wear.png";
import kids_wear from "../assets/image/Kids.png"
import Marquee from "react-fast-marquee";
import home_end from "../assets/image/end_of_season1.jpeg";

import home_carousel1r from '../assets/image/home_carousel1r.png'
import home_carousel2r from '../assets/image/home_carousel2r.png'
import home_carouselbagr from '../assets/image/home_carouselbagr.png'
import home_carousel3r from '../assets/image/home_carousel3r.png'

import home_carousel5f from '../assets/image/home_carousel5f.png'


import home_carousel6r from '../assets/image/home_carousel6r.png'

import vector from "../assets/image/Vector.png";
import home6 from "../assets/image/homeslide.jpeg";
import home7 from "../assets/image/homeslide1.jpeg";
import home8 from "../assets/image/homeslide2.jpeg";
import home9 from "../assets/image/homeslide3.jpeg";
import women from "../assets/image/women.png";
import men from "../assets/image/men1.png";
import marriage from "../assets/image/marriage.png";
import men1 from "../assets/image/MEN2.png";
import men_details from "../assets/image/men_details.jpeg";
import women_details from "../assets/image/women_details.jpeg";
import kids_details from "../assets/image/kids_details.jpeg";
import winter from "../assets/image/home_winter.jpeg";
import dresses from "../assets/image/home_dresses.jpeg";
import kids from "../assets/image/home_tshirts.jpeg";
import infant from "../assets/image/home_infant.jpeg";
import home_details from "../assets/image/home_details10.jpeg";
import home_details1 from "../assets/image/home_details7.jpeg";
import home_details2 from "../assets/image/home_details8.jpeg";
import home_details3 from "../assets/image/home_details9.jpeg";
import home_details4 from "../assets/image/home_details6.jpeg";
import home_details5 from "../assets/image/home_details5.jpeg";
import home_details6 from "../assets/image/home_details4.jpeg";
import home_details7 from "../assets/image/home_details3.jpeg";
import home_details8 from "../assets/image/home_details2.jpeg";
import home_details9 from "../assets/image/home_details1.jpeg";
import delivery from "../assets/image/delviery.png";
import exchange from "../assets/image/exchange.png";
function Home() {
  //slides
  const [data, setData] = useState(0);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [index]);

  //carousel
  const slides = [
    { id: 1, scr: home_carousel1r, alt: "home_carousel1" },
    { id: 2, scr: home_carousel2r, alt: "home_carousel1" },
    { id: 3, scr: home_carousel3r, alt: "home_carousel1" },
    { id: 4, scr: home_carouselbagr, alt: "home_carouselbagr" },
    { id: 5, scr: home_carousel5f, alt: "home_crousel5f" },
    { id: 6, scr: home_carousel6r, alt: "home_carousel1" },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setData((prevData) => (prevData + 1) % slides.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <>
    <div className=" container-fluid overflow-hidden">
    
      <div className="home_carousel mt-auto">
        {slides.map((item, i) => (
          <img
            key={i}
            src={item.scr}
            alt={item.alt}
            width="100%"
            className={
              data === i ? "home_slides" : "home_slides home_slides_hidden"
            }
          />
        ))}
        <div className="home_total_indicator">
          <span className="home_indicators">
            {slides.map((_, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setData(i)}
                  className={
                    data === i
                      ? "home_indicator"
                      : "home_indicator home_indicator_active"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
      <div className="home_geniune_product">
        <div className="row p-4 ">
          <div className="col-lg-4 home_geniune_border">
            <div className="d-flex justify-content-center gap-4">
              <div className="home_geniune_product_img pt-2">
                <img src={vector} width="100%" />
              </div>
              <div className="home_geniune_border_content pt-3">
                <p>100% GENIUNE</p>
                <p>PRODUCTS</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 home_geniune_border">
            <div className="d-flex justify-content-center gap-4">
              <div className="home_geniune_product_img1 pt-2">
                <img src={exchange} width="100%" />
              </div>
              <div className="home_geniune_border_content pt-3">
                <p>SUPERFAST DELIVERY</p>
                <p>PRODUCTS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center gap-4">
              <div className="home_geniune_product_img3 pt-2">
                <img src={delivery} width="100%" />
              </div>
              <div className="home_geniune_border_content pt-3">
                <p>EASY EXCHANGE& RETURNS</p>
                <p>PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" home_page_welcome">
        <div className="text-center">
          <h1 className="home_page_pondicherry">
            WELCOME <span className="home_pondicherry">PONDICHERRY</span>
          </h1>
        </div>
      </div>  

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className={index === 1 ? "active" : ""}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className={index === 2 ? "active" : ""}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="1000"
          >
            <img src={home6} className="d-block w-100" alt="Slide 1" />
          </div>
          <div
            className={`carousel-item ${index === 1 ? "active" : ""}`}
            data-bs-interval="2000"
          >
            <img src={home7} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
            <img src={home8} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className={`carousel-item ${index === 3 ? "active" : ""}`}>
            <img src={home9} className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
      </div>
      <div className="home_top_brands">
        <div className="text-center">
          <h1 className="home_top_content">TOP BRANDS</h1>
          <h4 className="home_top_shopping">ULTIMATE SHOPPING</h4>
        </div>
      </div>

      <div className="home_rating_top">
        <div className="row ">
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_borders">
              <div className="home_rating_content">
                <img src={women} width="100%" />
              </div>
              <div className="home_rating_content2 text-center">
                <h2 className="fw-bold">TOPS</h2>
                <h4>min 20% OFF</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_borders">
              <div className="home_rating_content">
                <img src={men1} width="100%" />
              </div>
              <div className="home_rating_content1 text-center">
                <h2 className="fw-bold">ADIDAS</h2>
                <h4>min 20% OFF</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_borders">
              <div className="home_rating_content">
                <img src={men} width="100%" />
              </div>
              <div className="home_rating_content1 text-center">
                <h2 className="fw-bold">JACKET</h2>
                <h4>min 20% OFF</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_borders">
              <div className="home_rating_content">
                <img src={marriage} width="100%" />
              </div>
              <div className="home_rating_content2 text-center">
                <h2 className="fw-bold">PARTY WEAR</h2>
                <h4>min 20% OFF</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOP BRAND */}
      <div className="header_beast_offers">
        <div className="text-center">
          <h1 className="home_top_content">TOP BRANDS</h1>
          <h1 className="home_top_offers">best offers</h1>
        </div>
      </div>

      <div className="row home_mens--total mt-3">
        <div className="col-lg-4 home_mens--upto">
          <div className="home_mens--upto1">
            <div className="home_mens-details">
              <img src={men_details} width="100%" />
            </div>
            <div className="home_mens-details1">
              <img src={men_wear} width="100%" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 home_mens--upto">
          <div className="home_mens--upto1">
            <div className="home_mens-details">
              <img src={women_details} width="100%" />
            </div>
            <div className="home_mens-details1">
              <img src={women_wear} width="100%" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 home_mens--upto">
          <div className="home_mens--upto1">
            <div className="home_mens-details">
              <img src={kids_details} width="100%" />
            </div>
            <div className="home_mens-details1">
              <img src={kids_wear} width="100%" />
            </div>
          </div>
        </div>
      </div>

      {/* FRESH ARRIVES */}
      <div className="header_beast_arrive">
        <div className="text-center">
          <h1 className="home_top_content">FRESH!</h1>
          <h1 className="home_top_offers">arrival</h1>
        </div>
      </div>

      {/* end of season */}
      <div className="home_end_of_season1">
        <img src={home_end} width="100%" />
        <div className="home_end_of_data">
          <div className="home_end_of_data1">
            <Marquee pauseOnHover>
              <div className="home_off">
                <div>
                  <h1 className="home_price">
                    PRICE CASH
                    <span className="home_price_cash">50-70% OFF</span>
                  </h1>
                </div>
                <div>
                  <h1 className="home_price">
                    PRICE CASH
                    <span className="home_price_cash">50-70% OFF</span>
                  </h1>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <div>
        <div className="row home_flat_useCode1">
          <div className="col-lg-6">
            <div className="home_flat_useCode_onallproduct">
              <div className="home_flat_img">
                <img src={useCode} width="100%" />
              </div>
              <div className="home_flat_useCode_onallproduct1">
                <div className="home_flat_useCode_onallproduct_detail">
                  <div>
                    <h3 className="home_onallproduct_1">FLAT ₹100 OFF</h3>
                    <h5 className="home_onallproduct_">ON ALL PRODUCTS</h5>
                  </div>
                  <div>
                    <h5 className="home_onallproduct_">USE CODE</h5>
                    <h5 className="home_flat_background">012345678</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="home_flat_useCode_onallproduct">
              <div className="home_flat_img">
                <img src={useCode} width="100%" />
              </div>
              <div className="home_flat_useCode_onallproduct1">
                <div className="home_flat_useCode_onallproduct_detail">
                  <div>
                    <h3 className="home_onallproduct_1">FLAT ₹200 OFF</h3>
                    <h5 className="home_onallproduct_">ON ALL PRODUCTS</h5>
                  </div>
                  <div>
                    <h5 className="home_onallproduct_">USE CODE</h5>
                    <h5 className="home_flat_background">012345678</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* offers for juniors */}
      <div className="home_junior">
        <div className="text-center">
          <h1 className="home_top_offer">OFFERS</h1>
          <h3 className="home_top_offers1">FOR JUNIOR</h3>
        </div>
      </div>

      <div className="row home_total_details">
        <div className="col-lg-3">
          <div className="home_winders_kids">
            <div className="home_winter_details">
              <img src={winter} alt="winter" width="100%" />
            </div>
            <div className="home_winter_details1">
              <h4 className="home_font_size">WINTER WEAR AT</h4>
              <h4 className="home_font_weight">₹ 50</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="home_winders_kids">
            <div className="home_winter_details">
              <img src={dresses} alt="winter" width="100%" />
            </div>
            <div className="home_winter_details1">
              <h4 className="home_font_size">DRESSES</h4>
              <h4 className="home_font_weight">UPTO 80% OFF</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="home_winders_kids">
            <div className="home_winter_details">
              <img src={kids} alt="winter" width="100%" />
            </div>
            <div className="home_winter_details1">
              <h4 className="home_font_size">T SHIRTS START AT</h4>
              <h4 className="home_font_weight">₹ 150</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="home_winders_kids">
            <div className="home_winter_details">
              <img src={infant} alt="winter" width="100%" />
            </div>
            <div className="home_winter_details1">
              <h4 className="home_font_size">INFANT WEAR AT</h4>
              <h4 className="home_font_weight">₹ 200</h4>
            </div>
          </div>
        </div>
        {/* SHOP BY CATEGORY */}
        <div className="home_shop_category">
          <div className="home_shop_category1">
            <h1 className="home_shop_category2">SHOP BY CATEGORY</h1>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details1} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details2} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details3} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details4} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details5} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details6} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details7} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details8} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="home_background_details">
              <div className="home_details_img">
                <div className="home_details_img1">
                  <img src={home_details9} width="100%" />
                </div>
              </div>
              <div className="home_details_content1">
                <h4>ETIHNIC WEAR</h4>
                <h5 className="fw-bold">SHOP NOW</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default Home;
