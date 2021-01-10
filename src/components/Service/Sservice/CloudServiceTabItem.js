import React, { Component } from "react";
// import logo from "../../../img/custom/audiowizard-software.png";
class Tabitem extends Component {
  render() {
    var { text, description, colClass, url, srcImage } = this.props;
    return (
      <div className={`col-lg-5 col-md-6 ${colClass}`}>
        <div className="software_service_item mb_70">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={`../../../img/custom/${srcImage}`}
              alt={text}
              className="img-website"
            />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h5 className="mt_30 mb_15">{text}</h5>
          </a>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default Tabitem;
