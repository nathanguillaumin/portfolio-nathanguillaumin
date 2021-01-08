import React, { Component } from "react";
import Reveal from "react-reveal";
import SliderHTML from "../SliderHTML";
import SliderShopify from "../SliderShopify";

class StartupFeatures extends Component {
  render() {
    return (
      <section className="startup_fuatures_area sec_pad technos-container">
        <div className="container">
          <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
            <Reveal effect="fadeInLeft">
              <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">
                Technos and tools I am able to use
              </h2>
            </Reveal>
          </div>
          <ul className="nav nav-tabs startup_tab" id="myTab" role="tablist">
            <Reveal effect="fadeInLeft">
              <li className="nav-item technos-item">
                <a
                  className="nav-link active"
                  id="market-tab"
                  data-toggle="tab"
                  href="#html-css"
                  role="tab"
                  aria-controls="market"
                  aria-selected="true"
                >
                  <span className="icon">
                    <i class="fab fa-html5 html-logo mr-2"></i>
                    <i class="fab fa-css3-alt css-logo"></i>
                  </span>
                  <h3>HTML / SCSS</h3>
                </a>
              </li>
            </Reveal>
            <Reveal effect="fadeInLeft" duration={1400}>
              <li className="nav-item technos-item">
                <a
                  className="nav-link"
                  id="app-tab"
                  data-toggle="tab"
                  href="#react"
                  role="tab"
                  aria-controls="app"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i class="fab fa-react react-logo"></i>
                  </span>
                  <h3>React.js</h3>
                </a>
              </li>
            </Reveal>
            <Reveal effect="fadeInLeft" duration={2000}>
              <li className="nav-item technos-item">
                <a
                  className="nav-link"
                  id="hubstaff-tab"
                  data-toggle="tab"
                  href="#hubstaff"
                  role="tab"
                  aria-controls="hubstaff"
                  aria-selected="false"
                >
                  <span className="icon">
                    <i class="fab fa-node node-logo"></i>
                  </span>
                  <h3>Node.js</h3>
                </a>
              </li>
            </Reveal>
            <Reveal effect="fadeInLeft" duration={2400}>
              <li className="nav-item technos-item">
                <a
                  className="nav-link"
                  id="engine-tab"
                  data-toggle="tab"
                  href="#engine"
                  role="tab"
                  aria-controls="engine"
                  aria-selected="false"
                >
                  <span className="icon">
                    <img
                      src={require("../../img/custom/api-platform-logo.png")}
                      alt="Logo of API Platform"
                      className="api-platform-logo mb-2"
                    />
                  </span>
                  <h3>API Platform</h3>
                </a>
              </li>
            </Reveal>
            <Reveal effect="fadeInLeft" duration={2800}>
              <li className="nav-item technos-item">
                <a
                  className="nav-link"
                  id="business-tab"
                  data-toggle="tab"
                  href="#shopify"
                  role="tab"
                  aria-controls="business"
                  aria-selected="false"
                >
                  <span className="icon">
                    <img
                      src={require("../../img/custom/shopify_logo.png")}
                      alt="Logo of Shopify"
                      className="shopify-logo mb-2"
                    />
                  </span>
                  <h3>Shopify</h3>
                </a>
              </li>
            </Reveal>
            <Reveal effect="fadeInLeft" duration={2800}>
              <li className="nav-item technos-item">
                <a
                  className="nav-link"
                  id="business-tab"
                  data-toggle="tab"
                  href="#webflow"
                  role="tab"
                  aria-controls="business"
                  aria-selected="false"
                >
                  <span className="icon">
                    <img
                      src={require("../../img/custom/logo-webflow.png")}
                      alt="Logo of Webflow"
                      className="webflow-logo mb-2"
                    />
                  </span>
                  <h3>Webflow</h3>
                </a>
              </li>
            </Reveal>
          </ul>
          <div className="tab-content startup_tab_content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="html-css"
              role="tabpanel"
              aria-labelledby="market-tab"
            >
              <SliderHTML />
            </div>
            <div
              className="tab-pane fade show"
              id="webflow"
              role="tabpanel"
              aria-labelledby="market-tab"
            >
              <div className="startup_tab_img">
                <a
                  href="http://jobooster.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Jobooster's Website</h3>
                </a>
                <p>
                  Jobooster is a side project I am conducting with a friend. We
                  propose coaching for people who are looking for a job.
                  <br />
                  <br />I am in charge of the "tech part":
                  <ul>
                    <li>Building the website on Webflow on e-commerce plan</li>{" "}
                    <li>Finding the best snippets and tools to improve UX</li>{" "}
                    <li>Creating SEO strategies</li>
                  </ul>
                </p>
                <div className="web_img">
                  <a
                    href="http://jobooster.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/custom/jobooster-website.png")}
                      alt="Jobooster website"
                      className="img-website"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="react"
              role="tabpanel"
              aria-labelledby="app-tab"
            >
              <div className="startup_tab_img">
                <a
                  href="https://shop.sixpad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>1) AudioWizard's software</h3>
                </a>
                <p>
                  I worked on AudioWizard new features software during 6 months.
                  <br />
                  <br />
                  AudioWizard is using React.js as front-end technology and I
                  have been able to provide my knowledge to improve the
                  software.
                  <br />
                  Working in agile role, I had features to implement during each
                  week's sprint. I also sometimes stick to the code reviewer's
                  role as well as a bug fixer.
                </p>
                <div className="web_img">
                  <a
                    href="https://shop.sixpad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/custom/sixpad-website.png")}
                      alt="Sixpad website"
                      className="img-website"
                    />
                  </a>
                </div>
              </div>
              <div className="startup_tab_img">
                <a
                  href="https://monsterproducts.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>2) Monster's Website</h3>
                </a>
                <p>
                  As Sixpad, Monster is an international brand. I also built
                  their Shopify website for French market.
                  <br />
                  <br />I web designed following Monster's guidelines in order
                  to become a big French ecommerce for high-performance
                  headphones, speakers, HDMI cables and power solutions.
                </p>
                <div className="web_img">
                  <a
                    href="https://monsterproducts.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/custom/monster-website.png")}
                      alt="Monster website"
                      className="img-website"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="hubstaff"
              role="tabpanel"
              aria-labelledby="hubstaff-tab"
            >
              <div className="startup_tab_img">
                <div className="web_img">
                  <img src={require("../../img/new/web_image.jpg")} alt="" />
                </div>
                <div className="phone_img">
                  <img src={require("../../img/new/iPhoneX.png")} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="engine"
              role="tabpanel"
              aria-labelledby="engine-tab"
            >
              <div className="startup_tab_img">
                <div className="web_img">
                  <img src={require("../../img/new/web_image.jpg")} alt="" />
                </div>
                <div className="phone_img">
                  <img src={require("../../img/new/iPhoneX.png")} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="shopify"
              role="tabpanel"
              aria-labelledby="business-tab"
            >
              <SliderShopify />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StartupFeatures;
