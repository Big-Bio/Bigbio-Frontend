import React from "react";

import {Subhead, Text} from "../../../../components/Text/text";
import FreeInput from "../../../../components/Input/FreeInput";
import {Continue} from "../../../../components/Button/PrimaryButton";

import Modal from "./style";
import {useForm} from "../../../../services/forms/hooks";

function UserInfo({match}) {
  const submitUser = () => {
    // callback, make request
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(submitUser);

  return (
    <Modal>
      <Subhead>Let us get to know you</Subhead>
      <form>
        <Text>First Name</Text>
        <FreeInput />
        <Text>Last Name</Text>
        <FreeInput />
        <Text>Age</Text>
        <FreeInput />
        <Text>Gender</Text>
        <FreeInput />
        <Text>Country</Text>
        <FreeInput />
        <Text>State/Province</Text>
        <FreeInput />
        <Text>Ethnicity</Text>
        <FreeInput />
        <br />
        <Continue to={`${match.url}/cred`} />
      </form>
    </Modal>
  );
}

export default UserInfo;
