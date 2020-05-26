/**
 * @@props
 * @id : unique id to get data for module
 * @name : name of module
 * @date : date
 *
 * **/
import React, {useState} from "react";
import {withRouter} from "react-router-dom"

import {StyledItem, Name, Date, Edit, Remove, Status} from "./style";
import {Text} from "../../../../components/Text/text";
import TextLink, {Button} from "../../../../components/Button/TextButton";
import {Link} from "react-router-dom";
import Axios from "axios";
import Auth from "../../../../services/auth/auth";

const PendingItem = props => {
  
  const approveModule = function() {     
    Axios.post("http://localhost:2000/module/publish", 
    { module_id: props.id }, Auth.requestConfig())
    .then((res) => { 
      if(res.data.msg)
        console.log(res.data.msg)
        // setErrorMessage(res.data.msg) change to set error message on whole dashboard later 
      else { 
        // todo: make it update automatically
      }
    })

  }

  return (
    <StyledItem>
      <Name>
        <Link to={`/module/${props.id}`}>{props.name}</Link>
      </Name>
      <Date>{props.date}</Date>
      <Edit>
        <TextLink to={`/module/${props.id}/edit`}>EDIT</TextLink>
      </Edit>
      <Status>
      <Button onClick={approveModule}>APPROVE</Button>
      </Status>
      <Remove>
        <Button>REJECT</Button>
      </Remove>
    </StyledItem>
  );
};

export default withRouter(PendingItem)