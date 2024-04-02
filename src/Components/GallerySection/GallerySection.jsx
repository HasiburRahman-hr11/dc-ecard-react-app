/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./GallerySection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`gallery-next flex justify-center align-center ${className}`}
      onClick={onClick}
    >
      <img
        src="images/gallery-slider-next.webp"
        alt="Next Slide"
        width="42"
        height="28"
        className="object-contain h-auto w-full"
      />
    </div>
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "5%",
  nextArrow: <NextArrow />,
  prevArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const galleryImages = [
  "images/gallery-img-1.webp",
  "images/gallery-img-2.webp",
  "images/gallery-img-3.webp",
  "images/gallery-img-1.webp",
  "images/gallery-img-2.webp",
  "images/gallery-img-3.webp",
];

const GallerySection = () => {
  return (
    <section className="bg-off-white py-18" id="gallerySection">
      <div className="max-1920">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="uppercase">
              My Images <span>Gallery</span>
            </h2>
          </div>
        </div>
        <div className="gallery-slider">
          <Slider {...settings}>
            {galleryImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt="Gallery Image"
                  className="w-full object-cover h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
