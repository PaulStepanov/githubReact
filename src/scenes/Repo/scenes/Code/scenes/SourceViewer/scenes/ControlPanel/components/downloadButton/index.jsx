import React from "react";
import { Button, Icon } from "antd";

import style from "./style.sass";

const index = () => {
  return (
    <Button className={style.DownloadButton}>
      <span>Clone or download</span>
      <div className={style.iconWrapper}>
        <Icon type="caret-down" className={style.icon} />
      </div>
    </Button>
  );
};

export default index;
