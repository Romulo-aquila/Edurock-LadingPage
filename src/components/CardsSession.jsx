import styled from "styled-components";

function CardsSession() {
    const Conteiner = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f2e7f6;
    `;

    const CardsTop = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 5.5rem;
        gap: 2rem;
    `;

    const CardsBottom = styled.div`
        display: flex;
        flex-direction: row;
        margin-bottom: 4.5rem;
        margin-top: 1.5rem;
        gap: 2rem;
    `;

    const TitleCard = styled.h2`
        font-size: 14.5pt;
    `;

    
    const SubTitle = styled.p`
        font-size: 12.5pt;
        font-weight: 400;
        color: #989898;
    `;

    const Circle = styled.div`
      width: 60px;
      height: 60px;
      display: flex;
      flex-direction: column;
      padding-top: 16px;
      padding-left: 7.5px;
      border-radius: 2.5rem;
      background-color: aliceblue;
    `;

    const CardsConteiner = styled.div`
        width: 16.875rem;
        height: 193.4px;
        border-radius: 14px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 1.4%;
        

        &:hover {
          transition: 0.2s;
          background-color: #5f2ded;
          color: #fff;
          padding-bottom: 16px;
        }

        &:hover  >  ${Circle} {
          background-color: #6c3bf4;
        }

        &:hover > ${SubTitle} {
          color: #fff;
        }
    `;

    const IconCard = styled.img`
      width: 35px;
      height: 35px;

      ${CardsConteiner}:hover & {
        filter: invert(100%);
      }
    `;

  return (
    <Conteiner>
      <CardsTop>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/grafico-de-crescimento.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Estudos de negócios</TitleCard>
          <SubTitle>Negócios são sucesso</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/programacao-da-web.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Programação e Tecnologia</TitleCard>
          <SubTitle>atualize sua habilidade</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/lampada-incandescente.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Artista e Design</TitleCard>
          <SubTitle>mostre criatividade</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/machine-learning.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Aprendizado de máquina</TitleCard>
          <SubTitle>Ciência é poder</SubTitle>
        </CardsConteiner>
      </CardsTop>

      <CardsBottom>
      <CardsConteiner>
        <Circle>
          <IconCard src="assets/saude.png" alt="Saude" />
        </Circle>
          <TitleCard>Saúde & Fitness</TitleCard>
          <SubTitle>saúde é riqueza</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/saude.png" alt="Saude" />
        </Circle>
          <TitleCard>Saúde & Fitness</TitleCard>
          <SubTitle>saúde é riqueza</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/alvo.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Análise de Marketing</TitleCard>
          <SubTitle>mostre criatividade</SubTitle>
        </CardsConteiner>

        <CardsConteiner>
        <Circle>
          <IconCard src="assets/grafico-de-crescimento.png" alt="grafico-crescente" />
        </Circle>
          <TitleCard>Estudos de negócios</TitleCard>
          <SubTitle>Negócios são sucesso</SubTitle>
        </CardsConteiner>

      </CardsBottom>

    </Conteiner>
  )
}

export default CardsSession;