import styled from "styled-components";
import { CgCheck } from "react-icons/cg";

function WelcomeSession() {
    const Content = styled.div`
        width: 100%;
        height: 542.667px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 7.5rem;
        background-color: #f7f8fd;
        /* background-color: gray; */
        padding-top: 57px;
    `;

    const ImgPlace = styled.div`
        padding-left: 5.5rem;
    `;

    const TxtPlace = styled.div``;

    const Illustration = styled.img`
        width: 473px;
        height: 481px;
    `;

    const Caption = styled.h3`
        text-transform: uppercase;
        color: #f2277e;
        font-weight: 500;
        font-size: 12.5pt;
        padding-bottom: 14px;
    `;

    const Title = styled.h2`
        font-size: 32pt;
        padding-bottom: 12px;
    `;

    const Underline = styled.span`
        text-decoration: underline;
        text-decoration-thickness: 4.5px;
        text-decoration-color: #f2277e;
    `;

    const TxtLorem = styled.p`
        font-size: 14pt;
        color: #606c76;
    `;

    const TxtSection = styled.div`
        display: flex;
        flex-direction: row;
        gap: 12px;
    `;

    const LineSctn = styled.hr`
        border: 1.5px solid #5f2ded;
    `;

    const TxtList = styled.ul`
        padding-top: 16.5px;
        padding-left: 2.5px;
    `; 

    const Icon = styled.span`
        font-size: 20pt;
        height: 34px;
        width: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #5f2ded;
        transition: all 0.1s;

        &:hover {
            color: #fff;
            background-color: #5f2ded;
        }
    `;

    const ItemList = styled.li`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16.5px;
        list-style: none;

        &:hover ${Icon} {
            color: #fff;
            background-color: #5f2ded;
        }
    `;

    const TextList = styled.p`
        font-size: 12pt;
        font-weight: 500;
    `;

    const WhiteSpace = styled.div`
        width: 100%;
        height: 1.8rem;
        background-color: #f7f8fd;
    `;

  return (
    <Content>
        <ImgPlace>
            <Illustration src="assets/about_12.png" alt="Ilustração" />
            <WhiteSpace></WhiteSpace>
        </ImgPlace>
        <TxtPlace>
            <Caption>Solução Educacional</Caption>
            <Title>Bem-vindo ao Centro de <Underline>Aprendizagem</Underline> Online</Title>

            <TxtSection>
                <LineSctn/>

                <TxtLorem>25+Ao contrário da crença popular, o Lorem Ipsum não é simplesmente uma raiz textual aleatória em uma peça da literatura latina clássica de 45 a.C.</TxtLorem>
            </TxtSection>
            <TxtList>
                <ItemList>
                <Icon><CgCheck/></Icon>
                    <TextList>
                    Lorem Ipsum é simplesmente fictício 
                    </TextList>
                </ItemList>
                <ItemList>
                <Icon><CgCheck/></Icon>
                    <TextList>
                    Explore uma variedade de novos conceitos educacionais 
                    </TextList>
                </ItemList>
                <ItemList>
                <Icon><CgCheck/></Icon>
                    <TextList>
                    Lorem Ipsum é simplesmente um texto fictício
                    </TextList>
                </ItemList>

            </TxtList>
        </TxtPlace>
    </Content>
  )
}

export default WelcomeSession;