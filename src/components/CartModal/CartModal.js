import styled from "styled-components";
import carrinho from "../../assets/images/carrinho.png";
import { verdeEscuro, verdeClaro } from "../../constants/colors";
import tomate from "../../assets/images/tomate.jpg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function CartModal(){
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
                        <CardProtudo>
                            <ContainerImage>
                                <img src={tomate} alt="produto" />
                            </ContainerImage>
                            <ContainerInfos>
                                <p><bold>Tomate - 500GR</bold></p>
                                <p>R$20,00</p>
                            </ContainerInfos>
                            <Quantidade>
                                <p>1</p>
                                <ArrowUp>
                                    <IoMdArrowDropup />
                                </ArrowUp>
                                <ArrowDown>
                                    <IoMdArrowDropdown />
                                </ArrowDown>
                            </Quantidade>
                            <p><bold>R$20,00</bold></p>
                        </CardProtudo>                        
                    </ContainerProdutos>
                    <FinalValue>
                        <p>VALOR TOTAL:</p>
                        <p>120,00</p>
                    </FinalValue>
                    <Finish>FINALIZAR COMPRA</Finish>
                </Cart>
            </ContainerCart>
    );
}

const ContainerCart = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 49px;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
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
        margin-left: 30px;
        margin-right: 40px;
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
`

const Quantidade = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: ${verdeClaro};
    width: 30px;
    height: 35px;
    border-radius: 20px;
    margin-left: 5px;
    margin-right: 30px;
    padding-top: 3px;
`

const ArrowUp = styled.button`
    background-color: rgba(235,0,0,0);
    position: absolute;
    top: -6px;
    font-size: 20px;
    color: #FFFFFF;
`

const ArrowDown = styled.button`
    background-color: rgba(0,0,0,0);
    position: absolute;
    top: 21px;
    font-size: 20px;
    color: #FFFFFF;
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