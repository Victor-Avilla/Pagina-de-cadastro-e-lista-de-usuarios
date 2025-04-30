import styled from "styled-components";

export const Background = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(to right,#fe6d50,#58273d);
    border-radius:30px;
    height:30vh;
    width:90vw;
    max-width:40vw;
    max-height:30vh;

    @media screen and (max-width: 600px) {
        max-width:100vw;
        max-height:30vh;
    }
    @media screen and (max-width: 1500px) {
        max-width:100vw;
        max-height:30vh;
    }

    img{
        max-width:100%;
        max-height:100%;

        @media screen and (max-width: 600px)  {
        max-width:70vw;
        max-height:30vh;
        
    }
}
   `