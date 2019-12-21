import React from "react";
import styled from "styled-components";

import {useForm} from "../../../services/forms/Hooks";

import {Subhead, Text, Poplink} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import Button from "../../../components/Button/PrimaryButton";
import {AuthModal} from "../style";

function Signup() {
  const postEmail = () => {
    // async callback
    // redirect
    alert(inputs.email);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(postEmail);

  return (
    <AuthModal>
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
    </AuthModal>
  );
}

export default Signup;
