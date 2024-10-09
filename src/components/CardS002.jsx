import styled from "styled-components";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function CardS002(props) {
  const CardConteiner = styled.section`
  width: 370px;
  height: auto;
  padding-bottom: 24px;
  background-color: #fff;
`;

const ImgPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
`;

const Image = styled.div`
  margin: 0 1.5rem;
  height: 226.167px;
  width: 350px;
  display: flex;
  align-items: flex-end;
  background-image: url(${props.Image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Legend = styled.div`
  z-index: 3;
  margin-left: 7.5px;
  width: 135px;
  height: 33px;
  display: flex;
  margin-bottom: 14.5px;
  justify-content: center;
  align-items: center;
  background-color: ${props.color};
  border-radius: 20px;
  transition: 0.2s;
  font-size: 15px;
  font-weight: 400;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000000;
  }
`;

const Info = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
margin: 24.5px 0 0 1rem;
`;

const InfoData = styled.p`
  font-size: 12.5pt;
  font-weight: 600;
  color:  #5f2ded;
`;

const Icon = styled.div`
  color:#5f2ded;
  font-size: 12.5pt;
`;

const IconTxt = styled.div`
display: flex;
flex-direction: row;
gap: 3.5px;
`;

const TitleCard = styled.h2`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 17.5pt;
  margin: 18.5px 0;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #5f2ded;
  }
`;

const ReadMore = styled.a`
  font-size: 15.5px;
  display: flex;
  gap: 2.5px;
  align-items: center;
  text-decoration: none;
  color: #000000;
  margin-left: 1rem;
  transition: 0.2s;
  width: 100px;

  &:hover {
    color: #5f2ded;
  }
`;

const Arrow = styled.span`
  padding-top: 5px;
`;


return (
<>
<CardConteiner>
 <ImgPlace>
     <Image>
  <Legend>{props.Legend}</Legend>
     </Image>
 </ImgPlace>

 <Info>
  <IconTxt>
          <InfoData>{props.lesson} </InfoData>
  </IconTxt>
 </Info>

  <TitleCard>O design do Facebook é dedicado ao que há de novo em design</TitleCard>

 <ReadMore href="*">Leia Mais <Arrow><HiOutlineArrowLongRight/></Arrow></ReadMore>
</CardConteiner>
</>
)
}

export default CardS002;