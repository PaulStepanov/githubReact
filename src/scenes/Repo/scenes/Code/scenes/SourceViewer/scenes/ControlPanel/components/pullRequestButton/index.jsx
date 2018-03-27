import React from "react";
import { Button } from "antd";

import style from './style.sass';

const index = () => {
  return (
    <Button className={`${style.prButton} codeButton`}>
      <span className={`${style.prText} text-bold`}>New pull request</span>
    </Button>
  );
};

export default index;
