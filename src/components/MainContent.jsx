import styled from "styled-components";
import CardCourses from "./CardCourses";

function MainContent() {

    const PlaceMain = styled.main`
    width: 100%;
    height: 674px;
    display: flex;
    flex-direction: row;
    background-color: #f7f8fd;
    padding-top: 4.375rem;
    padding-right: 16.5px;
    `;

    const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;

    const Caption = styled.h3`
        padding-left: 16px;
        padding-bottom: 10px;
        color: #f2277e;
        letter-spacing: 4.5px;
        font-size: 14.5px;
        font-weight: 500;
        text-transform: uppercase;
    `;

    const Title = styled.h1`
        padding-left: 14px;
        padding-bottom: 10px;
        font-size: 4.2rem;
        font-weight: 700;
        width: 90%;
    `;

    const TextColor = styled.span`
        color: #f2277e;
    `;

    const Txt = styled.p`
     padding-left: 16px;
     font-size: 15.5px;
     font-weight: 500;
     line-height: 1.8;
     width: 45%
    `;

    const ViewBtn = styled.button`
        width: 146.083px;
        height: 52px;
        border: none;
        background-color: #5f2ded;
        border-radius: 4.5px;
        color: #fff;
        font-size: 16.5px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.4s;

    &:hover {
        border: 1px solid #5f2ded;
        background-color: #fff;
        color: #5f2ded;
    }
    `;

    const ExploreBtn = styled.button`
        width: 146.083px;
        height: 52px;
        border: none;
        background-color: #f2277e;
        border-radius: 4.5px;
        color: #fff;
        font-size: 16.5px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.4s;

    &:hover {
        border: 1px solid #f2277e;
        background-color: #fff;
        color: #f2277e;
    }
    `;

    const BtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1.5rem;
    gap: 1.8rem;
    padding-left: 16px;
    `;

    const Image = styled.img`
        padding-left: 1.8rem;
        padding-top: 10px;
        opacity: 45%;
    `;

    return (
        <>
      <PlaceMain>
          <Main>
          <Caption>Solução Educacional</Caption>
              <Title>Impulsione Sua <TextColor>Carreira</TextColor> Aprendendo Na Maior <TextColor>Plataforma</TextColor> Online.</Title>
          
              <Txt>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica
              de impressão. Lorem Ipsum foi</Txt>
          
              <BtnGroup>
            <ViewBtn>Ver Cursos</ViewBtn>
            <ExploreBtn>Explore Mais</ExploreBtn>
              </BtnGroup>
          
              <Image src="assets/herobanner__1.png" alt="Ilustração-Livro" height={88} width={140}/>
          </Main>
          <CardCourses/>
      </PlaceMain>
        </>
    )
}

export default MainContent;