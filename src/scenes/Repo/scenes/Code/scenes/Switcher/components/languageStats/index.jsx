import React from "react";

import languagesColorMap from "constants/languagesColorMap";
import { LANGUAGE_PROP_TYPES } from "../../constants";

import style from "./style.sass";

const index = ({ languages }) => {
  return (
    <div className={style.languageStats}>
      {languages.map(({ name, percents }, i) => {
        const color = languagesColorMap[name];
        return (
          <div className={style.language} key={i}>
            <div className={style.circleWrapper}>
              <div
                className={style.circle}
                style={{ backgroundColor: color }}
              />
            </div>
            <div className={`${style.title} text-bold`}>{name}</div>
            <div className={`${style.percents} text-bold`}>{`${percents}%`}</div>
          </div>
        );
      })}
    </div>
  );
};

index.propTypes = {
  languages: LANGUAGE_PROP_TYPES
};

export default index;
