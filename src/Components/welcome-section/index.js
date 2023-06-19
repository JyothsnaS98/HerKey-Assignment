import React from "react";
import "./welcome.css";
import herkeylogo from "../../assets/welcome logo.svg";
import greenarrow from "../../assets/arrow-green.svg"
function WelcomeSection() {
  const aboutNumbers = [
    {
      number: "3.5M",
      category: "women",
    },
    {
      number: "10k",
      category: "companies",
    },
    {
      number: "800",
      category: "Learning partners",
    },
  ];
  return (
    <div>
      <div className="welcome-section-container">
        <div>
          <p className="welcome-text">Welcome</p>
          <img src={herkeylogo} alt="welcome" className="logo-img" />
        </div>
        <div className="info-container">
          <p style={{textAlign:'justify'}}>
            It’s not easy being a woman who wants to build her career. The
            challenges are many, opportunities are few, and the ceiling too
            limiting. We are here to change that.
          </p>
          <p style={{textAlign:'justify'}}>
            We seek to be the dependable companion for every woman on her career
            journey,
            <strong style={{ color: "#87C05A" }}>enabling her growth,</strong>
            opening up opportunities, creating meaningful engagement, and
            facilitating her career journey – onwards & upwards.
          </p>
          <div className="about-numbers">
            {aboutNumbers.map((data, index) => {
              return (
                <div className="categories">
                  <span style={{ fontSize: "40px" }}>{data.number}+</span>
                  <span style={{ fontSize: "12px" }}>{data.category}</span>
                </div>
              );
            })}
          </div>
          <div className="women-engagement">
            <section style={{display:'flex'}}>
              <p className="text">Engage with Women’s Career Champions</p>
              <img src={greenarrow} alt="arrow"/>
            </section>
            <div className="about-programmes">
                <button className="border-btn">Employers</button>
                <button className="border-btn">Employers</button>
                <button className="border-btn">Employers</button>
            </div>
                <button className="border-btn signup">Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
