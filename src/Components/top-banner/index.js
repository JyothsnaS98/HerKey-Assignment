import React from "react";
import bannerimage from "../../assets/Main-Banner.webp";
import "./top-banner.css";
function TopBanner() {
  return (
    <div>
      {/* <div className='banner-1'>
            <span>we are at jobsforher.com until 2024</span>
            <span style={{paddingLeft:"20px"}}> &gt;  &gt;</span>
        </div>
        <div className='banner-img-caontainer'>
           <div className='banner-img'>
                <div>
                    <span>hi</span>
                    <p>lorem espum 40</p>
                </div>
           </div>
        </div> */}
      <div className="banner-1">
        <span>we are at jobsforher.com until 2024</span>
        <span style={{ paddingLeft: "20px" }}> &gt; &gt;</span>
      </div>
      <div className="banner-img-caontainer">
        <div className="banner-img">
          <div className="banner-text">
            <span className="banner-head">
              India's Largest Career engagement Program for women
            </span>
            <div>
              <button className="btn">Oppurtunities</button>
              <button className="btn">Learning</button>
              <button className="btn">Communities</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
