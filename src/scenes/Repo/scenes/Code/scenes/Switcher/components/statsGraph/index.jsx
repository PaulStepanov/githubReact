import React from "react";
import languagesColorMap from "constants/languagesColorMap";

import { LANGUAGE_PROP_TYPES } from "../../constants";

import style from "./style.sass";

const index = ({ languages, onClick }) => {
  return (
    <div className={style.statsGraph} onClick={onClick}>
      {languages.map(({ name, percents }, i) => {
        const color = languagesColorMap[name];

        return (
          <div
            key={i}
            className={style.line}
            style={{ backgroundColor: color, flexBasis: `${percents}%` }}
          />
        );
      })}
    </div>
  );
};

index.propTypes = {
  languages: LANGUAGE_PROP_TYPES
};

export default index;
