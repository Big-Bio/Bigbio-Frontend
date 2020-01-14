import React from "react";
import {HeadBar} from "./style";
import Back from "../../Button/BackButton";
// absolute back button
const Header = props => (
  <>
    <HeadBar>{props.children}</HeadBar>
    <Back />
  </>
);

export default Header;
