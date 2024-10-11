import styled from "styled-components";
import { IoTimeOutline } from "react-icons/io5";

function Footer() {
    const Container = styled.footer`
        background-color: #0c0e2b;
        height: auto;
        width: auto;
    `;

    const FooterTop = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-left: 20px;
        padding-top: 6rem;
    `;

    const Title = styled.h3`
        font-size: 27pt;
        margin-bottom: 3px;
        color: #fff;
    `;

    const TxtMarking = styled.span`
        color: #5f2ded;
    `;

    const Legend = styled.p`
        color: #7e7f8e;
    `;

    const TxtTitleArea = styled.div`

    ` 

    const EmailField = styled.div`
        height: 62px;
        width: 370px;
        background-color: #202942;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `; 

    const Subscribe = styled.button`
        height: 62px;
        width: 160px;
        border-radius: 3.5px;
        background-color: #5f2ded;
        font-size: medium;
        cursor: pointer;
        border: none;
        color: #fff;
        transition: 0.2s;

        &:hover {
            background-color: #202942;
            border: 1px solid #5f2ded;
        }
    `;

    const RegisterOfField = styled.div`
        display: flex;
        flex-direction: row;
        width: 540px;
        height: 62px;
    `;
    
    const InputEmail = styled.input`
        width: 350px;
        font-size: 12.5pt;
        height: 100%;
        background: none;
        color: #ffffff;
        outline: none;
        border: none;
    `;

    const Hr = styled.hr`
        margin: 3rem 0 4.5rem 0;
        border: 0.1px solid white;
        opacity: 9.5%;
        width: 92%;
    `;

    const Linear = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const FooterBottom = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `;

    const AboutContent = styled.div`
        color: #7e7f8e;
        padding-bottom: 24px;
    `;

    const AboutTitle = styled.h2`
        color: #fff;
        font-size: 16pt;
        padding-bottom: 24px;
    `;

    const AboutTxt = styled.p`
        padding-bottom: 24px;
        font-size: 13pt;
        width: 400px;
        line-height: 32px;
    `;

    const AboutTextAndTitle = styled.div``;

    const AboutTimeContent = styled.div`
        display: flex;
        flex-direction: row;
        gap: 22px;
    `;

    const IconTime = styled.span`
        width: 78px;
        height: 78px;
        background-color: #5f2ded;
        display: flex;
        color: #ffffff;
        justify-content: center;
        align-items: center;
        font-size: 28pt;
    `;

    const OpenHour = styled.h4`
        color: #fff;
    `;

    const TimeTxt = styled.p`
        font-size: 10.5pt;
        line-height: 22px;
    `;

    const TimeInfo = styled.div``;

    const LinksListContent = styled.div``;

    const LinksList = styled.ul``;

    const ItemLink = styled.li`
         padding-bottom: 16px;
         list-style: none;
    `;

    const LinkTitle = styled.h3`
        color: #fff;
        font-size: 16pt;
        padding-bottom: 24px;
    `;

    const ItemLnk = styled.a`
        text-decoration: none;
        font-size: 13pt;
        color: #7e7f8e;

        &:hover {
            text-decoration: underline; 
        }
    `;

    const CourseContent = styled.div`
    `;

    const CourseTitle = styled.h3`
        color: #fff;
        font-size: 16pt;
        padding-bottom: 24px;
    `;

    const CoursesLinks = styled.ul``;

    const ItemCourse = styled.li`
        padding-bottom: 16px;
        list-style: none;
    `;

    const CourseLnk = styled.a`
        text-decoration: none;
        font-size: 13pt;
        color: #7e7f8e;

        &:hover {
            text-decoration: underline; 
        }
    `;

    const RecentPostContent = styled.div``;

    const RecentTitle = styled.h3`
        color: #fff;
        font-size: 16pt;
        padding-bottom: 24px;
    `;

    const RecentPostContainer = styled.div`
        display: flex;
        flex-direction: row;
        gap: 12px;
        padding-bottom: 18px;
    `;

    const RecentImage = styled.img`
        cursor: pointer;
    `;

    const RctImageDiv = styled.div``;

    const RctTextDiv = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const RecentDate = styled.p`
        font-size: 14.5px;
        font-weight: 500;
        padding-bottom: 8.5px;
        color: #7e7f8e;
    `;

    const RecentPostTitle = styled.p`
        color: #ffffff;
        font-weight: 500;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            color: #5f2ded;
        }
    `;
    
  return (
    <Container>
        <FooterTop>
            <TxtTitleArea>
                <Title>Você Ainda Precisa Do Nosso <TxtMarking>Suporte</TxtMarking> ?</Title>
                <Legend>Não espere, faça uma cotação inteligente e lógica aqui. É bem fácil.</Legend>
            </TxtTitleArea>
            <RegisterOfField>
                <EmailField>
                    <InputEmail type="email" placeholder="Insira seu e-mail aqui"/>
                </EmailField>
                    <Subscribe>Assine agora</Subscribe>
            </RegisterOfField>
        </FooterTop>
        <Linear><Hr/></Linear>
        <FooterBottom>
            <AboutContent>
            <AboutTextAndTitle>
                <AboutTitle>Sobre nós</AboutTitle>
                <AboutTxt>clientes corporativos e viajantes de lazer contam com a Groundlink para serviços de motorista profissional, seguros e confiáveis nas principais cidades do mundo.</AboutTxt>
            </AboutTextAndTitle>
            <AboutTimeContent>
                <IconTime><IoTimeOutline/></IconTime>
                <TimeInfo>
                    <OpenHour>HORÁRIO DE FUNCIONAMENTO</OpenHour>
                    <TimeTxt>Seg - Sáb (8h00 - 6h00) <br />
                    Domingo - Fechado
                    </TimeTxt>
                </TimeInfo>
            </AboutTimeContent>
            </AboutContent>
            <LinksListContent>
                <LinkTitle>
                Links úteis
                </LinkTitle>
                <LinksList>
                    <ItemLink>
                        <ItemLnk href="*">
                        Sobre nós
                        </ItemLnk>
                    </ItemLink>
                    <ItemLink>
                        <ItemLnk href="*">
                        Professores
                        </ItemLnk>
                    </ItemLink>
                    <ItemLink>
                        <ItemLnk href="*">
                        Parceiros
                        </ItemLnk>
                    </ItemLink>
                    <ItemLink>
                        <ItemLnk href="*">
                        Detalhes da sala
                        </ItemLnk>
                    </ItemLink>
                    <ItemLink>
                        <ItemLnk href="*">
                        Galeria
                        </ItemLnk>
                    </ItemLink>
                </LinksList>
            </LinksListContent>
        <CourseContent>
            <CourseTitle>
                Cursos
            </CourseTitle>
            <CoursesLinks>
                <ItemCourse>
                    <CourseLnk href="*">
                    Ui Ux Design 
                    </CourseLnk>
                </ItemCourse>
                <ItemCourse>
                    <CourseLnk href="*">
                    Desenvolvimento Web 
                    </CourseLnk>
                </ItemCourse>
                <ItemCourse>
                    <CourseLnk href="*">
                    Estratégia de Negócios 
                    </CourseLnk>
                </ItemCourse>
                <ItemCourse>
                    <CourseLnk href="*">
                    Desenvolvimento de Software 
                    </CourseLnk>
                </ItemCourse>
                <ItemCourse>
                    <CourseLnk href="*">
                    Inglês Empresarial
                    </CourseLnk>
                </ItemCourse>
            </CoursesLinks>
        </CourseContent>
        <RecentPostContent>
            <RecentTitle>Postagens recentes</RecentTitle>

            <RecentPostContainer>
            <RctImageDiv>
                <RecentImage src="assets/footer__1.png" alt="ilustração01" />
            </RctImageDiv>

            <RctTextDiv>
                <RecentDate>02 abril 2024</RecentDate>
                <RecentPostTitle>Mantenha seu negócio</RecentPostTitle>
            </RctTextDiv>
            </RecentPostContainer>
            <RecentPostContainer>
            <RctImageDiv>
                <RecentImage src="assets/footer__2.png" alt="ilustração02" />
            </RctImageDiv>

            <RctTextDiv>
                <RecentDate>02 abril 2024</RecentDate>
                <RecentPostTitle>Melhore seu negócio</RecentPostTitle>
            </RctTextDiv>
            </RecentPostContainer>
            <RecentPostContainer>
            <RctImageDiv>
                <RecentImage src="assets/footer__3.png" alt="ilustração03" />
            </RctImageDiv>

            <RctTextDiv>
                <RecentDate>02 abril 2024</RecentDate>
                <RecentPostTitle>Bom seu negócio</RecentPostTitle>
            </RctTextDiv>
            </RecentPostContainer>

        </RecentPostContent>
        </FooterBottom>
    </Container>
  )
}

export default Footer;