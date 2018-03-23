import React from "react";
import PropTypes from "prop-types";
import { Icon, Breadcrumb } from "antd";
import ButtonCounter from "./components/buttonCounter";

import style from './style.sass';

const breadCrumbStyle = { //remove
  fontSize: "18px"
};

const index = ({userName, unwatched, stars,  forks, repoName}) => {
  return (
    <div className={style.Title}>
      <div className={style.leftPad}>
        <Icon type="book" className={style.bookIcon} />
        <div className={style.userRepoPath}>
          <Breadcrumb style={breadCrumbStyle}>
            <Breadcrumb.Item href="">{userName}</Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ fontWeight: 600 }}>
              {repoName}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className={style.rightPad}>
        <ButtonCounter count={unwatched} name="Unwatch" icon="eye" />
        <ButtonCounter count={stars} name="Star" icon="star" />
        <ButtonCounter count={forks} name="Fork" icon="fork" />
      </div>
    </div>
  );
};

index.propTypes = {
    userName: PropTypes.string,
    repoName: PropTypes.string,
    stars: PropTypes.number,
    forks: PropTypes.number,
    unwatched: PropTypes.number
  };
  

export default index;
