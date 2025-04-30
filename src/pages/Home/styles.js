import styled from 'styled-components'
export const Container = styled.div`
    background-color:rgb(34, 46, 77);
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction:column;
    padding:20px;
    height:100vh;
`
export const Title = styled.h2`
    color:#ffffff;
    font-size: 38px;
    text-align:center;
    font-style:normal;
    font-weight: 300;
`
export const Form = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:500px;
    gap:20px;
`
export const ContainerInputs = styled.div`
    display:flex;
    gap:20px;
`
export const Input = styled.input`
    border:1px solid #ccc;
    border-radius:10px;
    background-color:#fff;
    padding:12px 20px;
    outline:none;
    width: 100%;
`

export const InputLabel = styled.label`
    color:#fff;
    font-size:12px;
    font-weight:500;

    span{
        color:rgb(194, 21, 21);
        font-weight:bold;
    }
`

// export const TopBackground = styled.div`
//     display:flex;
//     align-items:center;
//     justify-content: center;
//     background: linear-gradient(to right,#fe6d50,#58273d);
//     border-radius:30px;
//     height:30vh;
//     width:90vw;
//     max-width:40vw;
//     max-height:30vh;

//     @media screen and (max-width: 600px) {
//         max-width:100vw;
//         max-height:30vh;
//     }
//     @media screen and (max-width: 1500px) {
//         max-width:100vw;
//         max-height:30vh;
//     }

//     img{
//         max-width:100%;
//         max-height:100%;

//         @media screen and (max-width: 600px)  {
//         max-width:70vw;
//         max-height:30vh;
        
//     }
// }
//    `