import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Menu, Dropdown, Badge, Avatar } from "antd";

import style from "./style.sass";

const plusMenu = (
  <Menu>
    <Menu.Item>Test</Menu.Item>
  </Menu>
);

class index extends Component {
  render() {
    const { iconUrl, isNotifications } = this.props;

    return (
      <div className={style.UserPanel}>
        <div className={style["padding-block"]}>
          <div className={style.bellIconWrapper}>
            <Badge dot>
              <Icon type="bell" className={style.icon} />
            </Badge>
          </div>
        </div>

        <div className={style["padding-block"]}>
          <Dropdown overlay={plusMenu} trigger={["click"]}>
            <div className={style.plusDropDown}>
              <div className={style.plusWrapper}>
                <Icon type="plus" className={style.icon} />
              </div>
              <div className={style.downIconWrapper}>
                <Icon
                  type="caret-down"
                  className={`${style.downIcon} ${style.icon}`}
                />
              </div>
            </div>
          </Dropdown>
        </div>

        <div className={style["padding-block-last"]}>
          <Dropdown overlay={plusMenu} trigger={["click"]}>
            <div className={style.avatarDropdown}>
              <Avatar
                src={iconUrl}
                className={style.avatar}
                shape="square"
                style={{ width: 20, height: 20 }}
              />
              <div className={style.downIconWrapper}>
                <Icon
                  type="caret-down"
                  className={`${style.downIcon} ${style.icon}`}
                />
                <div className={style.offset7px} />
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}

index.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  isNotifications: PropTypes.bool
};

index.defaultProps = {
  isNotifications: false
};

export default index;
