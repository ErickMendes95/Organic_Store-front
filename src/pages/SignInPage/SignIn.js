import { Container, StyledForm, StyledInput, StyledButton, } from './style'
import logo from "../../assets/images/Organic Store - fundo transparente.png";
import {useContext } from 'react';
import Context from '../../context/Context';

export default function SignIn() {
  const { email, setEmail, token, setToken, password, setPassword } = useContext(Context)

  function signIn(e) {
    e.preventDefault()    
  }

  return (
    <Container>
      <img src={logo} alt="OrganicStore" />

      <StyledForm onSubmit={signIn}>

        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <StyledButton type="submit">
         Entrar
        </StyledButton>

      </StyledForm>

    </Container>)
}