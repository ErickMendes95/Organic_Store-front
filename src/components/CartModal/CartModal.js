import carrinho from "../../assets/images/carrinho.png";
import { useContext, useState, useEffect } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { useNavigate } from "react-router-dom";
import CardProd from "../CardProd/CardProd";
import { ContainerCart, Cart, LogoCart, Cabeçalho, ContainerProdutos, FinalValue, Finish } from "./style";

export default function CartModal({ showCart }) {
    const navigate = useNavigate()
    const [totalValue, setTotalValue] = useState(0)
    const [produtosSelec] = useContext(ContextSelecionados)

    useEffect(() => {
        setTotalValue(produtosSelec.reduce((acc, obj) => {
            return acc + obj.quantity * obj.value
        }, 0))

    }, [produtosSelec])

    function FinalizarCompra() {
        navigate("/checkout", {state: {totalValue:totalValue}})
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
                    {produtosSelec.length === 0 ? <h1>Não há produtos <br/> no carrinho</h1> : <>
                    {produtosSelec.map((p) =>
                        <CardProd key={p._id} p={p} />
                    )}</>}
                </ContainerProdutos>
                <FinalValue>
                    <p>VALOR TOTAL:</p>
                    <p>R$ {totalValue.toFixed(2).replace('.', ',')}</p>
                </FinalValue>
                <Finish onClick={() => FinalizarCompra()}>FINALIZAR COMPRA</Finish>
            </Cart>
        </ContainerCart>
    );
}