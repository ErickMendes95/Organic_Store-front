import styled from "styled-components";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { verdeClaro } from "../../constants/colors";

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
                <p>R$ {produtoQtd * p.value}</p>
            </Valor>
        </CardProtudo>
    );
}

const CardProtudo = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 10px;
    bold{
        font-weight: 700;
    }
`

const ContainerImage = styled.div`
    background-color: #DDDDDD;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-right: 5px;
    padding: 7px;
    img{
        width: 50px;
        margin-top: 0px;
    }    
`

const ContainerInfos = styled.div`
    width: 110px;
    line-height: 18px;
    font-weight: 700;
`

const Quantidade = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: ${verdeClaro};
    width: 35px;
    height: 40px;
    border-radius: 20px;
    margin-left: 0px;
    margin-right: 30px;
`

const ArrowUp = styled.button`
    background-color: rgba(235,0,0,0);
    position: absolute;
    top: -6px;
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
`

const ArrowDown = styled.button`
    background-color: rgba(0,0,0,0);
    position: absolute;
    top: 23px;
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
`

const Valor = styled.div`
    font-weight: 700;
`