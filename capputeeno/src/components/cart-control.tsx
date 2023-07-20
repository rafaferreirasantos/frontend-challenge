import styled from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0px 5px;
    background: var(--dangerous-color);
    color: #FFF;
    position: absolute;
    font-size: 10px;

    margin-left: -10px;
    top: 50%;
`
const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage<number>('cart-items');
    return (
        <Container>
            <CartIcon />
            {value.length && <CartCount>{value}</CartCount>}
        </Container>
    )
}