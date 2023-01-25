import logo from "../../assets/images/Organic Store - fundo transparente.png";
import styled from "styled-components";
import Menu from "../../components/Menu/Menu";
import ProductsComp from "../../components/ProductsComp/ProductsComp";

export default function Products() {
    return (
        <ContainerHome>
            <ContainerLogo>
                <img src={logo} alt="logo"/>
            </ContainerLogo>
            <ContainerMain>
                <h1>Bem vindo(a) Fulano</h1>
                <h2>ESCOLHA OS PRODUTOS ABAIXO</h2>
                <ProductsComp/>
            </ContainerMain>
            <Menu/>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    margin-bottom: 60px;
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