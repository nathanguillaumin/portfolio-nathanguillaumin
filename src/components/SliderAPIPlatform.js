import React from "react";
import Slider from "react-slick/";
import CircularProgress from "@material-ui/core/CircularProgress";

const SliderAPIPlatform = ({ show }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!show.apiPlatform) {
    return (
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        <CircularProgress />
      </div>
    );
  } else
    return (
      <React.Fragment>
        <Slider {...settings} className="case_studies_slider">
          <div className="startup_tab_img">
            <a
              href="https://invoice-handler-react.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>SymReact project</h3>
            </a>
            <p>
              API Platform is a REST and GraphQL framework to build modern
              API-driven projects.
              <br />
              SymReact is a project I have created and deployed in order to
              learn API Platform. On this project, I display a list of customers
              and their belongings invoices. It is possible to create, change
              and delete customers and invoices. The aim is to follow accounting
              for a company.
            </p>
            <a
              href="https://invoice-handler-react.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/symreact.png")}
                alt="Symreact project"
                className="img-website"
              />
            </a>
          </div>
        </Slider>
      </React.Fragment>
    );
};

export default SliderAPIPlatform;
