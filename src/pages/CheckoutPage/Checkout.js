import Menu from "../../components/Menu/Menu"
import logo from "../../assets/images/Organic Store - fundo transparente.png"
import { Container, Logo, ProductInfo, Traits, Title, Trait, Text, Price, PriceTrait, FormsContainer, Label1, Label2 } from "./style"
import BuyFinishedModal from "../../components/BuyFinishedModal/BuyFinishedModal"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Checkout() {

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [cardName, setCardName] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [securityNumber, setSecurityNumber] = useState()
    const [expirationDate, setExpirationDate] = useState()

    async function FinalizarCompra(e) {
        e.preventDefault()
        try {
            // await axios.post("URL do back-end",{
            //     cardName: cardName,
            //     cardNumber: cardNumber,
            //     securityNumber: securityNumber,
            //     expirationDate: expirationDate,
            //     products: SelecProducts.produtos
            // })

            setShowModal(true)

            setTimeout(() => {
                navigate("/products")
            }, 3000)

        } catch (error) {
            (error)
        }
    }
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>
            <ProductInfo>
                <Traits>
                    <Title>
                        <ul>
                            <li>Produtos</li>
                        </ul>
                    </Title>
                    <Trait>
                        <Text>
                            {/* {products.map((p)=> {
                                <p>{p.name}</p>
                            })} */}
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                            <p>Tomate - 500gr</p>
                        </Text>
                        <PriceTrait>
                            <p>R$ 24,00</p>
                        </PriceTrait>
                    </Trait>
                </Traits>
                <Price>
                    <Title>
                        <ul>
                            <li>Valor Total</li>
                        </ul>
                    </Title>
                    <PriceTrait>
                        <p>R$ 120,00</p>
                    </PriceTrait>
                </Price>
            </ProductInfo>
            <FormsContainer>
                <form onSubmit={FinalizarCompra}>
                    <Label1>
                        <input id="cardName" minLength="5" placeholder="Nome impresso no cartão" onChange={(e) => setCardName(e.target.value)} required></input>
                        <input id="cardNumber" minLength='16' maxLength='16' placeholder="Digitos do cartão" title="XXXX XXXX XXXX XXXX" onChange={(e) => setCardNumber(e.target.value)} required></input>
                    </Label1>
                    <Label2>
                        <input id="securityNumber" pattern="^[0-9]{3}$" placeholder="Código de Segurança" title="Encontra-se na parte de trás do cartão. Ex: XXX" onChange={(e) => setSecurityNumber(e.target.value)} required></input>
                        <input id="expirationDate" pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$" placeholder="Validade" title="XX/XX" onChange={(e) => setExpirationDate(e.target.value)} required></input>
                    </Label2>
                    <button>Concluir Compra</button>
                </form>
            </FormsContainer>
            <Menu />
            <BuyFinishedModal
                showModal={showModal}
                setShowModal={setShowModal} />
        </Container>
    )
}

