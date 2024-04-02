import React from "react";
import "./SocialSection.css";

const socialList = [
  {
    icon: "images/facebook-icon.webp",
    title: "Facebook",
    link: "https://facebook.com/",
  },
  {
    icon: "images/insta-icon.webp",
    title: "Instagram",
    link: "https://instagram.com/",
  },
  {
    icon: "images/twitter-icon.webp",
    title: "Twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "images/youtube-icon.webp",
    title: "Youtube",
    link: "https://youtube.com/",
  },
  {
    icon: "images/whatsapp-icon.webp",
    title: "Whatsapp",
    link: "https://whatsapp.com/",
  },
  {
    icon: "images/linkedin-icon.webp",
    title: "Linkedin",
    link: "https://linkedin.com/",
  },
];

const SocialSection = () => {
  return (
    <section className="bg-white py-18" id="socialSection">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between social-wrapper">
            <div className="social-thumb">
              <img
                src="images/social-thumb.webp"
                alt="Social thumbnail"
                className="w-full object-contain h-auto"
                width="610"
                height="625"
              />
            </div>
            <div className="social-content-box">
              <div className="section-header">
                <h2 className="uppercase">
                  {" "}
                  <span>Social Media</span> <br /> Handles
                </h2>
                <div className="social-thumb-mobile hidden">
                  <img
                    src="images/social-thumb.webp"
                    alt="Social thumbnail"
                    className="w-full object-contain h-auto"
                    width="610"
                    height="625"
                  />
                </div>
                <p className="section-description">
                  Embark on a journey with us beyond these pixels. Dive deeper
                  into our world, <br /> where creativity thrives and
                  inspiration abounds.{" "}
                </p>
              </div>
              <ul className="social-list flex">
                {socialList.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      className="block text-center w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={social.icon}
                        alt={social.title}
                        className="object-contain h-auto w-full"
                      />
                      <p>{social.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
