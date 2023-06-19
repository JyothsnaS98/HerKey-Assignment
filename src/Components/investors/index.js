import React from "react";
import kalaari from "../../assets/Kalaari-Logo.svg";
import asst360 from "../../assets/360-WEB.svg";
import Aditi from "../../assets/Aditi-Kothari.png";
import Bharathi from "../../assets/Bharathi.png";
import "./investors.scss";
import Carousel from "../carousel";
function Investors() {
    const data = [
        {
          imageSrc: Aditi,
          title: "Aditi Kothari",
          designation: "Founder & CEO",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
          imageSrc: Bharathi,
          title: "Bharathi Felix",
          designation: "Avp-Finance",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
          imageSrc: Aditi,
          title: "Aditi Kothari",
          designation: "Founder & CEO",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
          imageSrc: Aditi,
          title: "Aditi Kothari",
          designation: "Founder & CEO",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
      ];
  return (
    <div className="investors-container">
      <div className="investors-heading">
        <p>Our</p>
        <h1>Investors</h1>
      </div>
      <div className="investors-data">
        <div id="investor-logo">
          <div>
            <img src={kalaari} alt="kalaari" />
          </div>
          <div>
            <img
              src={asst360}
              alt="kalaari"
              style={{ height: "70px", width: "100px" }}
            />
          </div>
        </div>
        <div id="about-investors">
          <div className="about-advisors">
            <div className="people-data">
              <span>
                <img src={Aditi} alt={Aditi} className="photo" />
              </span>
              <div className="data-card">
                <h6>Bharathi</h6>
              </div>
            </div>
            <div className="description">
              <p>
                {" "}
                "HerKey: India's Largest Career Engagement Platform for Women.
                Women in India can engage with employers, explore opportunities,
                learn, connect with peers, career champions and create a
                successful professional journey.",
              </p>
            </div>
          </div>
          <div className="about-advisors">
            <div className="people-data">
              <span>
                <img src={Bharathi} alt="Bharthi" className="photo" />
              </span>
              <div className="data-card">
                <h6>Bharathi</h6>
              </div>
            </div>
            <div className="description">
              <p>
                {" "}
                "HerKey: India's Largest Career Engagement Platform for Women.
                Women in India can engage with employers, explore opportunities,
                learn, connect with peers, career champions and create a
                successful professional journey.",
              </p>
            </div>
          </div>
        </div>


        {/* Angel Investors */}
        <div style={{marginTop:'3rem'}}>
            <h2 style={{marginBottom:'-2rem',textAlign:'left'}} >Our Angel Investors </h2>
            <div style={{marginLeft:'-22px'}}>
            <Carousel>
              {data.map((card, index) => (
                <div key={index}>
                  <div className="about-people">
                    <div className="people-data">
                      <span>
                        <img
                          src={card.imageSrc}
                          alt={card.title}
                          className="photo"
                        />
                      </span>
                      <div className="data-card">
                        <h6>{card.title}</h6>
                        <p>{card.designation}</p>
                      </div>
                    </div>
                    <div className="description">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;
