import React from "react";
import * as headerstyle from "../styles/headerstyle";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <headerstyle.HeaderContainer>
      <headerstyle.DateSpan>SMARCH 32, 2018</headerstyle.DateSpan>
      <h1>Lambda Times</h1>
      <headerstyle.TempSpan>98°</headerstyle.TempSpan>
    </headerstyle.HeaderContainer>
  );
};

export default Header;
