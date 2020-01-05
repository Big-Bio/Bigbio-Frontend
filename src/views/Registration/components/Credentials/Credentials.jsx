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
          value={inputs.degree}
          required
        />
        <Text>Years of Schooling</Text>
        <FreeInput
          type="years"
          name="years"
          onChange={handleInputChange}
          value={inputs.years}
          required
        />
        <Text>Rank of Knowledge</Text>
        <Text>Biology</Text>
        <FreeInput
          type="rankbio"
          name="rankbio"
          onChange={handleInputChange}
          value={inputs.rankbio}
          required
        />
        <Text>Stats</Text>
        <FreeInput
          type="rankstats"
          name="rankstats"
          onChange={handleInputChange}
          value={inputs.rankstats}
          required
        />
        <Text>Computer Science</Text>
        <FreeInput
          type="rankcs"
          name="rankcs"
          onChange={handleInputChange}
          value={inputs.rankcs}
          required
        />
        <Text>Occupation</Text>
        <FreeInput
          type="occupation"
          name="occupation"
          onChange={handleInputChange}
          value={inputs.occupation}
          required
        />
        <Text>Employer</Text>
        <FreeInput
          type="employer"
          name="employer"
          onChange={handleInputChange}
          value={inputs.employer}
          required
        />
        <br />
        <Button>REGISTER</Button>
      </form>
    </Modal>
  );
}

export default Credentials;
