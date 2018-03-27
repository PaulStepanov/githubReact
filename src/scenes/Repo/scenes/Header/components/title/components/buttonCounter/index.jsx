import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import style from "./style.sass";

const index = ({ count, name, icon }) => {
  return (
    <div className={style.ButtonCounter}>
      <Button icon={icon} className={style.button}>
        {name}
      </Button>
      <div className={style.count}>{count}</div>
    </div>
  );
};

index.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default index;
