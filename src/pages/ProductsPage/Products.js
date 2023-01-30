import logo from "../../assets/images/Organic Store - fundo transparente.png";
import axios from "axios";
import { useEffect, useState } from "react"
import Menu from "../../components/Menu/Menu";
import CardProtudo from "../../components/CardProdutos/CardProdutos";
import CartModal from "../../components/CartModal/CartModal";
import { ContainerHome, ContainerLogo, ContainerMain, ContainerProdutos } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { verdeEscuro, verdeClaro } from "../../constants/colors";

export default function Products() {
    const [produtos, setProdutos] = useState(undefined);
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
            .then(res => {
                return setProdutos(res.data);
            })
            .catch(err => {
                return console.log(err.response)
            });
    }, [])

    return (
        <ContainerHome>
            <ContainerLogo>
                <img src={logo} alt="logo" />
            </ContainerLogo>
            <ContainerMain>
                <h1>Bem vindo(a) Fulano</h1>
                <h2>ESCOLHA OS PRODUTOS ABAIXO</h2>
                {produtos === undefined ? <><ThreeDots color={verdeClaro} width="100" /></> :
                <ContainerProdutos>
                    {produtos.map(p =>
                        <CardProtudo p={p} key={p._id} />
                    )}
                </ContainerProdutos>}
            </ContainerMain>
            <Menu showCart={showCart} setShowCart={setShowCart} />
            <CartModal
                showCart={showCart} />
        </ContainerHome>
    );
}