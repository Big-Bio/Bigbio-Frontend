/**
 * @@props
 * @id : unique id to get data for module
 * @name : name of module
 * @date : date
 *
 * **/
import React from "react";

import {StyledItem, Name, Date, Edit, Remove, Submit} from "../style";
import Button from "../../../../../../components/Button/TextButton";
import {Link} from "react-router-dom";

const ModuleItem = props => {
  return (
    <StyledItem>
      <Name>
        <Link to={`/module/${props.id}`}>{props.name}</Link>
      </Name>
      <Date>{props.date}</Date>
      <Edit>
        <Button to={`/module/edit/${props.id}`}>EDIT</Button>
      </Edit>
      <Submit>
        {/* TODO: make this not a link? should just make a request */}
        <Button to={`/module/submit/${props.id}`}>SUBMIT</Button>
      </Submit>
      <Remove>
        <Button to={`/module/remove/${props.id}`}>REMOVE</Button>
      </Remove>
    </StyledItem>
  );
};

export default ModuleItem;
