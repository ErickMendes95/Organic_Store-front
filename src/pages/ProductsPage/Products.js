import logo from "../../assets/images/Organic Store - fundo transparente.png";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import Menu from "../../components/Menu/Menu";
import ProductsComp from "../../components/ProductsComp/ProductsComp";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import CartModal from "../../components/CartModal/CartModal";

export default function Products() {
    const [produtos, setProdutos] = useState([]);
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
            .then(res => {
                setProdutos(res.data);
            })
            .catch(err => {
                console.log(err.response)
            });
    }, [])

    return (    
        <ContainerHome>
            <ContainerLogo>
                <img src={logo} alt="logo" />
            </ContainerLogo>
            <ContainerMain>
                <h1>Bem vindo(a) Fulano</h1>
                <h2>ESCOLHA OS PRODUTOS ABAIXO</h2>
                <ContainerProdutos>
                    {produtos.map(p =>
                        <ProductsComp p={p} key={p._id}/>
                    )}
                </ContainerProdutos>
            </ContainerMain>
            <Menu showCart={showCart} setShowCart={setShowCart}/>
            <CartModal 
            showCart={showCart}/>
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

const ContainerProdutos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
`