import React, { Component } from "react";
import { Carousel } from "antd";

import PropTypes from 'prop-types';
import NumberElements from "./components/numberElements";
import StatsGraph from "./components/statsGraph";
import LanguageStats from "./components/languageStats";
import { JS, CSS, HTML } from "constants/languages";

import style from "./style.sass";

const numbersSummary = [
  {
    icon: "clock-circle-o",
    text: "commit",
    count: 426
  },
  {
    icon: "usb",
    text: "branches",
    count: 7
  },
  {
    icon: "tag-o",
    text: "release",
    count: 1
  },
  {
    icon: "usergroup-add",
    text: "contributors",
    count: 43
  },
  {
    icon: "api",
    text: "MIT"
  }
];

const languages = [
  {
    name: JS,
    percents: 84.2
  },
  {
    name: CSS,
    percents: 13.9
  },
  {
    name: HTML,
    percents: 1.9
  }
];

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    const { toggle } = this.state;

    return (
      <div className={style.Switcher}>
        {toggle && (
          <NumberElements
            className={style.numberSummary}
            elements={numbersSummary}
          />
        )}

        {!toggle && <LanguageStats languages={languages} />}

        <StatsGraph
          className={style.langStats}
          onClick={this.handleToggle}
          languages={languages}
        />
      </div>
    );
  }
}

index.propTypes = {
  onSwitch: PropTypes.func
}

export default index;
