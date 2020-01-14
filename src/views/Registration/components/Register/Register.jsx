import React from "react";

import {Link} from "react-router-dom";

import {RegistrationModal} from "./style";
import {Subhead, Text} from "../../../../components/Text/text";
import FreeInput from "../../../../components/Input/FreeInput";

import {Continue} from "../../../../components/Button/PrimaryButton";

function Register(props) {
  const handleInputChange = props.handleInputChange;
  const inputs = props.inputs;

  return (
    <RegistrationModal>
      <Subhead>Register Here</Subhead>
      <form>
        <Text>Username</Text>
        <FreeInput
          type="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
          required
        />
        <Text>Password</Text>
        <FreeInput
          type="password"
          name="password"
          onChange={handleInputChange}
          value={inputs.password}
          required
        />
        <Text>Confirm Password</Text>
        <FreeInput
          type="password"
          name="confirmPassword"
          onChange={handleInputChange}
          value={inputs.confirmPassword}
          required
        />
        <br />
        <Continue to={`${props.match.url}/info`} />
      </form>
    </RegistrationModal>
  );
}

export default Register;
