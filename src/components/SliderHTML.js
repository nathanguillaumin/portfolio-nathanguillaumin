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
            <a href="https://audiowizard.fr/" target="_blank">
              <h3>AudioWizard's Website</h3>
            </a>
            <p>
              During that mission, I web designed and integrated the whole
              AudioWizard website with HTML and SCSS.
              <br />
              In order to gain time and to be more effective in my work, I used
              Gulp task manager to process tasks such as JS and CSS
              minifications...
              <br />
              <br />I also worked on SEO strategies: brought Audiowizard first
              position in first SERP on their targetted keywords.
            </p>
            <div className="web_img">
              <a href="https://audiowizard.fr/" target="_blank">
                <img
                  src={require("../img/custom/audiowizard-website.png")}
                  alt="AudioWizard website"
                  className="img-website"
                />
              </a>
            </div>
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

export default SliderHTML;