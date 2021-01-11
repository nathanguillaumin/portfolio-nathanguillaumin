import React, { Component } from "react";
import { Link } from "react-scroll";
import Reveal from "react-reveal/Reveal";
class Footer extends Component {
  render() {
    let FooterData = this.props.FooterData;
    return (
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top footer-padding">
          <div className="container">
            <div className="row">
              {FooterData.AboutWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="f_widget about-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <ul className="list-unstyled f_list">
                          {widget.menuItems.map((item) => {
                            return (
                              <li key={item.id}>
                                <Link
                                  className="nav-link links-footer"
                                  activeClass="active"
                                  to={item.url}
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={500}
                                >
                                  {item.text}
                                </Link>
                              </li>
                            );
                          })}
                          <li>
                            <a
                              className="nav-link links-footer link-mail"
                              href="mailto:nathan.guillaumin@outlook.com"
                              style={{ fontWeight: "600" }}
                            >
                              nathan.guillaumin@outlook.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              {FooterData.SocialLinks.map((widget) => {
                return (
                  <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="f_widget social-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <div className="f_social_icon">
                          {widget.menuItems.map((item) => {
                            return (
                              <a
                                href={item.url}
                                key={item.id}
                                className="mr-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ zIndex: "3000" }}
                              >
                                <i className={item.icon}></i>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">{FooterData.copywrite}</p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with <i className="icon_heart"></i> in{" "}
                  <span className="fab fa-react react-logo p-0"></span> React.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
