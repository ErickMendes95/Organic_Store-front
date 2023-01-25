import styled from "styled-components";
import {verdeClaro, verdeEscuro} from "../../constants/colors"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${verdeClaro};
    color: #fff;
`

export const Logo = styled.div`
    margin-top: 70px;
`

export const ProductInfo = styled.div`
    margin-top: 25px;
    width: 299px;
`


export const Traits = styled.div`
`

export const Title = styled.div`
    display: flex;
    font-size: 16px;
    p{
        padding-left: 5px;
        color: ${verdeEscuro}
    }
    `
    
export const Trait = styled.div`
    margin-top: 10px;
    font-size: 14px;
    p{
        margin-bottom: 5px;
        color: #fff;
    }
    `
    
export const Price = styled.div`
    margin-top: 10px;
`

export const FormsContainer = styled.div`
    margin-top: 20px;
    form{
        display: flex;
        flex-direction: column;
        width: 299px;    
    }
    input{
        width: 299px;
        height: 52px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    button{
        color: ${verdeEscuro};
        height: 52px;
        background: #FF4791;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const Label1 = styled.div``

export const Label2 = styled.div`
    display: flex;
    gap: 10px;
    input{
        width: 145px;
        
    }
`