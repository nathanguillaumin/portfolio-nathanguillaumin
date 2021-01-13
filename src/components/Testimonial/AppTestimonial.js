import React, { Component } from "react";
import Slider from "react-slick";
class AppTestimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
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
    };
    return (
      <section className="app_testimonial_area" id="testimonial">
        <div className="text_shadow" data-line="Feedback"></div>
        <div className="container nav_container">
          <div className="slider_nav">
            <i className="ti-arrow-left prev" onClick={this.previous}></i>
            <i className="ti-arrow-right next" onClick={this.next}></i>
          </div>
          <div className="shap one"></div>
          <div className="shap two"></div>
          <Slider
            ref={(c) => (this.slider = c)}
            className="app_testimonial_slider"
            {...settings}
          >
            <div className="app_testimonial_item text-center">
              <div className="author-img">
                <img src={require("../../img/custom/amina.jpeg")} alt="" />
              </div>
              <div className="author_info">
                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Amina</h6>
                <p>Web developer - Advercity</p>
              </div>
              <p className="f_400">
                Nathan is a complete profile: he knows how to invest in web
                projects and master all their technical aspects, integrate and
                adapt to a team, and do everything to achieve his goals.
              </p>
            </div>
            <div className="app_testimonial_item text-center">
              <div className="author-img">
                <img src={require("../../img/custom/mathieu.webp")} alt="" />
              </div>
              <div className="author_info">
                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Mathieu</h6>
                <p>Chief Technical Officer - Audiowizard</p>
              </div>
              <p className="f_400">
                Nathan accompanied us in the realization of different tasks:
                front / back / website creation / SEO. 3 words to describe
                Nathan: Efficient, serious, and competent.
              </p>
            </div>
            <div className="app_testimonial_item text-center">
              <div className="author-img">
                <img src={require("../../img/custom/tristan.jpeg")} alt="" />
              </div>
              <div className="author_info">
                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Tristan</h6>
                <p>Chief Executive Officer - TMS Studio</p>
              </div>
              <p className="f_400">
                Nathan created some awesome work during his mission for Pixter.
                He has a great knowledge of analytics and project management
                skills. His work provided us with new business opportunities
                when the company was still a startup. I hope to collaborate with
                him again in the future !
              </p>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
export default AppTestimonial;
