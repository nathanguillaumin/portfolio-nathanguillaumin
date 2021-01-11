import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import StartupBanner from "../components/Banner/StartupBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import CoreFeatures from "../components/Features/CoreFeatures";
import TechnosAndTools from "../components/TechnosAndTools";
import ScreenshowCase from "../components/ScreenshowCase";
import AppTestimonial from "../components/Testimonial/AppTestimonial";

export const Home = () => (
  <div className="body_wrapper">
    <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" />
    <StartupBanner />
    <TechnosAndTools />
    <ScreenshowCase />
    <CoreFeatures />
    <AppTestimonial />
    <Contact />
    <Footer FooterData={FooterData} />
  </div>
);
