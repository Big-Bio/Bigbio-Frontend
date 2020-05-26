import React from "react";
import {StyledInput, StyledLink} from "./style.js";

const Button = props => <StyledInput type={props.type} onClick={props.onClick} value={props.children} />;

export const Continue = props => <StyledLink to={props.to}>CONTINUE</StyledLink>;

export default Button;
