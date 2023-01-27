import styled, { keyframes } from "styled-components";
import carrinho from "../../assets/images/carrinho.png";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { useNavigate } from "react-router-dom";
import CardProd from "../CardProd/CardProd";

export default function CartModal({ showCart }) {
    const navigate = useNavigate()
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);
    // let soma = 0;
    // let aux = 0;
    
    console.log(produtosSelec);

    function FinalizarCompra() {
        navigate("/checkout")
    }

    if (showCart === false) return null
    return (
        <ContainerCart>
            <Cart>
                <img src={carrinho} alt="imagem de um carrinho" />
                <h1>Seu carrinho</h1>
                <Cabeçalho>
                    <p><span>PRODUTO</span></p>
                    <p>QTD</p>
                    <p>VALOR</p>
                </Cabeçalho>
                <ContainerProdutos>
                    {produtosSelec.map((p) => 
                       <CardProd key={p._id} p={p}/>
                    )}
                </ContainerProdutos>
                <FinalValue>
                    <p>VALOR TOTAL:</p>
                    <p>120,00</p>
                    {/* <p>{soma = produtosSelec.map((p) => aux += Number(p.quantity) * Number(p.value))}</p> */}
                </FinalValue>
                <Finish onClick={() => FinalizarCompra()}>FINALIZAR COMPRA</Finish>
            </Cart>
        </ContainerCart>
    );
}

const fadeIn = keyframes`
    from{
        transform: translateY(100%)
    }
    to{
        transform: translateY(0)
    }
`

const ContainerCart = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 49px;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    animation: ${fadeIn} 0.6s ease-in;
`

const Cart = styled.div`
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
    


    img{
        margin-top: 10px;
        width: 65px;
    }
    h1{
        font-size: 18px;
        font-weight: 700;
        color: ${verdeEscuro};
    }
`

const Cabeçalho = styled.div`
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

const ContainerProdutos = styled.div`
    width: 300px;
`

const FinalValue = styled.div`
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

const Finish = styled.button`
    position: fixed;
    bottom: 60px;
    width: 250px;
    height: 35px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: ${verdeEscuro};
    border-radius: 5px;
`