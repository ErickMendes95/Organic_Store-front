import logo from "../assets/images/Organic Store - fundo transparente.png";
import styled from "styled-components";
import { AiFillHome } from 'react-icons/ai';

export default function Products() {
    return (
        <ContainerHome>
            <ContainerLogo>
                <img src={logo} />
            </ContainerLogo>
            <ContainerMain>
                <h1>Bem vindo(a) Fulano</h1>
                <h2>ESCOLHA OS PRODUTOS ABAIXO</h2>
            </ContainerMain>
            <ContainerMenu>
                <AiFillHome color="#FFFFFF"/>
            </ContainerMenu>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    
`

const ContainerLogo = styled.header`
    display: flex;
    justify-content: center;
    background-color: #6EB122;
    img{
        width: 150px;
    }
`

const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    h1{
        font-size: 20px;
        font-weight: 700;
        color: #008037;
        margin-bottom: 10px;
    }
    h2{
        color: #6EB122;
    }
`

const ContainerMenu = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: #6EB122;
    z-index: 1;
`