import React from "react";

// Styled Components
import * as styles from "../styles/topbarstyle";

const TopBar = () => {
  return (
    <styles.TopBarDiv>
      <styles.TopBarDivContainer>
        <styles.TopBarDivContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </styles.TopBarDivContainerLeft>
        <styles.TopBarDivContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </styles.TopBarDivContainerCenter>
        <styles.TopBarDivContainerRight>
          <span>LOG IN</span>
        </styles.TopBarDivContainerRight>
      </styles.TopBarDivContainer>
    </styles.TopBarDiv>
  );
};

export default TopBar;
