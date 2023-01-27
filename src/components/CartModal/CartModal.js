import { keyframes } from "styled-components";
import carrinho from "../../assets/images/carrinho.png";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { useNavigate } from "react-router-dom";
import CardProd from "../CardProd/CardProd";
import { ContainerCart, Cart, LogoCart, Cabeçalho, ContainerProdutos, FinalValue, Finish } from "./style";

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
                <LogoCart src={carrinho} alt="imagem de um carrinho" />
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