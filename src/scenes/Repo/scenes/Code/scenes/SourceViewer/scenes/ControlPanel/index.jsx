import React, { Component } from "react";
import { Button } from "antd";
import BranchButton from "./components/branchButton";
import ButtonGroup from "./components/buttonGroup";
import DownloadButton from "./components/downloadButton";
import PullRequestButton from "./components/pullRequestButton";
import PropTypes from "prop-types";
import style from "./style.sass";
import { BUTTON_PROP_TYPE } from "./constants";

const branches = [{ name: "airbnb", selected: true }, { name: "master" }];

class index extends Component {
  render() {
    const { buttons, LeftPadComponent, DownloadButton } = this.props;

    return (
      <div className={style.ControlPanel}>
        <div className={style.leftPad}>
          <BranchButton branches={branches} />
          {LeftPadComponent}
        </div>
        <div className={style.rightPad}>
          <ButtonGroup buttons={buttons} />
          {DownloadButton !== null && DownloadButton}
        </div>
      </div>
    );
  }
}

index.propTypes = {
  LeftPadComponent: PropTypes.element,
  DownloadButton: PropTypes.element,
  buttons: PropTypes.arrayOf(BUTTON_PROP_TYPE)
};

index.defaultProps = {
  LeftPadComponent: <PullRequestButton />,
  DownloadButton: <DownloadButton />
};

export default index;
