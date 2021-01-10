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
              href="https://shop.sixpad.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Sixpad's Website</h3>
            </a>
            <p>
              Sixpad is an international sports accessories brand working with
              Cristiano Ronaldo.
              <br />
              I designed their Shopify store for French market. I chose a theme,
              use a page builder and integrated the contents.
              <br />
              <br />
              Off-page and on-page SEO was of course an important topic: I chose
              titles, meta-descs and keywords to make Sixpad ranked among the
              best.
            </p>
            <a
              href="https://shop.sixpad.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/sixpad-website.png")}
                alt="Sixpad website"
                className="img-website"
              />
            </a>
          </div>
          <div className="startup_tab_img">
            <a
              href="https://monsterproducts.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Monster's Website</h3>
            </a>
            <p>
              As Sixpad, Monster is an international brand. I also built their
              Shopify website for French market.
              <br />
              <br />I web designed following Monster's guidelines in order to
              become a big French ecommerce for high-performance headphones,
              speakers, HDMI cables and power solutions.
            </p>
            <a
              href="https://monsterproducts.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/monster-website.png")}
                alt="Monster website"
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
