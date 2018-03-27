import React from "react";
import PropTypes from "prop-types";

import { FILE_PROP_TYPE_SHAPE } from "./constants";
import File from "./components/file";

import style from "style.sass";

const index = files => {
  return (
    <div className={style.Files}>
      {files.map((file, i) => <File key={i} {...file} />)}
    </div>
  );
};

index.propTypes = { files: PropTypes.arrayOf(FILE_PROP_TYPE_SHAPE) };

export default index;
