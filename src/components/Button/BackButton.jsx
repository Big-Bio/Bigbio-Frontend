import React from "react";
import {StyledBack, Chevron} from "./style";

import {withRouter} from "react-router-dom";

const Back = props => (
  <StyledBack onClick={props.history.goBack}>
    <Chevron />
    BACK
  </StyledBack>
);

export default withRouter(Back);
