import { CardProduto } from "./style";
import { TiShoppingCart } from "react-icons/ti";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";

export default function CardProtudo({ p }) {
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);
    const [clicked, setClicked] = useState(false);

    function selecionarProduto(produto) {
        setClicked(true);
        setProdutosSelec([...produtosSelec, produto]); 
        console.log(produtosSelec)
    }

    return (
        <CardProduto>
            <img src={p.image} alt="produto" />
            <h3>{p.name}</h3>
            <p>R$ {p.value.toFixed(2).replace('.', ',')}</p>
            <button
                onClick={() => selecionarProduto(p)}
                disabled={clicked}
            >
                <TiShoppingCart />
            </button>
        </CardProduto>
    );
}