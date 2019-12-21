import React from "react";
import {StyledInput} from "./style.js";

const Button = props => <StyledInput type="submit" value={props.children} />;

export default Button;
