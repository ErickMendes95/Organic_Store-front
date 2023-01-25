import styled from "styled-components"
import { verdeClaro, verdeEscuro } from "../../constants/colors"

export default function BuyFinishedModal(){

    if(modalShow === false) return null

    return (
        <Container>
            <Title>
                <h1>Compra concluída com sucesso!</h1>
                <h2>AGRADECEMOS A PREFERÊNCIA</h2>
            </Title>
            <Button>
                <button>Voltar para Home</button>
            </Button>
        </Container>
    )
}

const Container = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
width: 250px;
height: 67px;
text-align:center;
line-height: 22px;
h1{
    color: #000;
}
h2{
    color: ${verdeClaro}
}
`

const Button = styled.div`
button{
    border: none;
    width: 250px;
    height: 52px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    background: ${verdeEscuro}
}
`