import React from 'react';
import {Link} from 'react-router-dom';
import {BottomBar} from '../pages/container.js'

function Footer() { 
    return ( 
        <BottomBar>
            <Link>UCLA Logo</Link> 
            <p>Big Bio is a registered campus organization (RCO) through the office of <br/>Student Organizations, Leadership & Engagement (SOLE) at UCLA.</p> 
        </BottomBar> 
    );
}

export default Footer; 