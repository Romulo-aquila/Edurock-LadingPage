import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";

function LanguageOptions() {
    const DropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(true);
    const onClick = () => setIsActive(!isActive);

    const Container = styled.div`
     position: relative;
     top: 57px;
     z-index: 3;
    `;

    const MenuContainer = styled.nav`
    &.active {
        visibility: hidden;
    }
        visibility: visible;
        margin: 12px 0;
    `;

    const OptList = styled.li`
    list-style: none;
    /* margin: 5.5px 0; */
    display: flex;
    align-items: center;
    padding-left: 12px;
    width: 220%;
    height: 45px;
    background-color: #fff;
    transition: all 0.2s;

    &:hover {
        background-color: gray;
    }
    `;

    const OptLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #707070;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
        color: white;
    }
    `;

    const TextBtn = styled.p`
        font-size: 16px;
        font-weight: 500;
        color: #707070;
        margin-right: 5px;
    `;

    const BtnOptions = styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: none;
        border: none;
    `;

    const ImgFlag = styled.img`
        border-radius: 5px;
        margin-right: 10px;
    `;

    return (
        <>
    <Container>
        <BtnOptions onClick={onClick}>
            <ImgFlag src="src\images\bandeiradobrasil.png" alt="BrasilBandeira" 
            height={20} width={27} />
            <TextBtn>PT-BR</TextBtn>
            <IoIosArrowDown/>
        </BtnOptions>
    
        <MenuContainer ref={DropDownRef} className={isActive ? "active" : "inactive"}>
            <ul>
        <OptList>
            <OptLink href="#">
            <ImgFlag src="src\images\bandeiraInglesa.png" alt="InglaterraBandeira"
            height={20} width={27}/>
                ENG</OptLink>
        </OptList>
        <OptList>
            <OptLink href="#">
        <ImgFlag src="src\images\bandeiraEspanha.png" alt="EspanhaBandeira"
        height={20} width={27} />
                ES</OptLink>
        </OptList>
            </ul>
        </MenuContainer>

    </Container>
        </>
    )
}

export default LanguageOptions;