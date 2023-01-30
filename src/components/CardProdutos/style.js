import styled from "styled-components";
import { verdeEscuro, verdeClaro } from "../../constants/colors";

export const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
    background-color: #DDDDDD;
    border: 0px solid green;
    border-radius: 5px;
    gap:10px;
    padding: 10px;
    overflow: auto;
    img {
        width: 105px;
        height: 83px;
    }
    h3{
        text-align: center;
        font-size: 17px;
        font-weight: 700;
        color: ${verdeEscuro};
    }
    p{
        color: ${verdeEscuro};
    }
    button{
        width: 120px;
        background-color: ${verdeClaro};
        border-radius: 5px;
        cursor: pointer;
        &:disabled {
        background-color: #AAAAAA;
        cursor: default;
    }
        svg{
            font-size: 30px;
            color: #FFFFFF;
        }
    }
`