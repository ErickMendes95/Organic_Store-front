import styled from "styled-components";
import { verdeClaro } from "../../constants/colors";

export const CardProtudo = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 10px;
    bold{
        font-weight: 700;
    }
`

export const ContainerImage = styled.div`
    background-color: #DDDDDD;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 5px;
    padding: 7px;
    height: 50px;
    img{
        width: 50px;
        height: 40px;
        margin-top: 0px;
    }    
`

export const ContainerInfos = styled.div`
    width: 105px;
    line-height: 18px;
    font-weight: 700;
`

export const Quantidade = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: ${verdeClaro};
    width: 35px;
    height: 40px;
    border-radius: 20px;
    margin-left: 0px;
    margin-right: 30px;
`

export const ArrowUp = styled.button`
    background-color: rgba(235,0,0,0);
    position: absolute;
    top: -6px;
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
`

export const ArrowDown = styled.button`
    background-color: rgba(0,0,0,0);
    position: absolute;
    top: 23px;
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
`

export const Valor = styled.div`
    font-weight: 700;
`