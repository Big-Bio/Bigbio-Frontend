import React, {useEffect, useState} from "react";
import Axios from 'axios';
import Auth from "../../../../services/auth/auth";
import {StyledItem, Item, Name, Date, Edit, Status, Remove} from "../DirItem/style";
import Button from "../../../../components/Button/SecondaryButton";
import {Text} from "../../../../components/Text/text";
import ModuleItem from "../DirItem/ModuleItem";
import {Container} from '../style.js';

import { Link } from "react-router-dom";

const ModuleDir = (props) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [message, setMessage] = useState(null);
    const [moduleData, setModuleData] = useState([]);

    useEffect(() => { 
      Axios.get("http://localhost:2000/module/getRecent?page=" + pageIndex, Auth.requestConfig())
      .then (res => { 
        if (res.data.modules) { 
          setModuleData([...moduleData, ...res.data.modules])
      }
        else if (res.data.msg) { 
          setMessage(res.data.msg)
  
        }
      })
      .catch(err => { 
        console.log(err)
      })
    },[pageIndex])
  

  return (
    <Container>
      <StyledItem>
        <Name>name</Name>
        <Date>date created</Date>
        <Edit>edit module</Edit>
        <Status>status</Status>
        <Remove>remove module</Remove>
      </StyledItem>
      {/* map styled items here */}
      {/* manage module data using context? or redux */}
      
      {moduleData.map((module)=> <ModuleItem id={module.module_id} status={module.status} name={module.title} date={module.date_created}></ModuleItem>)}
      <Link to="module/create">
      <Item>
        <Name>+ Create a New Module</Name>
      </Item>
      </Link>
      <br />
      {message ? <>{message}</> : <Button onClick={() => { setPageIndex(pageIndex+1) }}>LOAD MORE</Button>}
    </Container>
  );
};

export default ModuleDir;
