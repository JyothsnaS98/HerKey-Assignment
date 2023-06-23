import React from "react";
import herkeyCompanies from "../../assets/herkey_for_companies.webp";
import gapbanner from "../../assets/Gap_banner.webp";

import "./companies.scss";
function Companies() {
  return (
    <>
      <div className="main-container">
        <div className="block-1">
          <div className="heading">
            <p className="head1">HerKey for</p>
            <p className="head2">Companies</p>
            <button className="hiring">Start Hiring Now</button>
          </div>
          <div className="data">
            <p>
              Companies in India face a{" "}
              <strong style={{ color: "#87c05a" }}>
                leaky talent pipeline.
              </strong>
              They start with 30% women at the entry level, which drops to 10%
              at the management level and then 1% at the CXO level. We are here
              to change that.
            </p>
            <p style={{ marginTop: "2rem" }}>
              Through HerKey, companies can{" "}
              <strong style={{ color: "#935073" }}>
                recruit, retain and promote
              </strong>{" "}
              female talent by providing the required opportunities, learning
              and communities – all customized to women’s needs. Build career
              engagement for women candidates – inside and outside your
              organization – so that you can be part of their career growth
              journey.
            </p>
          </div>
        </div>
        <div className="img-container">
          <img src={herkeyCompanies} alt="img" style={{ height: "75%" }} />
        </div>{" "}
      </div>
      <div className="wrapper">
        <div id="row-heading">
          <h2>Bridging the</h2>
          <h1>Gap</h1>
        </div>
        <div className="data gap">
          <p>
            There is one core truth that holds good for every single woman from
            our large pool of 3.5M+ candidates{" "}
            <strong style={{ color: "#935073" }}>
              - Engagement fuels career growth.
            </strong>
            And there is a huge void when it comes to meaningful career
            engagement for women. That is the void we seek to bridge.
          </p>
          <p>
            HerKey is the place where women can engage with employers, mentors,
            experts and each other to fuel their career growth and empower their
            lives.
          </p>
        </div>
      </div>
      <div id="gap-banner">
        <img src={gapbanner} alt="gap banner" style={{ width: "100%" }} />
      </div>
    </>
  );
}

export default Companies;
