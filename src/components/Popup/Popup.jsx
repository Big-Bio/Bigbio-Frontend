import React from "react";

import {Container, Close} from "./style";
import {Text} from "../Text/text";

const Popup = props => (
  <Container>
    {props.header}
    <Close
      onClick={() => {
        props.togglePopup(false);
      }}
    />
    <Text>{props.children}</Text>
  </Container>
);

export default Popup;
