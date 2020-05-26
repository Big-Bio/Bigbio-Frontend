import React from "react";
import {StyledChip} from "./style.js";

const Chip = (props) => {
    return (
        <StyledChip>
            {props.children}
        </StyledChip>
    );
}

export default Chip;