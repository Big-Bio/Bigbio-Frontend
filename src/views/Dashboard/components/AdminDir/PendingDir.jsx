import React, {useEffect, useState} from "react";
import PendingItem from '../DirItem/PendingItem';
import Button from "../../../../components/Button/SecondaryButton";
import {StyledItem, Name, Date, Edit, Status, Remove} from "../DirItem/style";
import {Container} from '../style';
import Axios from 'axios';
import Auth from "../../../../services/auth/auth";

const PendingDir = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [message, setMessage] = useState(null);
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => { 
    Axios.get("http://localhost:2000/module/getSubmitted?page=" + pageIndex, Auth.requestConfig())
    .then (res => { 
      console.log(res)
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

// get submitted modules 
  return (
    <Container>
      <StyledItem>
        <Name>name</Name>
        <Date>date submitted</Date>
        <Edit>suggest edits</Edit>
        <Status>approve module</Status>
        <Remove>reject module</Remove>
      </StyledItem>
      {/* map styled items here */}
      {moduleData.map((module) => (<PendingItem id={module.module_id} name={module.title} date={module.date_created}/>))}
      <br/>
      {message ? <>{message}</> : <Button onClick={() => { setPageIndex(pageIndex+1) }}>LOAD MORE</Button>}
    </Container>
  );
};

export default PendingDir;
