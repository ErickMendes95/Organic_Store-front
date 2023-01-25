import styled from 'styled-components';
import { verdeClaro, verdeEscuro } from "../../constants/colors"

export const Container = styled.div`
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

export const Content = styled.div`
    width: 300px;
    height: 210px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Title = styled.div`
background: #fff;
width: 250px;
height: 67px;
text-align:center;
line-height: 22px;
h1{
    font-size: 18px;
    color: #000;
}
h2{
    padding-top: 10px;
    font-size: 14px;
    color: ${verdeClaro}
}
`

export const Button = styled.div`
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