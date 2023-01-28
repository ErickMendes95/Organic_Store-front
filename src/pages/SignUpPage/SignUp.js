import { Container, StyledForm, StyledInput, StyledButton } from "./style"
import logo from "../../assets/images/Organic Store - fundo transparente.png";
import React, {useContext } from 'react';
import Context from '../../context/Context';
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner"
import { BsFillReplyAllFill } from "react-icons/bs";


export default function SignUp() {
  const { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword} = useContext(Context)
  const [botaoAnimado, setBotaoAnimado] = useState("Cadastrar")
  const navigate = useNavigate();

  function cadastrar(e) {
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

      const URL = `${process.env.REACT_APP_API_URL}/signup`

      const dadosCadastro = { name, email, password, confirmPassword }
  
      const promessa = axios.post(URL, dadosCadastro)

      promessa.then(res => { 
        alert("Cadastro realizado!")
        navigate('/signin')
       })

      promessa.catch(res => {
        alert('Confira novamente todos os campos preenchidos!')
        setBotaoAnimado("Cadastrar")
        setEmail("")
        setName("")
        setPassword("")
        setConfirmPassword("")
  
      })
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
          {botaoAnimado}
        </StyledButton>

      </StyledForm>
      <BsFillReplyAllFill onClick={()=>{navigate('/')}} />
    </Container>
  )
}