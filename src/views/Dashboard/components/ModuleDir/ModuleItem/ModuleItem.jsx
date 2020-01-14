/**
 * @props
 *
 *
 * **/
import React from "react";

import {StyledItem, Name, Date, Edit, Remove, Submit} from "../style";

const ModuleItem = props => {
  return (
    <StyledItem>
      <Name />
      <Date />
      <Edit />
      <Submit />
      <Remove />
    </StyledItem>
  );
};

export default ModuleItem;
