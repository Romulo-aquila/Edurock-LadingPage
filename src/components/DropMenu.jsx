import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DropMenu = () => {
    const DropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive);

    console.log(isActive);

    const Container = styled.div`

    `; 

    const MenuContainer = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `; 

    const MenuButton = styled.button`
        cursor: pointer;
        border-radius: 90px;
        width: 75px;
        height: 35px;
    `; 

    const Menu = styled.nav`
     &.active {
        visibility: visible;
        }
        
        width: 10%;
        height: auto;
        background-color: gray;
        border-radius: 12px;
        visibility: hidden;
    
    `

    const ItemList = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 12px 0;
        list-style: none;
    `;

    const ALink = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        color: blue;
    }
    `;

  return (
    <Container>
        <MenuContainer>
            <MenuButton onClick={onClick}>
            <span>
                Menu
            </span>
            </MenuButton>

        <Menu ref={DropDownRef} className={isActive ? "active" : "inactive"}>
            <ul>
                <ItemList><ALink href="#">Home</ALink></ItemList>
                <ItemList><ALink href="#">Dashboard</ALink></ItemList>
                <ItemList><ALink href="#">User</ALink></ItemList>
            </ul>
        </Menu>

        </MenuContainer>
    </Container>
  )
}

export default DropMenu