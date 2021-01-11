import React, { Component } from "react";
import { itemsTab } from "./DataTabItem";
class Tabitem extends Component {
  render() {
    return itemsTab.map((i) => {
      return (
        <div className={`col-lg-5 col-md-6`}>
          <div className="software_service_item mb_70">
            <img
              src={require(`../../../img/custom/${i.image}.png`)}
              alt={`Logo of ${i.title}`}
              className="logo-growth"
            />

            <h5 className="mt_30 mb_15">{i.title}</h5>
            <p>{i.description}</p>
          </div>
        </div>
      );
    });
  }
}
export default Tabitem;
