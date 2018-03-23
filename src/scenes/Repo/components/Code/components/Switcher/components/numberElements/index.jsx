import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";

import style from "./style.sass";

const index = ({ elements }) => {
  return (
    <div className={style.elements}>
      {elements.map(({ text, icon, count }, i) => (
        <div className={style.element} key={i}>
          <div className={style.iconWrapper}>
            <Icon type={icon} />
          </div>
          {typeof count !== "undefined" && (
            <div className={style.count}>{count}</div>
          )}
          <div className={style.text}>{text}</div>
        </div>
      ))}
    </div>
  );
};

index.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      count: PropTypes.number
    })
  )
};

export default index;
