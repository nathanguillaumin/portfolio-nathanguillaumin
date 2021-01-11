import React from "react";
import Slider from "react-slick/";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabitem from "./Service/Sservice/CloudServiceTabItem";

const SliderGrowth = ({ show }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
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

  if (!show.growth) {
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
          <div className="row d-flex">
            <Tabitem />
          </div>
          <div className="startup_tab_img">
            <h3>Sendinblue growth machine</h3>
            <p>
              Sendinblue is a SaaS solution for relationship marketing. I have
              worked with them and helped to build a growth machine.
              <br />
              The aim was to make scripts from different tools in order to get
              all the needed details about clients. Then, the focus was to
              centralize these scripts (Google Sheet) and automate their launch
              thanks to Google scripts.
              <br />
              <br />I created scripts and gathered data from the different
              tools:
              <ul>
                <li>250ok</li>
                <li>SerpAPI</li>
                <li>PhantomBuster</li>
                <li>Sales Navigator</li>
                <li>DropContact</li>
                <li>Lusha</li>
              </ul>
            </p>

            <img
              src={require("../img/custom/sendinblue.png")}
              alt="Sendinblue logo"
              className="img-website"
            />
          </div>
        </Slider>
      </React.Fragment>
    );
};

export default SliderGrowth;
