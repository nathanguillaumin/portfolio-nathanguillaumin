import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const StBanner = () => {
  return (
    <section className="agency_banner_area_two" id="about-me">
      <div className="dot_shap one"></div>
      <div className="dot_shap two"></div>
      <div className="dot_shap three"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Fade left>
              <img
                className="agency_banner_img"
                src={require("../../img/custom/avatar_nathan.svg")}
                alt=""
                style={{ width: "80%" }}
              />
            </Fade>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
            <Fade bottom cascade>
              <div className="agency_content_two">
                <h2 className="f_700 f_size_40 l_height50 w_color mb_20">
                  Nathan Guillaumin, web developer
                </h2>
                <p className="f_400 w_color l_height28">
                  Welcome to my own portfolio, I hope you will find all the
                  details you might need.
                  <br />
                  <br />I have specialized with front-end design interfaces
                  thanks to React.js and SCSS, and also worked with back-end
                  technologies such as Node.js, API Platform and Symfony5.
                </p>
                <div className="action_btn d-flex align-items-center mt_40">
                  <Link
                    className="btn_hover agency_banner_btn"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StBanner;
