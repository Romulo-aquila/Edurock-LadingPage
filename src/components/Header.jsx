import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import LanguageOptions from "./LanguageOptions";
import PriceOptions from "./PriceOptions";
import ShoppingMenu from "./ShoppingMenu";
import UserLogin from "./UserLogin";

function Header() {
    const HeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        z-index: 1;
        width: 100%;
        height: 87.7px;
        border-bottom: 1px solid gainsboro;
    `;

    const SearchForm = styled.div`
        width: 570px;
        height: 46.8px;
        background-color: #fff;
        border: 1px solid #e3e3e3;
        border-radius: 2rem;
        padding-left: 1.5rem;
        padding-right: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;

    const SearchPlace = styled.input`
        width: 100%;
        height: 90%;
        font-size: large;
        outline: none;
        border: none;
    `;

    const SearchIcon = styled.p`
        width: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 20.5px;
        padding: 0 8.8px;
        color: #000;
        cursor: pointer;
    `;

    const OptsDiv = styled.div`
        display: flex;
        flex-direction: row;
        gap: 16px;
    `;

    return(
        <>
        <HeaderContainer>
        <OptsDiv>
            <LanguageOptions/>
            <PriceOptions/>
        </OptsDiv>
            <SearchForm>
                <SearchPlace placeholder="Pesquisar Curso"/>
                <SearchIcon>
                    <IoSearchOutline/>
                </SearchIcon>
            </SearchForm>
    <OptsDiv>
        <ShoppingMenu/>
        <UserLogin/>
    </OptsDiv>
        </HeaderContainer>
        </>
    )
}

export default Header;