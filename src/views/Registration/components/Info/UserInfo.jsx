import React from "react";

import {Subhead, Text} from "../../../../components/Text/text";
import FreeInput from "../../../../components/Input/FreeInput";
import {Continue} from "../../../../components/Button/PrimaryButton";

import Modal from "./style";
import {useForm} from "../../../../services/forms/Hooks";

function UserInfo(props) {
  const handleInputChange = props.handleInputChange;
  const inputs = props.inputs;

  return (
    <Modal>
      <Subhead>Let us get to know you</Subhead>
      <form>
        <Text>First Name</Text>
        <FreeInput
          name="firstname"
          onChange={handleInputChange}
          value={inputs.firstname}
          required
        />
        <Text>Last Name</Text>
        <FreeInput
          name="lastname"
          onChange={handleInputChange}
          value={inputs.lastname}
          required
        />
        <Text>Age</Text>
        <FreeInput name="age" onChange={handleInputChange} value={inputs.age} required />
        <Text>Gender</Text>
        <FreeInput
          name="gender"
          onChange={handleInputChange}
          value={inputs.gender}
          required
        />
        <Text>Country</Text>
        <FreeInput
          type="country"
          name="country"
          onChange={handleInputChange}
          value={inputs.country}
          required
        />
        <Text>State/Province</Text>
        <FreeInput
          type="state"
          name="state"
          onChange={handleInputChange}
          value={inputs.state}
          required
        />
        <Text>Ethnicity</Text>
        <FreeInput
          type="ethnicity"
          name="ethnicity"
          onChange={handleInputChange}
          value={inputs.ethnicity}
          required
        />
        <br />
        {/* only match to registration/:key url */}
        <Continue to={`${props.match.url}/cred`} />
      </form>
    </Modal>
  );
}

export default UserInfo;
