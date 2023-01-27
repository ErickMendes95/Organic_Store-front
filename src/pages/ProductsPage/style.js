import styled from "styled-components";
import { verdeEscuro, verdeClaro } from "../../constants/colors";

export const ContainerHome = styled.div`
    margin-bottom: 60px;
`

export const ContainerLogo = styled.header`
    display: flex;
    justify-content: center;
    background-color: #6EB122;
    img{
        width: 150px;
    }
`

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    h1{
        font-size: 20px;
        font-weight: 700;
        color: ${verdeEscuro};
        margin-bottom: 10px;
    }
    h2{
        color: ${verdeClaro};
    }
`

export const ContainerProdutos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
`