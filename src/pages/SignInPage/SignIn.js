import { Container, StyledForm, StyledInput, StyledButton, } from './style'
import logo from "../../assets/images/Organic Store - fundo transparente.png";
import { useContext } from 'react';
import Context from '../../context/Context';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import { BsFillReplyAllFill } from "react-icons/bs";


export default function SignIn() {
  const { email, setEmail, token, setToken, password, setPassword } = useContext(Context)
  const [botaoAnimado, setBotaoAnimado] = useState("Entrar")

  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault()
    setBotaoAnimado(
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />)

    const URL = `${process.env.REACT_APP_API_URL}/signin`

    const dadosCadastro = { email, password }

    const promessa = axios.post(URL, dadosCadastro)

    promessa.then(res => {
      navigate('/products')
      setToken(res.data)
        (token)
    })

    promessa.catch(res => {
      alert('Usuário ou senha inválidos!')
      setBotaoAnimado("Entrar")
      setEmail("")
      setPassword("")
    })
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
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <StyledButton type="submit">
          {botaoAnimado}
        </StyledButton>

      </StyledForm>
      <BsFillReplyAllFill onClick={() => { navigate('/') }} />

    </Container>)
}