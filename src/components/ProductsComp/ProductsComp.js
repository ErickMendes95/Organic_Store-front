import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";

export default function ProductsComp({ p }) {
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
            <p>{p.value}</p>
            <button
                onClick={() => selecionarProduto(p)}
                disabled={clicked}
            >
                <TiShoppingCart />
            </button>
        </CardProduto>
    );
}

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
    background-color: #DDDDDD;
    border: 0px solid green;
    border-radius: 5px;
    gap:10px;
    padding: 10px;
    overflow: auto;
    img {
        width: 100px;
    }
    h3{
        font-size: 17px;
        font-weight: 700;
        color: ${verdeEscuro};
    }
    p{
        color: ${verdeEscuro};
    }
    button{
        width: 120px;
        background-color: ${props => props.disabled ? verdeEscuro : verdeClaro};
        border-radius: 5px;
        cursor: pointer;
        &:disabled {
        background-color: #AAAAAA;
        cursor: default;
    }
        svg{
            font-size: 30px;
            color: #FFFFFF;
        }
    }
`