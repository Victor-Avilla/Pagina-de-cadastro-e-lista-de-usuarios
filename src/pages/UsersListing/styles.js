import styled from "styled-components";

export const Container = styled.div`
background-color:rgb(34, 46, 77);
min-height: 100vh;
display:flex;
flex-direction: column;
align-items:center;
justify-content:space-evenly;
padding:20px
`
export const Title = styled.h2`
    color:#ffffff;
    font-size: 38px;
    text-align:center;
    font-style:normal;
    font-weight: 300;
    padding:30px 0px 30px 0px;
`
export const ContainerUsers = styled.div`
    display:grid;
    padding-bottom: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;

    @media (max-width: 1230px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 865px) {
        grid-template-columns: 1fr;
    }
`
export const IconUsers = styled.div`
background-color:rgb(67, 73, 100);
padding:16px;
border-radius: 32px;
display:flex;
align-items: center;
justify-content: start;
gap: 20px;
max-width: 400px;
h3{
    color:#fff;
    font-size:24px;
    margin-bottom: 3px;
    text-transform: capitalize;
}
`
export const Content = styled.div`   
    display:flex;
    flex-direction:column;
    color:#ffffff;
    font-size: 14px;
    font-weight: 200;
    flex-grow: 1;
`
export const TrashButton = styled.img`
cursor: pointer;
padding-left: 10px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}
`
export const AvatarUser = styled.img`
height: 80px;
`