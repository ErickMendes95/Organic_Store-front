import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { CardProtudo, ContainerImage, ContainerInfos, Quantidade, ArrowUp, ArrowDown, Valor } from "./style";

export default function CardProd({ p }) {
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);



    function QuantidadeProduto(e) {
        let updatedCart = produtosSelec

        if (e === 'up' && p.quantity >= 1) {
            p.quantity += 1
        } else if (e === 'dw' && p.quantity > 1) {
            p.quantity -= 1
        }
        else {
            updatedCart = updatedCart.filter((item) => (item._id !== p._id))
        }

        updatedCart = updatedCart.map((item) => {
            if (item._id === p._id) {
                item.quantity = p.quantity
            }
            return item
        })
        setProdutosSelec(updatedCart)
    }

    return (
        <CardProtudo>
            <ContainerImage>
                <img src={p.image} alt="produto" />
            </ContainerImage>
            <ContainerInfos>
                <p>{p.name}</p>
            </ContainerInfos>
            <Quantidade>
                <p>{p.quantity}</p>
                <ArrowUp>
                    <IoMdArrowDropup onClick={() => QuantidadeProduto('up')} />
                </ArrowUp>
                <ArrowDown>
                    <IoMdArrowDropdown onClick={() => QuantidadeProduto('dw')} />
                </ArrowDown>
            </Quantidade>
            <Valor>
                <p>R$ {(p.quantity * p.value).toFixed(2).replace('.', ',')}</p>
            </Valor>
        </CardProtudo>
    );
}