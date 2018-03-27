import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import { BUTTON_PROP_TYPE } from "../../constants";

import style from "./style.sass";

const index = ({ buttons }) => {
  return (
    <div className={style.ButtonGroup}>
      {buttons.map(({ name, onClick }, i) => (
        <Button
          key={i}
          className={`${style.button} codeButton`}
          onClick={onClick}
        >
        <span className="text-bold">{name}</span>
          
        </Button>
      ))}
    </div>
  );
};

index.propTypes = {
  buttons: PropTypes.arrayOf(BUTTON_PROP_TYPE)
};

export default index;
