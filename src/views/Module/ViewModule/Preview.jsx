// preview drafts

import React, {useState, useEffect} from "react";
import Axios from "axios";
import Page from "../../../components/Page/Page";
import {Heading, Subhead, Text} from "../../../components/Text/text"
import {withRouter} from "react-router-dom";
import Auth from "../../../services/auth/auth";
import {Container, Divider} from "./style.js";

// todo: make view and load routes one route
const Preview = (props) => { 
    const id = props.match.params.id;
    const [moduleData, setModuleData] = useState(null); 
    // get module data
    useEffect(() => { 
        // TODO: add different link for 
        Axios.get("http://localhost:2000/module/load?id=" + id, Auth.requestConfig())
        .then(res => { 
            if( !res.data.msg )
                setModuleData( res.data )
        })    
    }, [])

    if( moduleData ) { 
        return ( 
            <Container>
            <Heading>{moduleData.title}</Heading>
            <Text>by {moduleData.collab}</Text>
            <Text>{moduleData.content}</Text>
            <Text>{moduleData.keyterms}</Text>
            <Divider/>
            <Subhead>Videos</Subhead>
            <Subhead>Acknowledgements</Subhead>
            <Text>{moduleData.ack}</Text>
            <Subhead>Supplemental Notes</Subhead>
            <Text>{moduleData.sup}</Text>
            <Text>{moduleData.doi}</Text>
            </Container>
        )
    }
    return <>Module Does Not Exist</>

}


export default withRouter(Preview);