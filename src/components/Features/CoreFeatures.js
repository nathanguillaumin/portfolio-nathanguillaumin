import React from "react";

const CoreFeatures = () => {
  return (
    <section
      className="chat_core_features_area sec_pad working-with-me"
      id="working-with-me"
    >
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Why should you work with me?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/pluse.png")}
                  alt=""
                />
                <img
                  src={require("../../img/custom/available.svg")}
                  alt="icon available"
                  className="icon-working-with-me"
                />
              </div>
              <h4>Available and proactive</h4>
              <p>
                I am based on GMT+1 timezone and I am free to move to work with
                you and your team in Europe or anywhere worldwide.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="chat_features_item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/triangle.png")}
                  alt=""
                />
                <img
                  src={require("../../img/custom/entrepreneur.svg")}
                  alt="icon entrepreneur"
                  className="icon-working-with-me"
                />
              </div>
              <h4>Entrepreneurial spirit</h4>
              <p>
                I already launched my own company on the French market and I
                support some brands and entrepreneurs in their projects.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="chat_features_item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/box.png")}
                  alt=""
                />
                <img
                  src={require("../../img/custom/webmarketing.svg")}
                  alt="icon-webmarketing"
                  className="icon-working-with-marketing"
                />
              </div>
              <h4>Webmarketing and SEO skilled</h4>
              <p>
                Graduated with a Master from a business school, I have
                experiences in webmarketing within companies such as L'Oréal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
