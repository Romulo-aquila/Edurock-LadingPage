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

  const WhiteSpace = styled.div`
    background-color: #f3effe;
    height: 2.5rem;
  `;

  const PropImgs = [
    {
      title: "Curso básico para entender sobre software",
      price: "32.00",
      lesson: "23",
      legend: "Data & Tech",
      color: "#f2277e;",
      time: "1 hr 30 min",
      name: "Micle John",
      profileImg: "assets/grid_small_1.jpg",
      image: "assets/img_Course.png",
    },
    {
      title: "Curso Nidnies para entender sobre software",
      price: "40.00",
      lesson: "29",
      legend: "Mecânico",
      color: "#2864ff;",
      time: "2 hr 10 min",
      name: "Rinis Jhon",
      profileImg: "assets/grid_small_2.jpg",
      image: "assets/grid_2.png",
    },
    {
      title: "Curso de Minws para entender sobre solução ",
      lesson: "25",
      legend: "Desenvolvedor",
      color: "#ff275a;",
      time: "1 hr 40 min",
      name: "Scott Robin",
      profileImg: "assets/grid_small_3.jpg",
      image: "assets/grid_3.png",
    },
    {
      title: "Curso de design para entender sobre solução",
      lesson: "36",
      legend: "Ui & UX Design",
      color: "#1ec902;",
      time: "3 hr 40 min",
      name: "Jessie Robin",
      profileImg: "assets/grid_small_4.jpg",
      image: "assets/grid_4.png",
    },
    {
      title: "Curso de dados para entender sobre solução",
      lesson: "30",
      legend: "Data & Tech",
      color: "#fe2323;",
      name: "Carl Jonh",
      image: "assets/grid_5.png",
    },
    {
      title: "Big data para entender o pacote de soluções",
      legend: "Big Data",
      image: "assets/grid_6.png",
      color: "#ff912c;",
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
    <CardS001 title={PropImgs[0].title} color={PropImgs[0].color} Legend={PropImgs[0].legend} lesson={PropImgs[0].lesson} Image={PropImgs[0].image} price={PropImgs[0].price} Time={PropImgs[0].time} Name={PropImgs[0].name} profileImg={PropImgs[0].profileImg}/>

    <CardS001 title={PropImgs[1].title} color={PropImgs[1].color} Legend={PropImgs[1].legend} lesson={PropImgs[1].lesson} Image={PropImgs[1].image} price={PropImgs[0].price} Time={PropImgs[1].time} Name={PropImgs[1].name} profileImg={PropImgs[1].profileImg}/>

    <CardS001 title={PropImgs[2].title} color={PropImgs[2].color} Legend={PropImgs[2].legend} lesson={PropImgs[2].lesson} Image={PropImgs[2].image} price={PropImgs[1].price} Time={PropImgs[2].time} Name={PropImgs[2].name} profileImg={PropImgs[2].profileImg}/>

  </CardsConteiner>
  <CardsConteiner>
    <CardS001 title={PropImgs[3].title} color={PropImgs[3].color} Legend={PropImgs[3].legend} lesson={PropImgs[3].lesson} Image={PropImgs[3].image} price={PropImgs[0].price} Time={PropImgs[3].time} Name={PropImgs[3].name} profileImg={PropImgs[3].profileImg}/>
    
    <CardS001 title={PropImgs[4].title} color={PropImgs[4].color} Legend={PropImgs[4].legend} lesson={PropImgs[3].lesson} Image={PropImgs[4].image} price={PropImgs[1].price} Time={PropImgs[3].time} Name={PropImgs[4].name} profileImg={PropImgs[0].profileImg}/>
    
    <CardS001 title={PropImgs[5].title} color={PropImgs[5].color} Legend={PropImgs[5].legend} lesson={PropImgs[4].lesson} Image={PropImgs[5].image} price={PropImgs[1].price} Time={PropImgs[3].time} Name={PropImgs[0].name} profileImg={PropImgs[0].profileImg}/>
  </CardsConteiner>
  <WhiteSpace></WhiteSpace>
  </Content>
  </>
  )
}

export default CourseSession02;