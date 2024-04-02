import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import SectionTabs from "./Components/SectionTabs/SectionTabs.jsx";
import WorkSection from "./Components/WorkSection/WorkSection.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";
import SocialSection from "./Components/SocialSection/SocialSection.jsx";
import GallerySection from "./Components/GallerySection/GallerySection.jsx";
import ClientsSection from "./Components/ClientsSection/ClientsSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="main" id="content-to-pdf">
      <HeroSection />
      <SectionTabs />
      <WorkSection />
      <ContactSection />
      <SocialSection/>
      <GallerySection/>
      <ClientsSection/>
      <Footer/>
    </div>
  );
};

export default App;
