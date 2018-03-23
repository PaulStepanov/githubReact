import React from "react";
import PropTypes from "prop-types";

import style from "./style.sass";

const index = ({ navs }) => {
  return (
    <div className={style.navBar}>
      {navs.map(({name, onClick}) => (
        <div key={name} className={`${style.element} text-bold `} onClick={onClick}>
          {name}
        </div>
      ))}
    </div>
  );
};

index.propTypes = {
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.function
    })
  )
};

export default index;
