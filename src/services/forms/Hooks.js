import {useState} from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export const initModule = { 
  title: "", 
  collab: "", 
  content: "",
  sup_notes: "",
  doi: [],
  keyterms: [], 

}
// handle fetching in callback
export const useForm = (callback, initValues = {}) => {
  const [inputs, setInputs] = useState(initValues);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const initializeInputs = data => { 
    setInputs(data);
  }

  const handleKeyDown = event => { 
    if( event.key == "Enter") { 
      setInputs(inputs => ({...inputs, [this.name]: inputs[this.name].append(this.value)}));
    }
  }

  const handleInputChange = event => {
    event.persist();
    // set inputs based on event types
    // if tags, append to existing values
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  return {
    handleSubmit,
    handleInputChange,
    handleKeyDown,
    inputs,
    initializeInputs
  };
};


export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}
