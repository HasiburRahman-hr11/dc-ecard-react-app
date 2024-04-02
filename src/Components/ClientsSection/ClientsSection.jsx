import React from "react";
import './ClientsSection.css';

const clientList = [
  { name: "dlf emporio", icon: "images/brand-logo-1.webp" },
  { name: "DLF Promenade", icon: "images/brand-logo-2.webp" },
  { name: "TATA Housing", icon: "images/brand-logo-3.webp" },
  { name: "godrej properties", icon: "images/brand-logo-4.webp" },
  { name: "emaar", icon: "images/brand-logo-5.webp" },
  { name: "Raintree design", icon: "images/brand-logo-6.webp" },
  { name: "Home Identity", icon: "images/brand-logo-7.webp" },
  { name: "Unitech Group", icon: "images/brand-logo-8.webp" },
  { name: "Oberoi Realty Limited", icon: "images/brand-logo-9.webp" },
  { name: "L&T Realty Ltd.", icon: "images/brand-logo-10.webp" },
];

const ClientsSection = () => {
  return (
    <section className="bg-white py-18 clients-section" id="clientsSection">
      <div className="max-1920">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              My Years Of{" "}
              <span>
                Relationship With <br /> Esteemed Clientele
              </span>
            </h2>
            <p className="section-description">
              Explore the synergy of quality and innovation through our esteemed
              brand associations. We're proud to collaborate with <br />{" "}
              industry leaders who share our commitment to excellence.
            </p>
          </div>
          <ul className="clients-list">
            {clientList.map((client, index) => (
              <li key={index} className="text-center">
                <div className="client-icon">
                  <img
                    src={client.icon}
                    alt="Logo"
                    className="object-contain w-full h-auto"
                  />
                </div>
                <p className="uppercase">{client.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
