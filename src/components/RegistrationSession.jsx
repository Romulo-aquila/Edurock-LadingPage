import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

function RegistrationSession() {
    const Container = styled.div`
        width: 100%;
        height: 545.4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #340f99;
        gap: 5px;
        padding: 0 70px;
        padding-top: 5.5rem;
    `;

    const CaptionTxt = styled.p`
        background-color: #e7deff;
        color: #5f2ded;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 1.4rem;
        border-radius: 16px;
        align-items: center;
        font-size: 14.5px;
        font-weight: 500;
        width: 124.667px;
        height: 30px;
    `;

    const Title = styled.h2`
        font-size: 30pt;
        margin-bottom: 2rem;
        color: #fff;
    `;

    const SubTitle = styled.h3`
        color: #fff;
        font-size: 16pt;
        width: 77%;
        font-weight: 500;
    `;

    const NumYellow = styled.span`
        color: #f0b410;
    `;

    const Underline = styled.span`
        text-decoration: underline;
        text-decoration-thickness: 4.5px;
        text-decoration-color: #f2277e;
    `;

    const CirclePlay = styled.div`
        width: 64px;
        height: 64px;
        border-radius: 3rem;
        background-color: #f2277e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const IconPlay = styled.span`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12.5pt;
        color: aliceblue;
    `; 

    const PlayAndSubTitle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    `;

    const RegisterField = styled.div`
        width: 470px;
        height: 575.4px;
        background-color: #fff;
    `;

    const RgText = styled.h2``;

    const TextSection = styled.div`
        width: 65%;
    `;

    const WSpace = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 118px;
        background-color: #fafafb;
        
    `;
    
  return (
    <>
    <Container>
     <TextSection>
        <CaptionTxt>Registre-se</CaptionTxt>
        <Title>Registre Sua <Underline>Conta</Underline> e Obtenha Acesso Gratuito a 
            <NumYellow> 60000</NumYellow> cursos online </Title>
        <PlayAndSubTitle>
        <CirclePlay><IconPlay><FaPlay/></IconPlay></CirclePlay>
        <SubTitle>Aprenda Algo Novo E Construa Sua 
            Carreira De Qualquer Lugar do Mundo</SubTitle>
        </PlayAndSubTitle>
    </TextSection>
        <RegisterField>
            <RgText>Registre-se</RgText>
        </RegisterField>
    </Container>
    <WSpace></WSpace>
    </>
  )
}

export default RegistrationSession;