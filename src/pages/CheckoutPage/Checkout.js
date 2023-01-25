import Footer from "../../components/Footer/Footer"
import Logo from "../../assets/images/Organic Store - fundo transparente.png"
import {Container, Logo, ProductInfo, Traits, Title, Trait, Price, FormsContainer, Label1, Label2 } from "./style"
import BuyFinishedModal from "../../components/BuyFinishedModal/BuyFinishedModal"

export default function Checkout(){
    return (
        <Container>
            <Logo>
                <img src={Logo} alt="Logo"/>
            </Logo>
            <ProductInfo>
                <Traits>
                    <Title>
                        <ul>
                            <li>Produtos</li>
                        </ul>
                    </Title>
                    <Trait>
                    {/* {products.map((p)=> {
                        <p>{p.name}</p>
                    })} */}
                    </Trait>
                </Traits>
                <Price>
                    <Title>
                        <ul>
                            <li>Valor Total</li>
                        </ul>
                    </Title>
                    <Trait>
                        <p>R$ 120,00</p>
                    </Trait>
                </Price>
            </ProductInfo>
            <FormsContainer>
                <form>
                    <Label1>
                        <input id="cardName" minLength="5" placeholder="Nome impresso no cartão" required></input>
                        <input id="cardNumber" minLength='16' maxLength='16' placeholder="Digitos do cartão" title="XXXX XXXX XXXX XXXX" required></input>
                    </Label1>
                    <Label2>
                        <input id="securityNumber" pattern="^[0-9]{3}$" placeholder="Código de Segurança" title="Encontra-se na parte de trás do cartão. Ex: XXX" required></input>
                        <input id="expirationDate" pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$" placeholder="Validade" title="XX/XX" required></input>    
                    </Label2>
                    <button>Concluir Compra</button>
                </form>
            </FormsContainer>
            <Footer/>
            <BuyFinishedModal/>
        </Container>
    )
}

