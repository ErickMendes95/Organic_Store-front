import styled, { keyframes } from "styled-components";
import { verdeEscuro, verdeClaro } from "../../constants/colors";

const fadeIn = keyframes`
    from{
        transform: translateY(100%)
    }
    to{
        transform: translateY(0)
    }
`

export const ContainerCart = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 49px;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    animation: ${fadeIn} 0.6s ease-in;
`

export const Cart = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50px;
    left: 20px;
    right: 20px;
    bottom: 49px;
    background-color: #FFFFFF;
    z-index: 1;
    h1{
        font-size: 18px;
        font-weight: 700;
        color: ${verdeEscuro};
    }
`

export const LogoCart = styled.img`
    margin-top: 10px;
    width: 65px;
`

export const Cabeçalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: ${verdeClaro};
    margin-top: 20px;
    padding: 2px;
    span{
        padding-left: 20px;
        padding-right: 30px;
    }
`

export const ContainerProdutos = styled.div`
    width: 300px;
    height: 100%;
    margin-bottom: 100px;
    overflow-y: auto;
    h1{
        margin-top: 190px;
        text-align: center;
    }
`

export const FinalValue = styled.div`
    position: fixed;
    bottom: 110px;
    display: flex;
    justify-content: space-between;
    width: 320px;
    font-weight: 700;
    color: ${verdeEscuro};
    padding-left: 15px;
    padding-right: 15px;
`

export const Finish = styled.button`
    position: fixed;
    bottom: 60px;
    width: 250px;
    height: 35px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: ${verdeEscuro};
    border-radius: 5px;
`