import React, { useState } from "react";
import "./HeroSection.css";
import SocialShare from "./SocialShare";

const skills = [
  "Team management",
  "Entrepreneur",
  "Design Thinking",
  "Interior Designing",
  "Furniture Designing",
  "Top Voice Linkedin",
  "Certified Architect",
];

const HeroSection = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <section className="bg-orange hero-section text-white">
      <div className="section-wrapper py-10">
        <div className="hero-contact flex align-center">
          <a href="tel:+917270000000" target="_blank" rel="noreferrer">
            <img src="images/hero-phone-icon.webp" alt="Phone Icon" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=7270000000" target="_blank" rel="noreferrer">
            <img src="images/hero-whatsapp-icon.webp" alt="WhatsApp Icon" />
          </a>
        </div>
        <div className="container">
          <div className="hero-box text-center mx-auto relative z-10">
            <div className="hero-img rounded-full overflow-hidden mx-auto">
              <img
                src="images/profile-picture.webp"
                alt="Vansh Bhutan"
                width="378"
                height="378"
                className="w-full object-cover h-auto"
              />
            </div>
            <h1 className="uppercase">Vansh Butan</h1>
            <p className="hero-sub w-max mx-auto uppercase relative">
              Founder at Design cell
            </p>
            <p className="hero-desc">
              Founded in 1980, designcell has worked for more than 3 decades in{" "}
              <br /> building residential and commercial spaces.
            </p>
            <ul className="flex hero-skills justify-center">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <div
              className="hero-share flex align-center w-max mx-auto cursor-pointer"
              onClick={() => setOpenPopup(true)}
            >
              <span className="inline-block">Share</span>
              <img
                src="images/share-icon.webp"
                alt="Share Icon"
                width="27"
                height="27"
                className="h-auto object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="socialSharePopup"
        className={`social-share-popup ${openPopup ? "active" : ""}`}
      >
        <div
          className={`social-popup-overlay ${openPopup ? "active" : ""}`}
          onClick={() => setOpenPopup(false)}
        ></div>
        <div className="social-popup-content">
          <span
            className="close-social-popup"
            onClick={() => setOpenPopup(false)}
          >
            <img src="images/close-social-popup.png" alt="" />
          </span>
          <SocialShare />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
