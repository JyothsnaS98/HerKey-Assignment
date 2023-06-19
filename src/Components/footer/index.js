import React from "react";
import linkedin from "../../assets/linkedin.svg";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer">
      <h1>
        We are at{" "}
        <strong ><a href="https://www.jobsforher.com/" style={{ color: "#959F5A" }}>jobsforher.com &gt;&gt;</a></strong>
        Until <strong style={{ color: "#935073" }}>2024</strong>
      </h1>
      <div className="footer-container">
        <div className="footer-data">
          <div>
            <p id="get-in-touch">
              Get in Touch <br />
              With Us
            </p>
            <span className="social-media">
              <a href="https://www.linkedin.com/company/herkeyformerlyjobsforher/">
                <img src={linkedin} alt="linkedIn" />
              </a>
              <a href="https://www.instagram.com/herkeyformerlyjobsforher/">
                <img src={insta} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/herkeyformerlyjobsforher">
                <img src={fb} alt="facebook" />
              </a>
              <a href="https://www.youtube.com/channel/UCADUzLe5HsGLWj_pTBvCNPw">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="https://twitter.com/herkey_">
                <img src={twitter} alt="twitter" />
              </a>
            </span>
          </div>
          <div className="footer-content">
            <p>India’s largest career engagement platform for women</p>
          </div>
          <div className="list-data">
            <ul>
              <li>Opportunities</li>
              <li>Learning </li>
              <li>Communities</li>
              <li>HerKey for Companies</li>
              <li> Be a champion</li>
            </ul>
          </div>
          <div className="list-data">
            <ul>
              <li>About us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <small id="bottom">
          <a>@Copyright JobsForHer 2023 |</a>
          <a href="https://www.jobsforher.com/terms-of-use"> Terms and Conditions |</a>
            <a href="https://www.jobsforher.com/privacy-policy"> Privacy Policy</a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
