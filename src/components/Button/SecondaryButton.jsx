import React from "react";
import {StyledButtonTwo} from "./style";

const Button = props => <StyledButtonTwo onClick={props.onClick}>{props.children}</StyledButtonTwo>;

export default Button;
