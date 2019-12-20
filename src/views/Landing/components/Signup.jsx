import React from "react";
import styled from "styled-components";

import {Subhead, Text, Poplink} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import Button from "../../../components/Button/PrimaryButton";
import {AuthModal} from "../style";

const Fields = styled.div`
  margin: 20px 0px;
`;

function Signup() {
  return (
    <AuthModal>
      <Subhead>Register Today</Subhead>
      <form>
        <Fields>
          <Text>Email</Text>
          <FreeInput /> <br />
        </Fields>
        <Button>SIGNUP</Button>
        <Text>Already have an account?</Text>
        <Poplink>login here.</Poplink>
      </form>
    </AuthModal>
  );
}

export default Signup;
