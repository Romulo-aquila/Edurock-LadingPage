import styled from "styled-components";
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

function CardCourses() {
    const CardConteiner = styled.section`
    width: 60.9%;
    height: 554.317px;
    background-color: #ffffff;
    /* background-color: gray; */
    border-radius: 16px;
   
    `;

    const ImgPlace = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.4rem;
    `;

    const Image = styled.div`
        margin: 0 1.5rem;
        height: 245px;
        width: 375px;
        background-image: url(assets/img_Course.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 16px;
    `;

    const Legend = styled.div`
        z-index: 3;
        margin-left: 7.5px;
        width: 95px;
        height: 20px;
        display: flex;
        margin-top: 8px;
        justify-content: center;
        align-items: center;
        background-color: #f2277e;
        border-radius: 3.5px;
        font-size: 12.5px;
        font-weight: 500;
        color: #fff;
    `;

    const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 18.5px 0 0 0;
    `;

    const InfoText = styled.p`
        font-size: 15px;
    `;

    const Icon = styled.div`
        color:#5f2ded;
    `;

    const IconTxt = styled.div`
    display: flex;
    flex-direction: row;
    `;
    
    const TitleCard = styled.h2`
        padding-left: 1.8rem;
        margin: 18.5px 0;
    `;

    const Description = styled.p`
        padding: 0 1.8rem;
        font-size: 12pt;
        font-weight: 500;
        color: #606c76;

    `;
    
    const PriceTxt = styled.p`
        font-weight: 500;
        margin: 18.5px 0 0 0;
        padding: 0 1.8rem;
        font-size: 14pt;
        color: #5f2ded;
    `;

    const DiscountTxt = styled.span`
        text-decoration: line-through;
        font-size: 14.5px;
        color: #a2a9b6;
      
    `;
    
    const DivLinear = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 12px 0;
    `;

    const Linear = styled.hr`
    width: 365px;
    border: 0.2px solid #e3e3e3;
    `;
    

  return (
    <CardConteiner>
       <ImgPlace>
           <Image>
        <Legend>Data & Tech</Legend>
           </Image>
       </ImgPlace>

       <Info>
        <IconTxt>
            <Icon><FaBook/></Icon>
                <InfoText>23 Lições</InfoText>
        </IconTxt>
        <IconTxt>
            <Icon><IoMdTime/></Icon>
                <InfoText>1 hr 30 min</InfoText>
        </IconTxt>
       </Info>

    <TitleCard>Figma para HTML</TitleCard>
    <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, libero!          
    </Description>
    <PriceTxt>
        R$ 32.00 <DiscountTxt>/ 67.00</DiscountTxt>
    </PriceTxt>
    <DivLinear><Linear/></DivLinear>

    </CardConteiner>
  )
}

export default CardCourses;