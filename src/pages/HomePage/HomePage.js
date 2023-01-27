import {Container, StyledButton} from './style'
import LogoInicio from "../../assets/images/LogoInicio.png"
import {useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <img src={LogoInicio} alt="OrganicStore"/>


        <StyledButton type="submit" onClick={()=>{navigate('/signup')}}>
          Cadastrar
        </StyledButton>

        <StyledButton type="submit" onClick={()=>{navigate('/signin')}}>
          Já tenho uma conta
        </StyledButton>

    </Container>
  )
}