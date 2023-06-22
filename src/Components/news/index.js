import React from 'react'
import Aditi from "../../assets/Aditi-Kothari.png";
import art5 from '../../assets/Art-5.jpeg'
import art3 from '../../assets/Art-3.jpg'
import art4 from '../../assets/Art-4.webp'
import './news.scss';
import Carousel from '../carousel';
function News() {
    const data = [
        {
          imageSrc: art5,
          title: "INC42",
          designation: "Founder & CEO",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
          imageSrc: art3,
          title: "People Matters",
          designation: "Avp-Finance",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
          imageSrc: art4,
          title: "BWdisrupt Business World",
          designation: "Founder & CEO",
          description:
            "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
          features: ["Free Wifi", "Free breakfast"],
        },
        {
            imageSrc: art4,
            title: "Aditi Kothari",
            designation: "Founder & CEO",
            description:
              "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
            features: ["Free Wifi", "Free breakfast"],
          },{
            imageSrc: art4,
            title: "Aditi Kothari",
            designation: "Founder & CEO",
            description:
              "HerKey: India's Largest Career Engagement Platform for Women. Women in India can engage with employers, explore opportunities, learn, connect with peers, career champions and create a successful professional journey.",
            features: ["Free Wifi", "Free breakfast"],
          },
        
      ];
  return (
    <div className='news-container'>
        <div className='news-head'>
        <p>In the</p>
        <h1>News</h1>
        </div>
        <div style={{width:'50%'}}>
        <Carousel>
              {data.map((card, index) => (
                <div key={index}>
                 <div className='carousel-body'>
                    <div className='img-block'>
                        <img src={card.imageSrc} className='news-image' alt="img"/>
                    </div>
                    <div>
                        <p id="block-head">{card.title}</p>
                        <p id="desc">{card.description}</p>
                    </div>
                </div>
                </div>
              ))}
            </Carousel>
        </div>
    </div>
  )
}

export default News