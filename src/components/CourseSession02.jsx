import styled from "styled-components";
import CardS001 from "./CardS001";

function CourseSession02() {
  const Content = styled.div`
  padding-top: 5.5rem;
  background-color: #f3effe;
`;

const HeaderSession = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5.5rem;
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

const Title = styled.h2`
  font-size: 27.8pt;
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

  const CardsConteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f3effe;
    padding-top: 2rem;
    gap: 1.5rem;
  `;

  const PropImgs = [
    {
      profileImg: "assets/grid_small_1.jpg"
    },
    {
      profileImg: "assets/grid_small_2.jpg"
    },
    {
      profileImg: "assets/grid_small_3.jpg"
    },
    {
      profileImg: "assets/grid_small_4.jpg"
    }
  ]

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
  <CardsConteiner>
    <CardS001 title="Curso básico para entender sobre software" price="32.00" Name="Micle John" profileImg={PropImgs[0].profileImg}/>
    <CardS001 title="Curso Nidnies para entender sobre software" price="32.00" Name="Rinis Jhon" profileImg={PropImgs[1].profileImg}/>
    <CardS001 title="Curso de Minws para entender sobre solução " price="40.00" Name="Scott Robin" profileImg={PropImgs[2].profileImg}/>
  </CardsConteiner>
  <CardsConteiner>
    <CardS001 title="Curso de design para entender sobre solução" price="32.00" Name="Jessie Robin" profileImg={PropImgs[3].profileImg}/>
    <CardS001 title="Curso de dados para entender sobre solução" price="40.00" Name="Carl Jonh" profileImg={PropImgs[0].profileImg}/>
    <CardS001 title="Big data para entender o pacote de soluções" price="40.00" Name="Micle John" profileImg={PropImgs[0].profileImg}/>
  </CardsConteiner>
  </Content>
  </>
  )
}

export default CourseSession02;