import React from "react";
import Slider from "react-slick/";
import CircularProgress from "@material-ui/core/CircularProgress";

const SliderNode = ({ show }) => {
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

  if (!show.node) {
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
              href="https://valiris-back-office.vbserveur.duckdns.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Valiris website</h3>
            </a>
            <p>
              I worked for the client SCI Gervais Immobilier who whished a
              custom website to display and offer its appartments for short-term
              rent.
              <br />
              <br />
              With two of my colleagues, we created a REST API and used Express
              framework of Node.js in order to make CRUDs and to handle the
              back-end of the website.
            </p>
            <a
              href="https://valiris-back-office.vbserveur.duckdns.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/valiris-back.png")}
                alt="Valiris website"
                className="img-website"
              />
            </a>
          </div>
        </Slider>
      </React.Fragment>
    );
};

export default SliderNode;
