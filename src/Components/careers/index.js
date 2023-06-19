import React, { useState } from "react";
import accenture from "../../assets/Accenture.png";
import airbus from "../../assets/Airbus.png";
import cisco from "../../assets/Cisco.png";
import myntra from "../../assets/Myntra.png";
import oracle from "../../assets/Oracle.png";
import lowes from "../../assets/Lowes.png";
import hp from "../../assets/Hp.png";
import pwc from "../../assets/PWC.png";
import simplilearn from "../../assets/Simplilearn.png";
import byteacademy from "../../assets/Byte-academy.png";
import hero from "../../assets/HERO-Vired.png";
import newton from "../../assets/Newton-school.png";
import "./careers.scss";
function Careers() {
  const [option, setoption] = useState("");
  const images = [accenture, airbus, cisco, myntra, oracle, lowes, hp, pwc];
  const experts = [simplilearn, byteacademy, hero, newton];
  console.log("OPT", option);
  return (
    <div className="career-wrapper">
      <div className="header-block">
        <h3>Be a Champion of</h3>
        <p>Women's Careers</p>
      </div>
      <div className="partner-block">
        <div className="partner-companies">
          <h2
            onClick={() => {
              setoption({ option: "employers" });
            }}
            className={
              option["option"] === "employers"
                ? `link-active-${option["option"]}`
                : `inactive-link`
            }
          >
            Employers
          </h2>
          <h2
            onClick={() => {
              setoption({ option: "experts" });
            }}
            className={
              option["option"] === "experts"
                ? `link-active-${option["option"]}`
                : `inactive-link`
            }
          >
            Experts
          </h2>
          <h2
            onClick={() => {
              setoption({ option: "eachother" });
            }}
            className={
              option["option"] === "eachother"
                ? `link-active-${option["option"]}`
                : `inactive-link`
            }
          >
            Each other
          </h2>
        </div>
        {option["option"] !== "experts" && option["option"] !== "eachother" && (
          <div className="logo">
            {images.map((data, index) => {
              return (
                <div style={{ width: "30px" }}>
                  <img src={data} alt="logo" />
                </div>
              );
            })}
          </div>
        )}
        {option["option"] === "experts" && (
          <div className="logo">
            {experts.map((data, index) => {
              return (
                <div style={{ width: "30px" }}>
                  <div>
                    <img src={data} alt="logo" />
                  </div>
                </div>
              );
            })}
            <div id="meet-us">
              <div>
                <p>Want to provide courses and servies to women learners?</p>
              </div>
              <div>
                <button>Meet US</button>
              </div>
            </div>
          </div>
        )}
        {option["option"] === "eachother" && (
          <div className="each-data">
            <div id="group-data">
              <span style={{ marginBottom: "25px" }}>
                Want to champion each other’s careers?
              </span>
              <span>
                This is a safe space for you to share and bond with women like
                you. Talk about your wins, big or small. About your challenges.
                Your milestones. Inspire and be inspired. Stay engaged with your
                career.
              </span>
            </div>
            <div>
              <button id="join">Join Groups</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Careers;
