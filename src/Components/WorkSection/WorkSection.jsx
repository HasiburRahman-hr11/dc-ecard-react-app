import React from "react";
import "./WorkSection.css";

const myWorks = [
  {
    _id: "w001",
    title: "Design Cell",
    description:
      "In the domain of Design Excellence, we specialize in the intricate  artistry of tailoring bespoke interiors that seamlessly fuse timeless  elegance with the essence.",
    icon: "images/dc-logo.webp",
    webUrl: "designcell.com",
  },
  {
    _id: "w002",
    title: "Concetto",
    description:
      "In the domain of Design Excellence, we specialize in the intricate  artistry of tailoring bespoke interiors that seamlessly fuse timeless  elegance with the essence.",
    icon: "images/dc-logo.webp",
    webUrl: "concetto.com",
  },
];

const WorkSection = () => {
  return (
    <section className="bg-white work-section" id="workSection">
      <div className="max-1920">
        <div className="container">
          <div className="section-header text-center mx-auto">
            <h2 className="uppercase">
              My Initiative & <span>Projects</span>
            </h2>
            <p className="section-description">
              Delving into the realm of Design Excellence, our forte lies in the
              art of sculpting interiors that epitomize nothing short of
              perfection. Within our dedicated team thrives a passion for
              manifesting your visions into tangible realities, where every
              detail is meticulously crafted and every aspect executed with
              unparalleled precision.
            </p>
          </div>
          <div className="work-list">
            {myWorks.map((work, index) => (
              <div
                key={work._id}
                className="work-item flex justify-between align-center"
              >
                <div className="work-icon flex justify-center align-center">
                  <img
                    src={work.icon}
                    alt="Work Icon"
                    className="object-contain h-auto w-full"
                  />
                </div>
                <div className="work-details">
                  <p className="work-sub uppercase">Company Name</p>
                  <h3>{work.title}</h3>
                  <p className="work-description text-dark">
                    {work.description}
                  </p>
                </div>
                <div className="work-link text-center">
                  <a
                    href={work.webUrl}
                    className="flex flex-col justify-center align-center w-full h-full"
                    target="_blank" rel="noreferrer"
                  >
                    <div>
                      <img
                        src="images/web-icon.webp"
                        alt="Website"
                        className="w-full h-auto object-contain"
                      />
                      <p className="uppercase">visit Website</p>
                    </div>
                    <h6 className="capitalize">{work.webUrl}</h6>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
