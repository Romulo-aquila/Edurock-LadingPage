import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";


function LanguageOptions() {
    const Container = styled.div`
     position: relative;
     top: 57px;
     z-index: 3;
    `;

    const MenuContainer = styled.nav`
        visibility: hidden;
        margin: 12px 0;

        &:hover {
            visibility: visible;
        }
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

    &:hover + ${MenuContainer} {
            visibility: visible;
        }
        
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

        &:hover + ${MenuContainer} {
            visibility: visible;
        }
    `;

    const ImgFlag = styled.img`
        border-radius: 5px;
        margin-right: 10px;
    `;

    return (
        <>
    <Container>
        <BtnOptions>
            <ImgFlag src="assets/bandeiradobrasil.png" alt="BrasilBandeira" 
            height={20} width={27} />
            <TextBtn>PT-BR</TextBtn>
            <IoIosArrowDown/>
        </BtnOptions>
    
        <MenuContainer>
            <ul>
        <OptList>
            <OptLink href="#">
            <ImgFlag src="assets/bandeiraInglesa.png" alt="InglaterraBandeira"
            height={20} width={27}/>
                ENG</OptLink>
        </OptList>
        <OptList>
            <OptLink href="#">
        <ImgFlag src="assets/bandeiraEspanha.png" alt="EspanhaBandeira"
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