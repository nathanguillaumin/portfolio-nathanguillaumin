import React, { useState } from "react";
import Sectitle from "./Title/Sectitle";
import SliderHTML from "./SliderHTML";
import SliderShopify from "./SliderShopify";
import SliderReact from "./SliderReact";
import SliderWebflow from "./SliderWebflow";
import SliderNode from "./SliderNode";
import SliderAPIPlatform from "./SliderAPIPlatform";
import SliderGrowth from "./SliderGrowth";

const TechnosAndTools = () => {
  const [show, setShow] = useState({
    html: true,
    react: false,
    node: false,
    apiPlatform: false,
    shopify: false,
    webflow: false,
    growth: false,
  });

  return (
    <section className="software_service_area sec_pad">
      <div className="container" id="technos-and-tools">
        <Sectitle
          Title="Technologies and tools I can use
          "
          sClass="sec_title text-center mb_70"
        />
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ul
              className="nav nav-tabs software_service_tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link active"
                  id="de-tab"
                  data-toggle="tab"
                  href="#html-css"
                  role="tab"
                  aria-controls="de"
                  aria-selected="true"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: true,
                        react: false,
                        node: false,
                        apiPlatform: false,
                        shopify: false,
                        webflow: false,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/html-css.png")}
                      alt="Logo of HTML and CSS"
                      className="logo-techno mb-2"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="saas-tab"
                  data-toggle="tab"
                  href="#react"
                  role="tab"
                  aria-controls="saas"
                  aria-selected="false"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: true,
                        node: false,
                        apiPlatform: false,
                        shopify: false,
                        webflow: false,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/react.png")}
                      alt="Logo of React.js"
                      className="logo-techno mb-2"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="saas-tab"
                  data-toggle="tab"
                  href="#node"
                  role="tab"
                  aria-controls="saas"
                  aria-selected="false"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: false,
                        node: true,
                        apiPlatform: false,
                        shopify: false,
                        webflow: false,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/node.png")}
                      alt="Logo of Node.js"
                      className="logo-techno mb-2"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="scale-tab"
                  data-toggle="tab"
                  href="#api-platform"
                  role="tab"
                  aria-controls="scale"
                  aria-selected="true"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: false,
                        node: false,
                        apiPlatform: true,
                        shopify: false,
                        webflow: false,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/api-platform.png")}
                      alt="Logo of API Platform"
                      className="api-platform-logo ml-2 mb-2"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="monitor-tab"
                  data-toggle="tab"
                  href="#shopify"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="false"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: false,
                        node: false,
                        apiPlatform: false,
                        shopify: true,
                        webflow: false,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/shopify.png")}
                      alt="Logo of Shopify"
                      className="logo-techno mt-2 mb-2"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="monitor-tab"
                  data-toggle="tab"
                  href="#webflow"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="false"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: false,
                        node: false,
                        apiPlatform: false,
                        shopify: false,
                        webflow: true,
                        growth: false,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/webflow.png")}
                      alt="Logo of Webflow"
                      className="logo-techno my-4"
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item m-auto text-center">
                <a
                  className="nav-link"
                  id="monitor-tab"
                  data-toggle="tab"
                  href="#growth"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="false"
                  onClick={() => {
                    setTimeout(() => {
                      setShow({
                        html: false,
                        react: false,
                        node: false,
                        apiPlatform: false,
                        shopify: false,
                        webflow: false,
                        growth: true,
                      });
                    }, 500);
                  }}
                >
                  <span className="icon">
                    <img
                      src={require("../img/custom/webmarketing.svg")}
                      alt="Logo of LinkedIn Sales Navigator"
                      className="logo-growth"
                    />
                  </span>
                  <h6 className="text-center">Growth and web marketing</h6>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="tab-content software_service_tab_content">
              <div
                className="tab-pane fade show active"
                id="html-css"
                role="tabpanel"
                aria-labelledby="de-tab"
              >
                <SliderHTML show={show} />
              </div>
              <div
                className="tab-pane fade"
                id="react"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <SliderReact show={show} />
              </div>
              <div
                className="tab-pane fade"
                id="webflow"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <div className="row">
                  <SliderWebflow show={show} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="node"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                <div className="row">
                  <SliderNode show={show} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="api-platform"
                role="tabpanel"
                aria-labelledby="secure-tab"
              >
                <div className="row">
                  <SliderAPIPlatform show={show} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="growth"
                role="tabpanel"
                aria-labelledby="scale-tab"
              >
                <SliderGrowth show={show} />
              </div>
              <div
                className="tab-pane fade"
                id="shopify"
                role="tabpanel"
                aria-labelledby="monitor-tab"
              >
                <SliderShopify show={show} setShow={setShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechnosAndTools;
