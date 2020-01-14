import React from "react";
import {StyledTextButton} from "./style";

// use specific text style
const Button = props => (
  <StyledTextButton to={props.to}>{props.children}</StyledTextButton>
);

export default Button;
