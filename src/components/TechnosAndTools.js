import React from "react";
import Sectitle from "./Title/Sectitle";
import Tabitem from "./Service/Sservice/CloudServiceTabItem";
import SliderHTML from "./SliderHTML";
import SliderShopify from "./SliderShopify";
import SliderReact from "./SliderReact";
import SliderWebflow from "./SliderWebflow";

const TechnosAndTools = () => {
  return (
    <section className="software_service_area sec_pad">
      <div className="container" id="technos-and-tools">
        <Sectitle
          Title="Technos and tools I am able to use
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="de-tab"
                  data-toggle="tab"
                  href="#html-css"
                  role="tab"
                  aria-controls="de"
                  aria-selected="true"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="saas-tab"
                  data-toggle="tab"
                  href="#react"
                  role="tab"
                  aria-controls="saas"
                  aria-selected="false"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="ma-tab"
                  data-toggle="tab"
                  href="#ma"
                  role="tab"
                  aria-controls="ma"
                  aria-selected="true"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="scale-tab"
                  data-toggle="tab"
                  href="#scale"
                  role="tab"
                  aria-controls="scale"
                  aria-selected="true"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="monitor-tab"
                  data-toggle="tab"
                  href="#shopify"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="false"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="monitor-tab"
                  data-toggle="tab"
                  href="#webflow"
                  role="tab"
                  aria-controls="monitor"
                  aria-selected="false"
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
                <SliderHTML />
              </div>
              <div
                className="tab-pane fade"
                id="react"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <SliderReact />
              </div>
              <div
                className="tab-pane fade"
                id="webflow"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <SliderWebflow />
              </div>
              <div
                className="tab-pane fade"
                id="ma"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="secure"
                role="tabpanel"
                aria-labelledby="secure-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="scale"
                role="tabpanel"
                aria-labelledby="scale-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="shopify"
                role="tabpanel"
                aria-labelledby="monitor-tab"
              >
                <SliderShopify />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechnosAndTools;
