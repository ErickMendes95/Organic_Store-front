import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { CardProtudo, ContainerImage, ContainerInfos, Quantidade, ArrowUp, ArrowDown, Valor} from "./style";

export default function CardProd({p}) {
    const [produtoQtd, setProdutoQtd] = useState(p.quantity);
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);

    function QuantidadeProduto(e) {
        if (produtoQtd >= 1) {
            if (e === 'up') {
                setProdutoQtd(produtoQtd + 1)
            } else if (e === 'dw') {
                setProdutoQtd(produtoQtd - 1)
                if (produtoQtd <= 1) {
                    setProdutoQtd(1)
                    alert("impossível colocar 0")
                }
            }
        }
        p.quantity = produtoQtd;
    }
    console.log(p);
    console.log(produtosSelec);

    return (
        <CardProtudo>
            <ContainerImage>
                <img src={p.image} alt="produto" />
            </ContainerImage>
            <ContainerInfos>
                <p>{p.name}</p>
            </ContainerInfos>
            <Quantidade>
                <p>{produtoQtd}</p>
                <ArrowUp>
                    <IoMdArrowDropup onClick={() => QuantidadeProduto('up')} />
                </ArrowUp>
                <ArrowDown>
                    <IoMdArrowDropdown onClick={() => QuantidadeProduto('dw')} />
                </ArrowDown>
            </Quantidade>
            <Valor>
                <p>R$ {(produtoQtd * p.value).toFixed(2).replace('.', ',')}</p>
            </Valor>
        </CardProtudo>
    );
}