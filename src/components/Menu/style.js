import styled from "styled-components";
import { verdeClaro } from "../../constants/colors";

export const ContainerMenu = styled.footer`
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
bottom: 0;
left: 0;
width: 100vw;
height: 50px;
background-color: ${verdeClaro};
z-index: 1;
svg{
    cursor: pointer;
    font-size: 35px;
    color: #FFFFFF;
}
`