import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoVimeo } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function FooterEnd() {
    const FooterEnd = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 3.5rem 40px;
        color: #fff;
    `;

    const LogoDiv = styled.div``;

    const Logo = styled.img``;

    const Copyright = styled.p`
        font-size: 15.5px;
    `;

    const PurpleYear = styled.span`
        color: #5f2ded;
    `;

    const SocialMidiaList = styled.div`
        display: flex;
        flex-direction: row;
        gap: 12px;
    `;

    const SocialMidia = styled.span`
        width: 40px;
        height: 37px;
        background-color: #252741;
        transition: 0.2s;
        font-size: 12.5pt;

        &:hover {
            background-color: #5f2ded;
        }
        
    `;

    const SMlink = styled.a`
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    `;

    return (
        <FooterEnd>
            <LogoDiv>
                <Logo src="assets/logo_2.png" alt=""/>
            </LogoDiv>
            <Copyright>Copyright © <PurpleYear>2024</PurpleYear>
             by edurock. Todos Os Direitos Reservados. </Copyright>
            <SocialMidiaList>
            <SocialMidia><SMlink href="*"><FaFacebookF/></SMlink></SocialMidia>
            <SocialMidia><SMlink href="*"><FaTwitter/></SMlink></SocialMidia>
            <SocialMidia><SMlink href="*"><IoLogoVimeo/></SMlink></SocialMidia>
            <SocialMidia><SMlink href="*"><FaLinkedin/></SMlink></SocialMidia>
            <SocialMidia><SMlink href="*"><FaSkype/></SMlink></SocialMidia>
            
            </SocialMidiaList>
        </FooterEnd>
    )
}

export default FooterEnd;