import React, { Component } from "react";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <img
                  src={require("../img/custom/logo_white.png")}
                  style={{ width: "60%" }}
                  alt="White logo of Nathan Guillaumin's Portfolio"
                />
                <img
                  src={require("../img/custom/logo_2.png")}
                  style={{ width: "60%" }}
                  alt="Logo of Nathan Guillaumin's Portfolio"
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="about-me"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      About me
                    </Link>
                  </li>

                  <li className="dropdown submenu nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="technos-and-tools"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      My technos and tools
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="working-with-me"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      Working with me
                    </Link>
                  </li>
                </ul>
                <Link
                  className={`btn_get btn_hover ${hbtnClass}`}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
