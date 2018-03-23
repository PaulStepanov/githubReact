import React, { Component } from "react";
import Header from "./components/Header";
import Code from "./components/Code";

import style from './style.sass';

const tabsMap = {
  code: <Code />
};

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: "code"
    };
  }

  render() {
    return (
      <div className={style.Repo}>
        <Header />
        {tabsMap[this.state.tab]}
      </div>
    );
  }
}

export default index;
