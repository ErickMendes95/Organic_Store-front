import { useNavigate } from "react-router-dom"
import { Container, Content, Title, Button } from "./style"

export default function BuyFinishedModal({showModal, setShowModal}){

    const navigate = useNavigate()

    if(showModal === false) return null

    return (
        <Container>
            <Content>   
                <Title>
                    <h1>Compra concluída com sucesso!</h1>
                    <h2>AGRADECEMOS A PREFERÊNCIA</h2>
                </Title>
                <Button>
                    <button onClick={()=> navigate("/products")}>Voltar para Produtos</button>
                </Button>
            </Content> 
        </Container>
    )
}
