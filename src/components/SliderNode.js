import React, { Component } from "react";
import Slider from "react-slick/";

class SliderHTML extends Component {
  render() {
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
    return (
      <React.Fragment>
        <Slider {...settings} className="case_studies_slider">
          <div className="startup_tab_img">
            <a
              href="http://jobooster.io/"
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
  }
}

export default SliderHTML;
