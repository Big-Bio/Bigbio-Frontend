import React from "react";
import {StyledInput, StyledLink} from "./style.js";

const Button = props => <StyledInput type="submit" value={props.children} />;

export const Continue = props => <StyledLink to={props.to}>CONTINUE</StyledLink>;

export default Button;
