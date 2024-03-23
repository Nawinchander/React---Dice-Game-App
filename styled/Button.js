import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: #000000;
border-radius: 5px ;
min-width: 220px;
border: none;    
font-size: 16px;
border: 3px solid transparent;
cursor: pointer;

&:hover{
    background-color: white;
    border: 3px solid black;
    color: black;
    transition: 0.4s ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 3px solid transparent;
color: black;


&:hover{
    background-color: black;
    border: 3px solid transparent;
    color: white;
    transition: 0.4s ease-in;
}
`;