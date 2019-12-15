import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import {LearnSVG, ResearchSVG, ContributeSVG} from './icons';
import {Heading, Subhead, Text, Poptext, Styledlink} from './text';
import {Button} from './assets';
import {Body} from './container';
import Registration from '../components/Registration';
import styled from 'styled-components';

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Links = styled.div`
    display: block;
    margin: 10px 50px 40px;
`;

function Landing() { 

    return ( 
        <div> 
            <Header/> 
                <Body> 
                    <Info> 
                        <Poptext>Want to Do Research?</Poptext>
                        <Heading>Learn with us</Heading>
                        <Text width={"500px"}>With tutorials given by UCLA's talented grad students and postdocs, you or those you mentor can quickly learn the basics.</Text> 
                            <Links>
                                <Styledlink to="/basics-of-genomics"><LearnSVG/>learn</Styledlink> <br/>
                                <Styledlink to="/resources"><ResearchSVG/>research</Styledlink> <br/>
                                <Styledlink to="/module-instructions"> <ContributeSVG/>contribute</Styledlink> <br/>
                            </Links>
                    <Link to='/basics-of-genomics'><Button>see our work</Button></Link> 
                    </Info> 
                    <Registration/>
                </Body> 
            <Footer/>
        </div> 
    );
}

export default Landing; 
