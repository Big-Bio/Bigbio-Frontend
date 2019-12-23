import React from "react";
import styled from "styled-components";

import {useForm} from "../../../services/forms/hooks";

import {Subhead, Text, Poplink} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import Button from "../../../components/Button/PrimaryButton";
import {SignModal} from "../style";

function Signup() {
  const submitEmail = () => {
    // /user/signup
    // check if email valid
    // redirect

    alert(inputs.email);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitEmail);

  return (
    <SignModal>
      <Subhead>Register Today</Subhead>
      <form onSubmit={handleSubmit}>
        <Text>Email</Text>
        <FreeInput
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />{" "}
        <br />
        <Button>SIGNUP</Button>
        <Text>Already have an account?</Text>
        <Poplink to="/login">login here.</Poplink>
      </form>
    </SignModal>
  );
}

export default Signup;
