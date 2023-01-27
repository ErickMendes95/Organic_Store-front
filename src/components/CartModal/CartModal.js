import styled, { keyframes } from "styled-components";
import carrinho from "../../assets/images/carrinho.png";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import tomate from "../../assets/images/tomate.jpg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import { ContextSelecionados } from "../../context/ContextSelecionados";
import { useNavigate } from "react-router-dom";

export default function CartModal({showCart}){

    const navigate = useNavigate()
    const [produtosSelec, setProdutosSelec] = useContext(ContextSelecionados);
    const [produtoQtd, setProdutoQtd] = useState(1)

    function QuantidadeProduto(e){
        if(produtoQtd >= 1){
            if(e === 'up'){
                setProdutoQtd(produtoQtd+1)
            } else if(e === 'dw'){
                setProdutoQtd(produtoQtd-1)
                if(produtoQtd <= 1){
                    setProdutoQtd(1)
                    alert("impossível colocar 0")
                }
            }
        }
    }

    function FinalizarCompra(){
        navigate("/checkout")
    }
    
    if(showCart === false) return null
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
                        {/* {produtosSelec.map((p)=>{ */}
                            <CardProtudo>
                                <ContainerImage>
                                    <img src={tomate} alt="produto" />
                                </ContainerImage>
                                <ContainerInfos>
                                    <p>tomate</p>
                                </ContainerInfos>
                                <Quantidade>
                                    <p>{produtoQtd}</p>
                                    <ArrowUp>
                                        <IoMdArrowDropup onClick={()=> QuantidadeProduto('up')}/>
                                    </ArrowUp>
                                    <ArrowDown>
                                        <IoMdArrowDropdown onClick={()=> QuantidadeProduto('dw')}/>
                                    </ArrowDown>
                                </Quantidade>
                                <Valor>
                                    <p>R$ {produtoQtd*20}</p>
                                </Valor>
                            </CardProtudo>                        
                        {/* // })} */}
                    </ContainerProdutos>
                    <FinalValue>
                        <p>VALOR TOTAL:</p>
                        <p>120,00</p>
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