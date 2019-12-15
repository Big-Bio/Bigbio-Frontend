import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Topbar} from '../pages/container.js';
import {Navlink} from '../pages/text.js';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    flex-direction: row;
`;

function Header() { 
    return ( 
        <Topbar>
            <Link>Big Bio</Link> 
            <Nav> 
                <Navlink to="/basics-of-genomics">Basics of Genomics</Navlink>
                <Navlink to="/resources">Resources</Navlink>
                <Navlink>Search</Navlink>
            </Nav> 
        </Topbar> 
    );
}

export default Header; 