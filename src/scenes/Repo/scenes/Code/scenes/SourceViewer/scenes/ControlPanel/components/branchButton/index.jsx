import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "antd";

import style from "./style.sass";

const branchButton = ({ branches }) => {
  if (branches.filter(b => b.selected).length === 0) return null;

  const selectedBranchName = branches.filter(b => b.selected)[0];

  return (
    <Button className={`${style.BranchButton} codeButton`}>
      <span className={style.text}>Branch: </span>
      <span className={`${style.branchName} text-bold `}>{selectedBranchName.name}</span>
      <span className={style.dropdownWrapper}>
        <Icon type="caret-down" className={style.icon} />
      </span>
    </Button>
  );
};

branchButton.propTypes = {
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  )
};

export default branchButton;
