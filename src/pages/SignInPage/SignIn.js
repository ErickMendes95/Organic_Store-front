import { Container, StyledForm, StyledInput, StyledButton, } from './style'
import logo from "../../assets/images/Organic Store - fundo transparente.png";

export default function SignIn(){
    return(
        <Container>
        <img src={logo} alt="OrganicStore"/>
  
        <StyledForm>
  
          <StyledInput
            name="email"
            placeholder="E-mail"
            type="email"
            required
          />
          <StyledInput
            name="password"
            placeholder="Senha"
            required
          />
  
          <StyledButton type="submit">
           Entrar
          </StyledButton>
  
        </StyledForm>
  
      </Container>)
}