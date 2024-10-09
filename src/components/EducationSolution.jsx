import styled from "styled-components";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function EducationSolution() {
    const Content = styled.div`
        background-color: #f5f5fe;
        padding-top: 175px;
        padding-left: 55.5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
    `;

    const Caption = styled.h3`
        padding-bottom: 10px;
        color: #f2277e;
        letter-spacing: 4.5px;
        font-size: 14.5px;
        font-weight: 500;
        text-transform: uppercase;
    `;

    const Title = styled.h2`
        font-size: 32pt;
        padding-bottom: 12px;
    `;

    const TextHeader = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const TextTestimonial = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const TextContent = styled.p`
        font-size: 20.5px;
        font-weight: 400;
        color: #7b8696;
        line-height: 40.5px;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
    `;

    const TxtQuote = styled.p`
        width: auto;
        display: flex;
        flex-direction: row;
        gap: 5px;
    `;

    const Quotes = styled.p`
        font-size: 20px;
        color: #5f2ded;
        width: 20px;
        display: flex;
        padding-top: 5px;
    `;

    const Quotes02 = styled.p`
        font-size: 20px;
        color: #5f2ded;
        width: 20px;
        display: flex;
        align-self: flex-end;
        padding-bottom: 10px;
    `;

    const ProfileContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `

    const ImgProfile = styled.img``;

    const InfoProfile = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const ImgAndInfoProfile = styled.div`
        display:flex;
        flex-direction: row ;
        align-items: center;
        gap: 16px;
    `;

    const NameProfile = styled.p`
        font-size: 20.5px;
        font-weight: 500;
        color: #5f6c76;
        padding-bottom: 10px;
    `;

    const SpecialtyProfile = styled.p`
        font-size: medium;
        color: #5f2ded;
    `;

    const ArrowsContainer = styled.div`
    display: flex;
    flex-direction: row;
    `;

    const Arrow = styled.span`
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 18px;
        align-items: center;
        background-color: #f5f5fe;
        cursor: pointer;

        &:hover {
            background-color: #5f2ded;
            color: #fff;
        }
    `;

    const CtnTitlesAndProfile = styled.div`
        display: flex;
        flex-direction: column;
        width: 642px;
    `;

    const CtnImage = styled.div`
        width: 515px;
        height: 477.433px;
        background-image: url(assets/testi__group__1.png);
        background-size: cover;
        background-position: center;
        padding-right: 55.5px;
    `;

    const WtSpace = styled.div`
        height: 75px;
        background-color: #f5f5fe;
    `;

  return (
    <>
    <Content>
        <CtnTitlesAndProfile>
            <TextHeader>
                <Caption>Solução Educacional</Caption>
                <Title>Depoimentos de clientes sobre nossa agência LMS</Title>
            </TextHeader>
            <TextTestimonial>
                <TextContent>
                    <TxtQuote>
                <Quotes><BiSolidQuoteLeft/></Quotes>
                Por outro lado, denunciamos com justiça e não gostamos 
                    </TxtQuote>de homens que são tão seduzidos e desmoralizados
            pelos encantos do prazer do momento. Não gostamos de homens que são tão
            seduzidos e desmoralizados pelos encantos do prazer do
            <TxtQuote>
             momento. Lorem ipsum dolor sit amet.
                <Quotes02><BiSolidQuoteRight/></Quotes02>
            </TxtQuote>
                </TextContent>
            </TextTestimonial>
            <ProfileContainer>
                <ImgAndInfoProfile>
                    <ImgProfile src="assets/testi_2.png" alt="Foto_de_Perfil" />
                    <InfoProfile>
                        <NameProfile>Mirnsdo Jons</NameProfile>
                        <SpecialtyProfile>Ui/Ux Designer</SpecialtyProfile>
                    </InfoProfile>
                </ImgAndInfoProfile>
                <ArrowsContainer>
                    <Arrow><FaLongArrowAltLeft/></Arrow>
                    <Arrow><FaLongArrowAltRight/></Arrow>
                </ArrowsContainer>
            </ProfileContainer>
        </CtnTitlesAndProfile>
    <CtnImage></CtnImage>
    </Content>
    <WtSpace></WtSpace>
    </>
  )
}

export default EducationSolution;