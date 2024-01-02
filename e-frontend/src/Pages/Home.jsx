import React, { useState, useEffect } from "react";

import home from "../assets/image/home_carousel1.jpeg";
import home1 from "../assets/image/home_carousel2.jpeg";
import home2 from "../assets/image/home_carousel3.jpeg";
import home3 from "../assets/image/home_carousel4.jpeg";
import home4 from "../assets/image/home_carousel5.jpeg";
import home5 from "../assets/image/home_carousel6.jpeg";
import home6 from "../assets/image/homeslide.jpeg";
import home7 from "../assets/image/homeslide1.jpeg";
import home8 from "../assets/image/homeslide2.jpeg";
import home9 from "../assets/image/homeslide3.jpeg";
import women from "../assets/image/women.png";
import men from "../assets/image/men1.png";
import marriage from "../assets/image/marriage.png";
import men1 from "../assets/image/MEN2.png";
function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const handleSelect1 = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 6;
      handleSelect(nextIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className="container">
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
            className={activeIndex === 0 ? "active" : ""}
            aria-current={activeIndex === 0 ? "true" : undefined}
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
            data-bs-interval="1000"
          >
            <img src={home} className="d-block w-100" alt="Slide 1" />
          </div>
          <div
            className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
            data-bs-interval="2000"
          >
            <img src={home1} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <img src={home2} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
            <img src={home3} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
            <img src={home4} className="d-block w-100" alt="Slide 5" />
          </div>
          <div className={`carousel-item ${activeIndex === 5 ? "active" : ""}`}>
            <img src={home5} className="d-block w-100" alt="Slide 6" />
          </div>
        </div>
      </div>

      {/* <div style={handleImage} className="mt-4">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-1"></div>
        </div>
      </div> */}

      <div className="mt-4 home_page_welcome">
        <div className="text-center">
          <h1 className="home_page_pondicherry">
            Welcome <span className="home_pondicherry">Pondicherry</span>
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
        <div className="row">
        <div className="col-lg-3 home_rating_details">
            <div className="home_rating_content">
              <img src={women} width="100%" />
            </div>
            <div className="home_rating_content2 text-center">
              <h2 className="fw-bold">TOPS</h2>
              <h4>min 20% OFF</h4>
            </div>
          </div>
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_content">
              <img src={men1} width="100%" />
            </div>
            <div className="home_rating_content2 text-center">
              <h2 className="fw-bold">ADIDAS</h2>
              <h4>min 20% OFF</h4>
            </div>
          </div>
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_content">
              <img src={men} width="100%" />
            </div>
            <div className="home_rating_content2 text-center">
              <h2 className="fw-bold">JACKET</h2>
              <h4>min 20% OFF</h4>
            </div>
          </div>
          <div className="col-lg-3 home_rating_details">
            <div className="home_rating_content">
              <img src={marriage} width="100%" />
            </div>
            <div className="home_rating_content1 text-center">
              <h2 className="fw-bold">PARTY WEAR</h2>
              <h4>min 20% OFF</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        
      </div>
    </div>
  );
}

export default Home;
