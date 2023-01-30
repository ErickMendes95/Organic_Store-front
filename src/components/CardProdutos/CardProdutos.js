import { CardProduto } from "./style";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";

export default function CardProtudo({ p }) {
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);

    function selecionarProduto(produto) {
        setProdutosSelec([...produtosSelec, produto]);
    }

    return (
        <CardProduto>
            <img src={p.image} alt="produto" />
            <h3>{p.name}</h3>
            <p>R$ {p.value.toFixed(2).replace('.', ',')}</p>
            <button
                onClick={() => selecionarProduto(p)}
                disabled={produtosSelec.find(prod => prod.name === p.name) ? true : false}
            >
                <TiShoppingCart />
            </button>
        </CardProduto>
    );
}