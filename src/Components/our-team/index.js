/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./ourteam.scss";
import "../carousel/carousel.scss";
import Aditi from "../../assets/Aditi-Kothari.png";
import Bharathi from "../../assets/Bharathi.png";
import Carousel from "../carousel";
import ReadMore from "../read-more";
function OurTeam() {
  const data = [
    {
      imageSrc: Aditi,
      title: "Aditi Kothari",
      designation: "Founder & CEO",
      description:
        "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey. HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: Bharathi,
      title: "Bharathi Felix",
      designation: "Avp-Finance",
      description:
        "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey. HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: Aditi,
      title: "Aditi Kothari",
      designation: "Founder & CEO",
      description:
        "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey. HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: Aditi,
      title: "Aditi Kothari",
      designation: "Founder & CEO",
      description:
        "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey. HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
      features: ["Free Wifi", "Free breakfast"],
    },
  ];

  return (
    <div className="team-container">
      <div className="our-team">
        <p>Meet</p>
        <h1>Our Team</h1>
      </div>
      <div className="about-team">
        <div id="team-info">
          <p>
            We are <strong style={{ color: "#935073" }}> 85%</strong> women in
            our company.And the rest
            <strong style={{ color: "#87c05a" }}>15%</strong> wouldn’t want it
            any other way.
          </p>
          <p>
            The culture at HerKey is one of high accountability &
            expectations,coupled with unprecedented flexibility and support.
          </p>
          <p>
            Unlike the rest of the world, we didn’t need a pandemic to teach us
            about work-life balance. It’s the way of life here at HerKey.
          </p>
          <p>
            If we had the space, we would put every last one of us here.For now,
            meet our core team.
          </p>
        </div>
        <div className="core-team">
          <h2>our Core Team</h2>
          <div>
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
                      <ReadMore>{card.description}</ReadMore>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <h2>Our Advisors</h2>
          <div id="advisors">
            <div className="about-advisors">
              <div className="people-data">
                <span>
                  <img src={Aditi} alt={Aditi} className="photo" />
                </span>
                <div className="data-card">
                  <h6>Dhruv Shenoy</h6>
                </div>
              </div>
              <div className="description">
                <ReadMore>
                  "HerKey: India's Largest Career Engagement Platform for Women.
                  Women in India can engage with employers, explore
                  opportunities, learn, connect with peers, career champions and
                  create a successful professional journey. HerKey: India's
                  Largest Career Engagement Platform for Women. Women in India
                  can engage with employers, explore opportunities, learn,
                  connect with peers, career champions and create a successful
                  professional journey.",
                </ReadMore>
              </div>
            </div>
            <div className="about-advisors">
              <div className="people-data">
                <span>
                  <img src={Aditi} alt={Aditi} className="photo" />
                </span>
                <div className="data-card">
                  <h6>Dhruv Shenoy</h6>
                </div>
              </div>
              <div className="description">
                <ReadMore>
                  "HerKey: India's Largest Career Engagement Platform for Women.
                  Women in India can engage with employers, explore
                  opportunities, learn, connect with peers, career champions and
                  create a successful professional journey. HerKey: India's
                  Largest Career Engagement Platform for Women. Women in India
                  can engage with employers, explore opportunities, learn,
                  connect with peers, career champions and create a successful
                  professional journey.",
                </ReadMore>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
