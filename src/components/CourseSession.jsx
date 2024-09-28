import styled from "styled-components";
import CardsSession from "./CardsSession";
import { FaLongArrowAltRight } from "react-icons/fa";

function CourseSession() {
const Content = styled.div`
    padding-top: 5.5rem;
`;

const HeaderSession = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const CaptionTxt = styled.p`
    background-color: #e7deff;
    color: #5f2ded;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    font-size: 14.5px;
    font-weight: 500;
    width: 124.667px;
    height: 30px;
`;

const InfoTxt = styled.p`
  font-size: 12.5pt;
  font-weight: 400;
  color: #7e8890;
`;

const Title = styled.h2`
    font-size: 27pt;
    font-weight: 800;
`;

const Underline = styled.span`
    text-decoration: underline;
    text-decoration-thickness: 4.5px;
    text-decoration-color: #f2277e;
`;

const TitleAndCaption = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const CategoriesBtn = styled.button`
        width: 186.083px;
        height: 52px;
        border: none;
        background-color: #f2277e;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
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

const ArrowIcon = styled.p`
      font-size: medium;
      display: flex;
      justify-content: center;
      align-items: center;
`;


  return (
    <Content>
      <HeaderSession>

        <TitleAndCaption>

          <CaptionTxt>Lista de cursos</CaptionTxt>

          <Title>
          Matérias  <Underline>Populares</Underline>
          </Title>
        </TitleAndCaption>

        <InfoTxt>
        Começa a construção de relacionamentos entre <br/> governos multinacionais e ONGs globais.
        </InfoTxt>

        <CategoriesBtn>Ver Categorias<ArrowIcon><FaLongArrowAltRight/></ArrowIcon></CategoriesBtn>
      </HeaderSession>
    <CardsSession/>
    </Content>
  )
}

export default CourseSession;