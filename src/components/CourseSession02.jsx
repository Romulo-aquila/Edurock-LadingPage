import styled from "styled-components";

function CourseSession02() {
  const Content = styled.div`
  padding-top: 5.5rem;
  background-color: #fff;
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

const TitleAndCaption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`;

const FisrtItem = styled.span`
  color: #5f2ded;
  font-weight: 600;
`;

const ItemList = styled.li`
  list-style: none;
  font-weight: 500;
  color: #7f8991;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #5f2ded;
  }
`;

  return (
    <>
    <Content>
       <HeaderSession>

    <TitleAndCaption>

      <CaptionTxt>Lista de cursos</CaptionTxt>

      <Title>
      Curso Online Perfeito <br/>Para Sua Carreira
      </Title>
    </TitleAndCaption>
    <OrderedList>
      <ItemList>
        <FisrtItem>Ver Todos</FisrtItem>
      </ItemList>
      <ItemList>Data Sciencie</ItemList>
      <ItemList>Engenharia</ItemList>
      <ItemList>Destaque</ItemList>
      <ItemList>Arquitetura</ItemList>
    </OrderedList>
  </HeaderSession>
  </Content>
  </>
  )
}

export default CourseSession02;