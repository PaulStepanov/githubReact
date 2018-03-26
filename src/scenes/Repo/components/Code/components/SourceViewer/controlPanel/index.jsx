import React, { Component } from "react";
import BranchButton from "./components/branchButton";

import style from "style.sass";

const branches = [{ name: "airbnb", selected: true }, { name: "master" }];

class index extends Component {
  render() {
    return (
      <div className={style.controlPanel}>
        <div className={style.leftPad}>
          <BranchButton branches={branches}/>
        </div>
        <div className={style.rightPad} />
      </div>
    );
  }
}

export default index;
