import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import StartupBanner from "../components/Banner/StartupBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import StartupFeatures from "../components/Features/StartupFeatures";
import CoreFeatures from "../components/Features/CoreFeatures";

export const Home = () => (
  <div className="body_wrapper">
    <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" />
    <StartupBanner />
    <StartupFeatures />
    <CoreFeatures />
    <Contact />
    <Footer FooterData={FooterData} />
  </div>
);
