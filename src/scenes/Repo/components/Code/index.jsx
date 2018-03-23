import React, { Component } from "react";
import Switcher from "./components/Switcher/";

import style from "./style.sass";

const TITLE = "Simple React Webpack Babel Starter Kit ";

class index extends Component {
  render() {
    return (
      <div className={style.Code}>
        <div className={style.codeWrapper}>
          <div className={style.meta}>{TITLE}</div>
          <Switcher />
        </div>
      </div>
    );
  }
}

export default index;
