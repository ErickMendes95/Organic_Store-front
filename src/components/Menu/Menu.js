import styled from "styled-components";
import { AiFillHome } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti'
import { IoExitOutline } from 'react-icons/io5';

export default function Menu({showCart,setShowCart}) {
    return (
        <ContainerMenu>
            <AiFillHome />
            <TiShoppingCart onClick={()=>setShowCart(!showCart)}/>
            <IoExitOutline />
        </ContainerMenu>
    );
}

const ContainerMenu = styled.footer`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: #6EB122;
    z-index: 1;
    svg{
        cursor: pointer;
        font-size: 35px;
        color: #FFFFFF;
    }
`