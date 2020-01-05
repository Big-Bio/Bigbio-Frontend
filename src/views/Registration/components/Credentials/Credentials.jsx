import React from "react";

import Modal from "./style";
import {Subhead, Text} from "../../../../components/Text/text";
import FreeInput from "../../../../components/Input/FreeInput";

import {useForm} from "../../../../services/forms/hooks";

import Button from "../../../../components/Button/PrimaryButton";

function Credentials(props) {
  const handleInputChange = props.handleInputChange;
  const inputs = props.inputs;

  return (
    <Modal>
      <Subhead>What are your credentials?</Subhead>
      <form onSubmit={props.handleSubmit}>
        <Text>Highest Degree Earned</Text>
        <FreeInput
          type="degree"
          name="degree"
          onChange={handleInputChange}
          value={inputs.password}
          required
        />
        <Text>Years of Schooling</Text>
        <FreeInput
          type="years"
          name="years"
          onChange={handleInputChange}
          value={inputs.password}
          required
        />
        <Text>Rank of Knowledge</Text>
        <Text>Biology</Text>
        <FreeInput
          type="rankbio"
          name="rankbio"
          onChange={handleInputChange}
          value={inputs.password}
          required
        />
        <Text>Stats</Text>
        <FreeInput />
        <Text>Computer Science</Text>
        <FreeInput />
        <Text>Occupation</Text>
        <FreeInput />
        <Text>Employer</Text>
        <FreeInput />
        <br />
        <Button onSubmit>REGISTER</Button>
      </form>
    </Modal>
  );
}

export default Credentials;
