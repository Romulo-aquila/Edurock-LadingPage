import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";

function ShoppingMenu(){
    const Notif = styled.div`
    width: 13.5px;
    height: 12.8px;
    border-radius: 18px;
    background-color: #f2277e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 10.2px;
    font-weight: 500;
    margin-bottom: 14px;
    margin-right: 4px;
    `;

    const CartMenu = styled.div`
    font-size: 1.6rem;
    width: 47px;
    height: 45px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
        color: #f2277e;
    }
    `;

  return (
    
    <CartMenu>
        <TiShoppingCart/>
        <Notif>3</Notif>    
    </CartMenu>
  )
}

export default ShoppingMenu;