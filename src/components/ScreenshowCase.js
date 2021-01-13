import React from "react";
import Sectitle from "./Title/Sectitle";
import Slider from "react-slick";
import { screenshots } from "./screenshotsData";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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

const ScreenshowCase = () => {
  return (
    <section className="app_screenshot_area sec_pad" id="showcase">
      <div className="container custom_container p0">
        <Sectitle
          sClass="sec_title text-center mb_70"
          Title="Projects screenshots"
          tClass="t_color3 mb_20"
          TitleP="Please take a look at some of my recent projects!"
        />
        <div className="app_screen_info" style={{ cursor: "grab" }}>
          <Slider className="app_screenshot_slider" {...settings}>
            {screenshots.map((s) => {
              return (
                <div className="item" key={s.id}>
                  <div className="screenshot_img">
                    <img
                      src={require(`../img/screenshots_portfolio/${s.name}.png`)}
                      alt={s.name}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default ScreenshowCase;
