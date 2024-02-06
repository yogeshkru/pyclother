import React, { useState } from "react";
import BannerSideBar from "../component/banners/BannerSideBar";
import BannerContent from "../component/banners/BannerContent";

function Banners() {
  const [active, setActive] = useState(1);
  return (
    <>
    <div className="container-fluid bg-light py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-2 sticky-top" style={{ top: '18%' }}>
          <BannerSideBar active={active} setActive={setActive} />
        </div>

        <div className="col-12 col-md-8">
          <BannerContent active={active} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Banners;
