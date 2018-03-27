import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";

import style from "style.sass";

const AVATAR_SIZE = 20;

const index = ({
  userAvatarUrl,
  userName,
  commitMessage,
  issueNumber,
  latestCommitId,
  latestCommitAgoText
}) => {
  return (
    <div className={style.CommitDetails}>
      <div className={style.leftPad}>
        <Avatar
          src={userAvatarUrl}
          className={style.avatar}
          shape="square"
          style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
        />
        <div className={`${style.userName} text-bold`}>{userName}</div>
        {issueNumber !== undefined && (
          <div className={style.issueBlock}>
            (<a className={style.issueLink}>#{issueNumber}</a>)
          </div>
        )}
      </div>
      <div className={style.right} />
    </div>
  );
};

index.propTypes = {
  userAvatarUrl: PropTypes.string,
  userName: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  issueNumber: PropTypes.number,
  latestCommitId: PropTypes.string.isRequired,
  latestCommitAgoText: PropTypes.string.isRequired
};

export default index;
