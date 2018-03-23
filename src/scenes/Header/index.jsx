import React, { Component } from "react";
import { Layout, Menu, Button, Input, Icon } from "antd";

import NavBar from "./components/NavBar";
import UserPanel from "./components/UserPanel";

import style from "./style.sass";

const { Header, Footer, Content } = Layout;

const NAVS = [
  { name: "Pull requetes" },
  { name: "Issues" },
  { name: "Marketplace" },
  { name: "Explore" }
];

class index extends Component {
  render() {
    return (
      <div className={style.Header}>
        <div className={style.HeaderContenr}>
          <div className={style.leftContent}>
            <Icon
              className={`${style.icon} Body-title-book-icon`}
              type="github"
            />

            <div className={style.buttonInputGroup}>
              <Button>This repository</Button>
              <div className={style.searchInputWrapper}>
                <Input className={style.searchInput} placeholder="Search" />
              </div>
            </div>

            <NavBar navs={NAVS} />
          </div>

          <div className={style.rightContent}>
            <UserPanel
              iconUrl={`https://avatars3.githubusercontent.com/u/18052706?s=40&v=4`}
              isNotifications={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
