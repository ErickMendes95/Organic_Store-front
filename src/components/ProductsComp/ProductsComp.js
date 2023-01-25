import styled from "styled-components";
import tomate from "../../assets/images/tomate.jpg";
import { TiShoppingCart } from "react-icons/ti";
import { verdeEscuro, verdeClaro } from "../../constants/colors";

export default function ProductsComp () {
    return (
        <ContainerProdutos>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                    <CardProtudo>
                        <img src={tomate} alt="produto"/>
                        <h3>Tomate - 500GR</h3>
                        <p>R$20,00</p>
                        <button>
                            <TiShoppingCart />
                        </button>
                    </CardProtudo>
                </ContainerProdutos>
    );
}

const ContainerProdutos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
`

const CardProtudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
    background-color: #DDDDDD;
    border-radius: 5px;
    gap:10px;
    padding: 10px;
    img {
        width: 100px;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
        color: ${verdeEscuro};
    }
    p{
        color: ${verdeEscuro};
    }
    button{
        width: 120px;
        background-color: ${verdeClaro};
        border-radius: 5px;
        svg{
            font-size: 30px;
            color: #FFFFFF;
        }
    }
`