import React from "react";
import Slider from "react-slick/";
import CircularProgress from "@material-ui/core/CircularProgress";

const SliderWebflow = ({ show }) => {
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

  if (!show.webflow) {
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
              href="http://jobooster.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Jobooster's Website</h3>
            </a>
            <div>
              Jobooster is a side project I am conducting with a friend. We
              propose coaching for people who are looking for a job.
              <br />
              <br />I am in charge of the "tech part":
              <ul>
                <li>Building the website on Webflow on e-commerce plan</li>{" "}
                <li>Finding the best snippets and tools to improve UX</li>{" "}
                <li>Creating SEO strategies</li>
              </ul>
            </div>
            <a
              href="http://jobooster.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/jobooster-website.png")}
                alt="Jobooster website"
                className="img-website"
              />
            </a>
          </div>
        </Slider>
      </React.Fragment>
    );
};

export default SliderWebflow;
