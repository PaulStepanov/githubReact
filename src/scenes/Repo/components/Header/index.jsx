import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./components/title";
import Tabs from "./components/tabs";

import style from "./style.sass";

const mockProps = {
  userName: "ReactJSResources",
  repoName: "react-webpack-babel",
  stars: 2,
  forks: 1,
  unwatched: 0
};

const tabs = [ //move to constants
  {
    icon: "code",
    text: "Code"
  },
  {
    icon: "exclamation",
    text: "Issues",

    count: 0
  },
  {
    icon: "rollback",
    text: "Pull requests",

    count: 0
  },
  {
    icon: "solution",
    text: "Projects",

    count: 0
  },
  {
    icon: "layout",
    text: "Wiki",
  },
  {
    icon: "bar-chart",
    text: "Insights",
  },
  {
    icon: "setting",
    text: "Settings",
  },
];
class index extends Component {
  render() {
    const { userName, repoName, stars, forks, unwatched } = mockProps; //this.props

    return (
      <div className={style.Header}>
        <div className={style.headerContent}>
          <Title {...mockProps} />
          <Tabs tabs={tabs}/>
        </div>
      </div>
    );
  }
}

index.propTypes = {
  userName: PropTypes.string,
  repoName: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  unwatched: PropTypes.number
};

export default index;
