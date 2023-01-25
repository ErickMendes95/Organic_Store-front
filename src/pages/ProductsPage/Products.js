import logo from "../../assets/images/Organic Store - fundo transparente.png";
import styled from "styled-components";
import Menu from "../../components/Menu/Menu";
import ProductsComp from "../../components/ProductsComp/ProductsComp";
import carrinho from "../../assets/images/carrinho.png";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import tomate from "../../assets/images/tomate.jpg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import CartModal from "../../components/CartModal/CartModal";

export default function Products() {
    return (
        <ContainerHome>
            <ContainerLogo>
                <img src={logo} alt="logo" />
            </ContainerLogo>
            <ContainerMain>
                <h1>Bem vindo(a) Fulano</h1>
                <h2>ESCOLHA OS PRODUTOS ABAIXO</h2>
                <ProductsComp />
            </ContainerMain>
            <Menu />
            <CartModal/>
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
        color: ${verdeEscuro};
        margin-bottom: 10px;
    }
    h2{
        color: ${verdeClaro};
    }
`