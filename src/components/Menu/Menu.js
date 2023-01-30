import { ContainerMenu } from './style';
import { AiFillHome } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti'
import { IoExitOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function Menu({ showCart, setShowCart }) {

    return (
        <ContainerMenu>
            <Link to={'/products'}>
                <AiFillHome onClick={() => setShowCart(false)}/>
            </Link>
            <TiShoppingCart onClick={() => setShowCart(!showCart)} />
            <Link to={'/'}>
                <IoExitOutline />
            </Link>
        </ContainerMenu>
    );
}