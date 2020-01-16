/**
    Used by create and edit pages
    takes in possible fields for modules that already exist
    @@props
    @module: object with preexisting module data
**/

import React, {useState} from "react";
import {Subhead, Text, Errortext} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import {useForm} from "../../../services/forms/Hooks";
import Button from "../../../components/Button/PrimaryButton";

function ModuleForm(props) {
  // TODO: load module draft data and supply as input
  // INPUTS should be initialized with preexisting module data

  const SubmitModule = function() {
    // push to dashboard or set error
    props.history.push("/");
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(SubmitModule, props.module);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form>
      <Subhead>{props.type} a Module</Subhead>
      <Errortext visible={errorMessage}>{errorMessage}</Errortext>
      <Text>Title</Text>
      <FreeInput
        name="title"
        onChange={handleInputChange}
        value={inputs.title}
        required
      />
      <Text>Collaborators</Text>
      <FreeInput
        name="collaborators"
        onChange={handleInputChange}
        value={inputs.collaborators}
        required
      />
      <Text>Module Summary</Text>
      <FreeInput
        name="summary"
        onChange={handleInputChange}
        value={inputs.summary}
        required
      />
      <Text>Supplemental Notes and Resources</Text>
      <FreeInput
        name="notes"
        onChange={handleInputChange}
        value={inputs.notes}
        required
      />
      <Text>Acknowledgements</Text>
      <FreeInput name="ack" onChange={handleInputChange} value={inputs.ack} required />
      <Text>Key Terms</Text>
      <FreeInput name="tags" onChange={handleInputChange} value={inputs.terms} required />
      <Text>DOIs</Text>
      <FreeInput name="dois" onChange={handleInputChange} value={inputs.doi} required />
      <br />
      <Button>SUBMIT</Button>
    </form>
  );
}

export default ModuleForm;
