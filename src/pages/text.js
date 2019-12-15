// styled text components
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h1`
    color: #08447B; 
    margin: 5px 0px 10px 0px;
    font-size: 52px;
    font-weight: 400;
`; 

export const Subhead = styled.h2`
    color: #08447B;
`; 

export const Navlink = styled(Link)`
    margin-left: 35px;
    color: #AAA;
    font-size: 16px;
`; 

export const Styledlink = styled(Link)`
    line-height: 50px;
    color: #AAAAAA;
    font-size: 24px;
    :visited {
        color: #AAAAAA;
    }
    :hover { 
        color: #AAAAAA;
    }
`;

export const Poptext = styled.h4`
    font-size: 16px;
    color: #E527A1;
    margin: 0;
`; 

export const Poplink = styled(Link)`
    font-size: 16px;
    color: #E527A1;
`;

export const Text = styled.p`
    margin: 10px 0px;
    color: #AAA;
    font-size: 16px;
    width: ${props => props.width ? props.width : "auto"};
`; 



