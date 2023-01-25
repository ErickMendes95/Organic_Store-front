import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#FFFFFF;
  width: 100%;
  height: 100vh;
  img{
        width: 300px;
        margin-bottom: 13px;
    }
`
export const StyledButton = styled.button`
  
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background: #6EB122;
  color: #FFFFFF;
  margin-bottom: 13px;
`