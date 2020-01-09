import React from "react";
import Popup from "../../../components/Popup/Popup";

import {Text} from "../../../components/Text/text";

const Success = props => (
  <Popup togglePopup={props.togglePopup} header={"Signup Succeeded!"}>
    <hr />
    <Text>{`Thank you for signing up! Check your email soon to find a link to register. Email sent to: ${props.email}`}</Text>
  </Popup>
);

export default Success;
