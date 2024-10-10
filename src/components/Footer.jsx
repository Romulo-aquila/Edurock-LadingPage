import styled from "styled-components";

function Footer() {
    const Container = styled.footer`
        background-color: #0c0e2b;
        height: auto;
        width: auto;
    `;

    const FooterTop = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-left: 20px;
        padding-top: 6rem;
    `;

    const Title = styled.h3`
        font-size: 27pt;
        margin-bottom: 3px;
        color: #fff;
    `;

    const TxtMarking = styled.span`
        color: #5f2ded;
    `;

    const Legend = styled.p`
        color: #7e7f8e;
    `;

    const TxtTitleArea = styled.div`

    ` 

    const EmailField = styled.div`
        height: 62px;
        width: 370px;
        background-color: #202942;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `; 

    const Subscribe = styled.button`
        height: 62px;
        width: 160px;
        border-radius: 3.5px;
        background-color: #5f2ded;
        font-size: medium;
        cursor: pointer;
        border: none;
        color: #fff;
        transition: 0.2s;

        &:hover {
            background-color: #202942;
            border: 1px solid #5f2ded;
        }
    `;

    const RegisterOfField = styled.div`
        display: flex;
        flex-direction: row;
        width: 540px;
        height: 62px;
    `;
    
    const InputEmail = styled.input`
        width: 350px;
        font-size: 12.5pt;
        height: 100%;
        background: none;
        color: #ffffff;
        outline: none;
        border: none;
    `;

    const Hr = styled.hr`
        margin: 3rem 0 4.5rem 0;
        border: 0.1px solid white;
        opacity: 9.5%;
        width: 92%;
    `;

    const Linear = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    
  return (
    <Container>
        <FooterTop>
            <TxtTitleArea>
                <Title>Você Ainda Precisa Do Nosso <TxtMarking>Suporte</TxtMarking> ?</Title>
                <Legend>Não espere, faça uma cotação inteligente e lógica aqui. É bem fácil.</Legend>
            </TxtTitleArea>
            <RegisterOfField>
                <EmailField>
                    <InputEmail type="email" placeholder="Insira seu e-mail aqui"/>
                </EmailField>
                    <Subscribe>Assine agora</Subscribe>
            </RegisterOfField>
        </FooterTop>
        <Linear><Hr/></Linear>
    </Container>
  )
}

export default Footer;