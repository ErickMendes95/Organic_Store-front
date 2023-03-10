import styled from "styled-components";
import {verdeClaro, verdeEscuro} from "../../constants/colors"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${verdeClaro};
    color: #fff;
`

export const Logo = styled.div`
    margin-top: -20px;
    img{
        width: 275px;
    }
`

export const ProductInfo = styled.div`
margin-top: -20px;
    width: 299px;
`


export const Traits = styled.div`
`

export const Title = styled.div`
    display: flex;
    font-size: 18px;
    li{
        color: ${verdeEscuro}
    }
    `
    
export const Trait = styled.div`
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    line-height: 18px;
    overflow-y: scroll;
    max-height: 100px;
    p{
        margin-bottom: 5px;
        padding-left: 5px;
        color: #fff;
    }
    `

export const Text= styled.div`
`
    
export const Price = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const PriceTrait = styled.div`
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
        font-size: 12px;
        padding-left: 5px;
    }
    button{
        color: #fff;
        height: 52px;
        background: ${verdeEscuro};
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 50px;
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