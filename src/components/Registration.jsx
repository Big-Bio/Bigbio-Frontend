import React from 'react';
import styled from 'styled-components'
import {Subhead, Text, Poplink} from '../pages/text.js';
import {AuthModal, Input} from '../pages/container.js'; 
import {Submit} from '../pages/assets.js'

const Fields = styled.div`
    margin: 20px 0px;
`;

function Registration() { 
    return ( 
        <AuthModal>
            <Subhead>Register Today</Subhead>
            <form> 
                <Fields>
                    <Text>Email</Text> 
                    <Input/> <br/>
                    <Text>Password</Text>
                    <Input type="password"/> <br/>
                </Fields>
                <Submit>REGISTER</Submit>
                <Text>Already have an account?</Text>
                <Poplink>login here.</Poplink>
            </form> 
        </AuthModal>
    );
}

export default Registration; 