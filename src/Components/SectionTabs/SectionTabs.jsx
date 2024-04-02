import React, { useState } from "react";
import "./SectionTabs.css";

const SectionTabs = () => {
  const [active, setActive] = useState("section-1");
  return (
    <div className="bg-white py-12 section-tabs sticky top-0">
      <div className="max-1920">
        <div className="container">
          <ul className="flex align-center justify-center">
            <li
              className={`uppercase ${active === "section-1" ? "active" : ""}`}
              onClick={() => setActive("section-1")}
            >
              <a href="#workSection">My Work</a>
            </li>
            <li
              className={`uppercase ${active === "section-2" ? "active" : ""}`}
              onClick={() => setActive("section-2")}
            >
              <a href="#contactSection">Contact Details</a>
            </li>
            <li
              className={`uppercase ${active === "section-3" ? "active" : ""}`}
              onClick={() => setActive("section-3")}
            >
              <a href="#socialSection">Social Links</a>
            </li>
            <li
              className={`uppercase ${active === "section-4" ? "active" : ""}`}
              onClick={() => setActive("section-4")}
            >
              <a href="#gallerySection">Gallery</a>
            </li>
            <li
              className={`uppercase ${active === "section-5" ? "active" : ""}`}
              onClick={() => setActive("section-5")}
            >
              <a href="#clientsSection">BRAND ASSOCIATIONS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionTabs;
