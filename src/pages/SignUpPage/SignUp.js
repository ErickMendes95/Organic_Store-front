import { Container, StyledForm, StyledInput, StyledButton } from "./style"
import logo from "../../assets/images/Organic Store - fundo transparente.png";
import {useContext } from 'react';
import Context from '../../context/Context';

export default function SignUp() {
  const { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword} = useContext(Context)

  function cadastrar(e) {
    e.preventDefault()
  }

  return (
    <Container>
     <img src={logo} alt="OrganicStore"/>

      <StyledForm onSubmit={cadastrar}>

        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <StyledInput
          name="password"
          placeholder="Confirme a senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <StyledButton>
          Cadastrar
        </StyledButton>

      </StyledForm>

    </Container>
  )
}