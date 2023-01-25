import { Container, Content, Title, Button } from "./style"

export default function BuyFinishedModal(){

    // if(modalShow === false) return null

    return (
        <Container>
            <Content>   
                <Title>
                    <h1>Compra concluída com sucesso!</h1>
                    <h2>AGRADECEMOS A PREFERÊNCIA</h2>
                </Title>
                <Button>
                    <button>Voltar para Home</button>
                </Button>
            </Content> 
        </Container>
    )
}
