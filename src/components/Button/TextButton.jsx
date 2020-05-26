import React from "react";
import {StyledButtonText} from "./style";
import {Link} from "react-router-dom";

// use specific text style
export const Button =  props => (
  <StyledButtonText onClick={props.onClick}>{props.children}</StyledButtonText>
);

const TextLink = props => (
  <Link to={props.to}><StyledButtonText>{props.children}</StyledButtonText></Link>
);

// export const TagLink = props => ( 
//   <Link to={props.to}><StyledTagText>{props.chilren}</StyledTagText></Link>
// );

export default TextLink;
