import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    color:white;
    border: none;
    width:fit-content;
    padding:16px 32px;
    border-radius:25px;
    cursor: pointer;
    background:linear-gradient(50deg,rgb(58, 158, 180) 0%,
     rgba(253, 29, 29, 1) 30%, rgba(252, 176, 69, 1) 100%);
     &:hover{
         opacity:0.8;
     }
     &:active{
        opacity:0.6;
     }
     `