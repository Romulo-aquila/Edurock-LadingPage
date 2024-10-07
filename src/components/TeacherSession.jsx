import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function TeacherSession() {
    const Content = styled.div`
        background-color: #fafafb;
    `;

    const SmallTitle = styled.h3`
        font-size: 12pt;
        color: #f2277e;
        padding-bottom: 16px;
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

    const TitleTeacher = styled.h4`
        font-weight: 500;
        padding: 20px 0 4.5px 0;
        color: #5f6c76;
    `;

    const NameTeacher = styled.h2`
        color: #5f6c76;
    `;

    const SocialMidiaList  = styled.div`
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        padding-right: 16px;
        padding-top: 12px;
    `;

    const SocialMidiaList02 = styled.div`
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        padding-right: 16px;
        padding-top: 12px;
    `;

    const SocialMidiaList03 = styled.div`
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        padding-right: 16px;
        padding-top: 12px;
    `;

    const IconsM = styled.span`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 41px;
        height: 41px;
        border-radius: 4.5px;
        background-color: #fff;
        transition: 0.2s;
        color: #66727c;
        cursor: pointer;

        &:hover {
            background-color: #5f2ded;
            color: #fff;
        }
    `;

    const TeacherImg = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__1.png');

    &:hover > ${SocialMidiaList} {
        visibility: visible;
    }
    `;

    const TeacherImg2 = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__2.png'); 

    &:hover > ${SocialMidiaList02} {
        visibility: visible;
    }
    `;

    const TeacherImg3 = styled.div`
        width: 370px;
        height: 416px;
        background-image: url('assets/team__3.png');

    &:hover > ${SocialMidiaList03} {
        visibility: visible;
    }
    `;

    const WtSpace = styled.div`
        height: 95px;
        background-color: #fafafb;
    `;

  return (
    <Content>
        <Titles>
            <SmallTitle>PROFESSORES ESPECIALISTAS</SmallTitle>
            <MainTitle>Nossos Professores Especialistas</MainTitle>
        </Titles>
            <ContainerImgs>
                <ContainerImage>
                    <TeacherImg>
                <SocialMidiaList> {/* IconsM */}
                    <IconsM>
                        <FaFacebookF></FaFacebookF>
                    </IconsM>
                    <IconsM>
                        <FaBluesky></FaBluesky>
                    </IconsM>
                    <IconsM>
                        <FaInstagram></FaInstagram>
                    </IconsM>
                    <IconsM>
                        <FaYoutube></FaYoutube>
                    </IconsM>
                </SocialMidiaList>
                    </TeacherImg>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Mirnsdo Jons</NameTeacher>
                </ContainerImage>
                <ContainerImage>
                    <TeacherImg2>
                <SocialMidiaList02> {/* IconsM */}
                    <IconsM>
                        <FaFacebookF></FaFacebookF>
                    </IconsM>
                    <IconsM>
                        <FaBluesky></FaBluesky>
                    </IconsM>
                    <IconsM>
                        <FaInstagram></FaInstagram>
                    </IconsM>
                    <IconsM>
                        <FaYoutube></FaYoutube>
                    </IconsM>
                </SocialMidiaList02>
                    </TeacherImg2>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Daniel Rock</NameTeacher>
                </ContainerImage>
                <ContainerImage>
                    <TeacherImg3>
                <SocialMidiaList03> {/* IconsM */}
                    <IconsM>
                        <FaFacebookF></FaFacebookF>
                    </IconsM>
                    <IconsM>
                        <FaBluesky></FaBluesky>
                    </IconsM>
                    <IconsM>
                        <FaInstagram></FaInstagram>
                    </IconsM>
                    <IconsM>
                        <FaYoutube></FaYoutube>
                    </IconsM>
                </SocialMidiaList03>
                    </TeacherImg3>
                    <TitleTeacher>DESIGNER DE INTERIORES</TitleTeacher>
                    <NameTeacher>Sajid Mustahidul</NameTeacher>
                </ContainerImage>
            </ContainerImgs>
        <WtSpace></WtSpace>
    </Content>
  )
}

export default TeacherSession;