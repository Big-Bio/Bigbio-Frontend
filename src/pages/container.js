import styled from 'styled-components';

export const Body = styled.div`
    display: flex; 
    height: 80vh;
    justify-content: space-around;
    align-content: center;
    margin: 80px 40px;
`;

// header
export const Topbar = styled.div`
    position: absolute;
    left: 0; 
    right: 0; 
    top: 0;
    display: flex;
    
    background-color: white;
    justify-content: space-between;
    padding: 30px 40px 30px 40px;
`;

// footer
export const BottomBar = styled.div`
    position: absolute;
    left: 0; 
    right: 0; 
    bottom: 0;
    background-color: #08447B;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
`;

export const Modal = styled.div`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    background: #FFFFFF;
    padding: 40px 50px;
`;

export const AuthModal = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 350px;
    height: 400px;
`;

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 2px;
    width: 250px;
    height: 35px;
    font-size: 16px;
    padding: 10px;
`;