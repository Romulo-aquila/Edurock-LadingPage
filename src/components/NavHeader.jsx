import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";

function NavHeader() {
    const NavContainer = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 100%;
        height: 87.7px;

    `;

    const NavList = styled.ul`
        display: flex;
        gap: 2rem;
    `;

    const itemList = styled.li`
        list-style: none;
    `;

    const LinkList = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: black;
        font-weight: 500;
        font-size: 16.8px;
        transition: 0.2s;

        &:hover {
            color: #5f2ded;
        }
    `;

    const BtnStart = styled.button`
    width: 133.117px;
    height: 45px;
    border: none;
    background-color: #5f2ded;
    border-radius: 4.5px;
    color: #fff;
    font-size: 14.5px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        border: 1px solid #5f2ded;
        background-color: #fff;
        color: #5f2ded;
    }
    `;

    const Arrow = styled.p`
    margin-top: 5px;
    margin-left: 3px;
    `;

  return (
    <NavContainer>
        <img src="assets/logo_1.png" alt="logo_EduRock" />
        <NavList>
            <itemList><LinkList href="#">Demos 
            <Arrow><RiArrowDownSLine/></Arrow></LinkList></itemList>
            <itemList><LinkList href="#">Páginas 
            <Arrow><RiArrowDownSLine/></Arrow></LinkList></itemList>
            <itemList><LinkList href="#">Cursos 
            <Arrow><RiArrowDownSLine/></Arrow></LinkList></itemList>
            <itemList><LinkList href="#">Dashboard 
            <Arrow><RiArrowDownSLine/></Arrow></LinkList></itemList>
            <itemList><LinkList href="#">eCommerce 
            <Arrow><RiArrowDownSLine/></Arrow></LinkList></itemList>
        </NavList>
        <BtnStart>Comece por aqui</BtnStart>
    </NavContainer>
  )
}

export default NavHeader;