import {useState} from "react";

// handle fetching in callback
export const useForm = (callback, initial_values) => {
  const [inputs, setInputs] = useState(initial_values || {});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = event => {
    event.persist();
    // set inputs based on event types
    // if tags, append to existing values
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
