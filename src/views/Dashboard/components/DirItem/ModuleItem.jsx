/**
 * @@props
 * @id : unique id to get data for module
 * @name : name of module
 * @date : date
 *
 * **/
import React from "react";

import {StyledItem, Name, Date, Edit, Remove, Status} from "./style";
import TextLink, {Button} from "../../../../components/Button/TextButton";
import {StyledTagText} from "../../../../components/Text/text";

import {Link} from "react-router-dom";
const ModuleItem = props => {
  const status = props.status[0].toUpperCase() + props.status.slice(1);

  return (
    <StyledItem>
      <Name>
        <Link to={`/module/${props.id}/form?status=${props.status}`}>{props.name}</Link>
      </Name>
      <Date>{props.date}</Date>
      <Edit>
        <TextLink to={`/module/${props.id}/edit`}>EDIT</TextLink>
      </Edit>
      <Status color={status.toLowerCase() === "publish" ? "blue" : "red"}>{status}</Status>
      <Remove>
      <Button>REMOVE</Button>
      </Remove>
    </StyledItem>
  );
};

export default ModuleItem;
