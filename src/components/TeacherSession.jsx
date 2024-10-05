import styled from "styled-components";

function TeacherSession() {
    const Content = styled.div`
        background-color: #fafafb;
    `;

    const SmallTitle = styled.h3`
        font-size: 12pt;
        color: #f2277e;
    `;

    const MainTitle = styled.h1``;

    const Titles = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;
        padding-top: 5rem;
    `;

    const ContainerImgs = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1.7rem;
    `;

    const ContainerImage = styled.div`

    `;

    const TeacherImg = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__1.png');
    `;

    const TeacherImg2 = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__2.png');
        
    `;

    const TeacherImg3 = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__3.png');
        
    `;

    const TitleTeacher = styled.h4`
        font-weight: 500;
        padding: 20px 0 4.5px 0;
        color: #5f6c76;
    `;

    const NameTeacher = styled.h2`
        color: #5f6c76;
    `;

    const WtSpace = styled.div`
        height: 95px;
        background-color: #fafafb;
    `;

  return (
    <Content>
        <Titles>
            <SmallTitle>PROFESSORES ESPECIALISTAS</SmallTitle>
            <MainTitle>Nosso Professor Especialista</MainTitle>
        </Titles>
            <ContainerImgs>
                <ContainerImage>
                    <TeacherImg></TeacherImg>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Mirnsdo Jons</NameTeacher>
                </ContainerImage>
                <ContainerImage>
                    <TeacherImg2></TeacherImg2>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Daniel Rock</NameTeacher>
                </ContainerImage>
                <ContainerImage>
                    <TeacherImg3></TeacherImg3>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Sajid Mustahidul</NameTeacher>
                </ContainerImage>
            </ContainerImgs>
        <WtSpace></WtSpace>
    </Content>
  )
}

export default TeacherSession;