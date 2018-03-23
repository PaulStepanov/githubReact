import React from "react";
import PropTypes from "prop-types";
import { Tabs, Icon, Badge } from "antd";

import style from "./style.sass";

const { TabPane } = Tabs;

const TabContent = ({ text, icon, count }) => (
  <div className={style.tabContent}>
    <Icon type={icon} />
    {text}
    <Badge count={count} showZero className={style['ant-badge-count']}/>
  </div>
);

const index = ({ tabs }) => (
  <div className={style.TabsContainer}>
    <Tabs type="card">
      {tabs.map((tab, i) => <TabPane tab={<TabContent {...tab} />} key={i} />)}
    </Tabs>
  </div>
);

index.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      count: PropTypes.number
    })
  )
};

export default index;
