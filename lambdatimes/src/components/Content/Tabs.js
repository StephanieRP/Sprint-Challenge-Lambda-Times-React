import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import * as tabsstyle from "../../styles/tabsstyle";
const Tabs = props => {
  // console.log("Tabs component", props);

  return (
    <tabsstyle.TabsContainer>
      <tabsstyle.TabsTopic>
        <tabsstyle.TabsTitle>TRENDING TOPICS:</tabsstyle.TabsTitle>
        {props.tabs.map(tab => (
          <Tab
            key={tab}
            tab={tab}
            changeSelected={props.changeSelected}
            selectedTab={props.selectedTab}
          />
        ))}
      </tabsstyle.TabsTopic>
    </tabsstyle.TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
