import { Container, StyledForm, StyledInput, StyledButton } from "./style"
import logo from "../../assets/images/Organic Store - fundo transparente.png";


export default function SignUp() {
  return (
    <Container>
     <img src={logo} alt="OrganicStore"/>

      <StyledForm>

        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          required
        />
        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          required
        />

        <StyledInput
          name="password"
          placeholder="Confirme a senha"
          type="password"
          required
        />
        <StyledButton>
          Cadastrar
        </StyledButton>

      </StyledForm>

    </Container>
  )
}