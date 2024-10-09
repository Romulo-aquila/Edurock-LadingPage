import styled from "styled-components";
import CardS002 from "./CardS002";

function LastSession() {
    const Content = styled.div`
        background-color: #f1ecf8;
        height: auto;
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

    const ImgsContainer = styled.div`
        display: flex;
        margin-top: 24.5px;
        flex-direction: row;
        gap: 2rem;
    `;

  return (
    <Content>
        <Titles>
            <SmallTitle>NOTÍCIAS & BLOG</SmallTitle>
            <MainTitle>Últimas notícias e blogs</MainTitle>
            <ImgsContainer>
                <CardS002 lesson={'20 DE ABRIL 2024'} Image={'assets/blog_5.png'} Legend="Story" color={'#000'}/>
                <CardS002 lesson={'14 DE MARÇO 2024'} Image={'assets/blog_24.png'} Legend="Story" color={'#000'}/>
                <CardS002 lesson={'10 DE OUTUBRO 2024'} Image={'assets/blog_25.png'} Legend="Story" color={'#000'}/>
            </ImgsContainer>
        </Titles>
    </Content>
  )
}

export default LastSession;