/**
    Used by create and edit pages
    takes in possible fields for modules that already exist
    @@props
    @module: object with preexisting module data
**/

import React, {useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {Subhead, Text, Errortext} from "../../../components/Text/text";
import FreeInput from "../../../components/Input/FreeInput";
import FreeTextArea from "../../../components/Input/FreeTextArea";
import {useForm, initModule} from "../../../services/forms/Hooks";
import Button from "../../../components/Button/PrimaryButton";
import Chip from "../../../components/Input/Chip";
import Axios from "axios";

import Auth from "../../../services/auth/auth";

function ModuleForm(props) {
  // TODO: load module draft data and supply as input
  // INPUTS should be initialized with preexisting module data
  const id = props.match.params.id;
  const [errorMessage, setErrorMessage] = useState(null);

  const SaveModule = function(e) {
    Axios.post("http://localhost:2000/module/save", {module_id: props.match.params.id, ...inputs}, Auth.requestConfig())
    .then( res => { 
      if( res.data.msg ) {
        setErrorMessage(res.data.msg)
      }
      else {
        props.history.push("/");
      }
    })
    .catch( err => { 
      setErrorMessage(err);
    })
    // push to dashboard or set error
  };

  const SubmitModule = function(e) { 
    e.preventDefault();
    Axios.post("http://localhost:2000/module/submit", 
    { module_id: props.match.params.id, 
      title: inputs.title, 
      collab: inputs.collab, 
      content: inputs.content, 
      sup_notes: inputs.sup_notes,
      ack: inputs.ack,
      keyterms: inputs.keyterms,
      doi: inputs.doi
    }, Auth.requestConfig())
    .then((res) => { 
      if(res.data.msg) { 
        setErrorMessage(res.data.msg)
      }
      else { 
        props.history.push('/')
      }
    })
  }

  const {inputs, handleInputChange, handleKeyDown, handleSubmit, initializeInputs} = useForm(SaveModule, initModule);

  useEffect(() => {
    if(id) { 
      Axios.get("http://localhost:2000/module/load?id="+id, Auth.requestConfig())
      .then((res) => {  
        if(res.data.msg){ 
          setErrorMessage(res.data.msg)
        }
        initializeInputs(res.data)
      })
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Subhead>{props.type} a Module</Subhead>
      <Errortext visible={errorMessage}>{errorMessage}</Errortext>
      <Text>Title</Text>
      <FreeInput
        name="title"
        onChange={handleInputChange}
        value={inputs.title}
      />
      <Text>Collaborators</Text>
      <FreeInput
        name="collab"
        // onChange={handleInputChange}
        onKeyDown={handleKeyDown.bind(this)}
      />
      <Text>Module Summary</Text>
      <FreeTextArea
        name="content"
        width="550px"
        height="200px"
        onChange={handleInputChange}
        value={inputs.content}
      />
      <Text>Supplemental Notes and Resources</Text>
      <FreeTextArea
        name="sup_notes"
        onChange={handleInputChange}
        value={inputs.sup_notes}
      />
      <Text>Acknowledgements</Text>
      <FreeInput name="ack" onChange={handleInputChange} value={inputs.ack} />
      <Text>Key Terms</Text>
      <FreeInput 
        name="keyterms"  
        onKeyDown={handleKeyDown.bind(this)}
      />
      {console.log(inputs.keyterms)}    
      <Text>DOIs</Text>
      <FreeInput 
        name="doi" 
        // onChange={handleInputChange} 
        onKeyDown={handleKeyDown.bind(this)}
      />
      <br />
      <Button type="button" onClick={SaveModule}>SAVE</Button><span></span>
      <Button type="button" onClick={SubmitModule}>SUBMIT</Button>
    </form>

  );
}

export default withRouter(ModuleForm);
