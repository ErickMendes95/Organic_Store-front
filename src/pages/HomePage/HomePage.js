import {Container, StyledButton} from './style'
import LogoInicio from "../../assets/images/LogoInicio.png"

export default function HomePage() {

  return (
    <Container>
      <img src={LogoInicio} alt="OrganicStore"/>


        <StyledButton type="submit">
          Cadastrar
        </StyledButton>

        <StyledButton type="submit">
          Já tenho uma conta
        </StyledButton>

    </Container>
  )
}