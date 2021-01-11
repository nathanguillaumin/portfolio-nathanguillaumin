import React from "react";
import Slider from "react-slick/";
import CircularProgress from "@material-ui/core/CircularProgress";

const SliderReact = ({ show }) => {
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

  if (!show.react) {
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
            <h3>AudioWizard's software</h3>
            <p>
              I worked on AudioWizard new features software during 6 months.
              <br />
              <br />
              AudioWizard is using React.js as front-end technology and I have
              been able to provide my knowledge to improve the software.
              <br />
              Working in agile role, I had features to implement during each
              week's sprint. I also sometimes stick to the code reviewer's role
              as well as a bug fixer.
            </p>
            <img
              src={require("../img/custom/audiowizard-software.png")}
              alt="Audiowizard software"
              className="img-website"
            />
          </div>
          <div className="startup_tab_img">
            <a
              href="https://weathersuggest-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Weather Suggest application</h3>
            </a>
            <p>
              Weather Suggest is a project I have worked on when I started to
              learn React.js.
              <br />
              <br />
              WeatherSuggest is a web application displaying the weather
              forecasts according to the users' preferences whether it be by
              geolocating or by choosing a position. My aim was also to provide
              air quality indices and suggestion of clothes according to
              weather.
            </p>
            <a
              href="https://weathersuggest-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/weathersuggest.png")}
                alt="WeatherSuggest application"
                className="img-website"
              />
            </a>
          </div>
          <div className="startup_tab_img">
            <a
              href="https://valiris-front-office.vbserveur.duckdns.org/"
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
              React.js was used for the front-office and the back-office of the
              website. Calls to REST API are made to display all the details and
              a form enables customers or visitors to make a booking or an
              information request.
              <br />I translated the website using I18N module.
            </p>
            <a
              href="https://valiris-front-office.vbserveur.duckdns.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/valiris.png")}
                alt="Valiris website"
                className="img-website"
              />
            </a>
          </div>
          <div className="startup_tab_img">
            <a
              href="https://api-multidiffusion-offre-et-recherche-emploi.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Multidiffusion application and landing page</h3>
            </a>
            <p>
              I have had the chance to work on a new ambitious project with the
              goal of centralizing job offers in a single platform.
              <br />
              <br />
              The multidiffusion app has a double objective. For the candidates,
              it enables them to apply for a position, their application is
              registered and sent to all ressembling offers. For the companies,
              it enables their HR to display their offers in only one platform,
              and to target applicants much faster.
              <br />
              <br />
              Here is the landing page I built in React.js. The application is
              made in React.js and API Platform.
            </p>
            <a
              href="https://api-multidiffusion-offre-et-recherche-emploi.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/api-multidiffusion.png")}
                alt="Multidiffusion application"
                className="img-website"
              />
            </a>
          </div>
          <div className="startup_tab_img">
            <a
              href="https://travel-art.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>TravelArt project</h3>
            </a>
            <p>
              TravelArt was my first project in React.js. I created and built it
              during a 24h-Hackathon.
              <br />
              <br />
              The project was done during first lockdown in 2020 and the aim was
              to provide culture to internet users thanks to MET Museum API.
              <br />I decided to display categories of art works according to
              their continent of origin. We can then choose the period (BC or
              AC) and watch all the details about the art works.
            </p>
            <a
              href="https://travel-art.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../img/custom/travel-art.png")}
                alt="TravelArt website"
                className="img-website"
              />
            </a>
          </div>
        </Slider>
      </React.Fragment>
    );
};

export default SliderReact;
