import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

function RegistrationSession() {
    const Container = styled.div`
        width: 100%;
        height: 545.4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #340f99;
        gap: 5px;
        padding: 0 70px;
        padding-top: 5.5rem;
    `;

    const CaptionTxt = styled.p`
        background-color: #e7deff;
        color: #5f2ded;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 1.4rem;
        border-radius: 16px;
        align-items: center;
        font-size: 14.5px;
        font-weight: 500;
        width: 124.667px;
        height: 30px;
    `;

    const Title = styled.h2`
        font-size: 30pt;
        margin-bottom: 2rem;
        color: #fff;
    `;

    const SubTitle = styled.h3`
        color: #fff;
        font-size: 16pt;
        width: 77%;
        font-weight: 500;
    `;

    const NumYellow = styled.span`
        color: #f0b410;
    `;

    const Underline = styled.span`
        text-decoration: underline;
        text-decoration-thickness: 4.5px;
        text-decoration-color: #f2277e;
    `;

    const CirclePlay = styled.div`
        width: 64px;
        height: 64px;
        border-radius: 3rem;
        background-color: #f2277e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const IconPlay = styled.span`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12.5pt;
        color: aliceblue;
    `; 

    const PlayAndSubTitle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    `;

    const RegisterField = styled.div`
        width: 470px;
        height: 575.4px;
        background-color: #f5f5fe;
        border-radius: 5px;
    `;

    const FormField = styled.form`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0 2.4rem;
    `;

    const InputName = styled.input`
        outline: none;
        border: none;
        padding-left: 12px;
        background-color: #f0f1f3;
        font-size: 16.5px;
        width: 400px;
        height: 48px;
    `;

    const InputEmail = styled.input`
        outline: none;
        border: none;
        padding-left: 12px;
        background-color: #f0f1f3;
        font-size: 16.5px;
        width: 185px;
        height: 48px;
    `;

    const InputPhone = styled.input`
        outline: none;
        border: none;
        padding-left: 12px;
        background-color: #f0f1f3;
        font-size: 16.5px;
        width: 200px;
        height: 48px;
        `;

    const InputAddress = styled.input`
        outline: none;
        border: none;
        padding-left: 12px;
        background-color: #f0f1f3;
        font-size: 16.5px;
         width: 400px;
         height: 48px;
    `;

    const TextArea = styled.textarea`
        border: none;
        padding-left: 2.5px;
        background-color: #f0f1f3;
        font-size: 16.5px;
        width: 400px;
        height: 155px;

        &::placeholder {
            color: #000;
            opacity: 100%;
        }
    `;

    const EmailAndPhone = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    `;


    const InputBtn = styled.button`
        cursor: pointer;
        font-size: 14.5px;
        font-weight: 400;
        color: #fff;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5f2ded;
        border-radius: 4px;
        width: 130px;
        height: 48px;
        transition: 0.2s;

        &:hover {
            background-color: #fff;
            border: 1px solid #5f2ded;
            color: #5f2ded;
        }
    `;

    const IconBtn = styled.span`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
        font-size: 12pt;
    `;
    

    const FormTitle = styled.h3`
        font-size: 20px;
        padding-top: 2rem;
    `;


    const TextSection = styled.div`
        width: 65%;
    `;

    const WSpace = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 118px;
        background-color: #fafafb;
        
    `;
    
  return (
    <>
    <Container>
     <TextSection>
        <CaptionTxt>Registrar</CaptionTxt>
        <Title>Registre Sua <Underline>Conta</Underline> e Obtenha Acesso Gratuito a 
            <NumYellow> 60000</NumYellow> cursos online </Title>
        <PlayAndSubTitle>
        <CirclePlay><IconPlay><FaPlay/></IconPlay></CirclePlay>
        <SubTitle>Aprenda Algo Novo E Construa Sua 
            Carreira De Qualquer Lugar do Mundo</SubTitle>
        </PlayAndSubTitle>
    </TextSection>
        <RegisterField>
            <FormField>
                <FormTitle>Registre sua Conta</FormTitle>
        <InputName type="text" placeholder="Seu Nome" /> 
        <EmailAndPhone>
            <InputEmail type="text" placeholder="Email" />
            <InputPhone type="text" placeholder="Celular" />
        </EmailAndPhone>
        <InputAddress type="text" placeholder="Endereço" />
        <TextArea placeholder="Comentário" />
        <InputBtn type="button" >Cadastrar-se <IconBtn><MdArrowRightAlt/></IconBtn></InputBtn>
            </FormField>
        </RegisterField>
    </Container>
    <WSpace></WSpace>
    </>
  )
}

export default RegistrationSession;