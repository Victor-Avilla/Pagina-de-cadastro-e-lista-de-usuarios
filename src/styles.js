import styled from 'styled-components'
export const Container = styled.div``
export const Title = styled.h2`
    color:rgb(20, 81, 107);
    font-size: 32px;
`
export const Form = styled.form``
export const ContainerInputs = styled.div``
export const Input = styled.input``
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
export const TopBackground = styled.div``
export const InputLabel = styled.label``