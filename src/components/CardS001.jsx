import styled from "styled-components";
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoStar } from "react-icons/io5";

function CardS001(props) {
  const CardConteiner = styled.section`
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 16px;
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
  height: 224px;
  width: 375px;
  background-image: url(${props.Image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  cursor: pointer;
`;

const Legend = styled.div`
  z-index: 3;
  margin-left: 7.5px;
  width: 130px;
  height: 20px;
  display: flex;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props.color};
  border-radius: 3.5px;
  font-size: 12.5px;
  font-weight: 500;
  color: #fff;
`;

const Info = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
gap: 5.5rem;
margin: 18.5px 0 0 1.8rem;
`;

const InfoText = styled.p`
  font-size: 15px;
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
  font-size: 18.5pt;
  margin: 18.5px 0;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #5f2ded;
  }
`;

const PriceTxt = styled.p`
  font-weight: 500;
  margin: 18.5px 0 0 0;
  padding: 0 1rem;
  font-size: 14pt;
  color: #5f2ded;
`;

const DiscountTxt = styled.span`
  text-decoration: line-through;
  font-size: 14.5px;
  color: #a2a9b6;

`;

const DivL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivLinear = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18.5px 0 0 0;
  border-top: 1px solid #e3e3e3;
  height: 75px;
  width: 364px;
`;

const ImgProfile = styled.img`
  border-radius: 2rem;
`;

const ProfileName = styled.p`
  font-weight: 600;
  font-size: 12pt;
`;

const PlaceStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5px;
`; 

const Stars = styled.span`
  color: #ff912c;
`;

const SpanTxt = styled.p`
  font-size: 14px;
  color: gray;
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
      <Icon><FaBook/></Icon>
          <InfoText>{props.lesson} Lições</InfoText>
  </IconTxt>
  <IconTxt>
      <Icon><IoMdTime/></Icon>
          <InfoText>{props.Time}</InfoText>
  </IconTxt>
 </Info>

  <TitleCard>{props.title}</TitleCard>

  <PriceTxt>
      R$ {props.price} <DiscountTxt>/ 67.00</DiscountTxt>
  </PriceTxt>
<DivL>
  <DivLinear>
      <ProfileContent>
          <ImgProfile src={props.profileImg} alt="perfil" height={32} width={32} />
          <ProfileName>{props.Name}</ProfileName>
      </ProfileContent>
      <PlaceStars>
          <Stars>
              <IoStar/>
          </Stars>
          <Stars>
              <IoStar/>
          </Stars>
          <Stars>
              <IoStar/>
          </Stars>
          <Stars>
              <IoStar/>
          </Stars>
          <Stars>
              <IoStar/>
          </Stars>
          <SpanTxt>&#40;44&#41;</SpanTxt>
      </PlaceStars>
  </DivLinear>
</DivL>
</CardConteiner>
</>
)
}

export default CardS001;