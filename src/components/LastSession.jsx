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
        margin-top: 22.5px;
        padding-bottom: 50px;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    `;

    const MoreBlog = styled.button`
        width: 184.417px;
        height: 59px;
        border: none;
        background-color: #5f2ded;
        text-transform: uppercase;
        border-radius: 4.5px;
        color: #fff;
        letter-spacing: 0.8px;
        font-size: 15.5px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.4s;

    &:hover {
        border: 1px solid #5f2ded;
        background-color: #fff;
        color: #5f2ded;
    }
    `;

    const Centralization = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 4.4rem;
    `;

  return (
    <Content>
        <Titles>
            <SmallTitle>NOTÍCIAS & BLOG</SmallTitle>
            <MainTitle>Últimas notícias e blogs</MainTitle>
        </Titles>
            <ImgsContainer>
                <CardS002 lesson={'20 DE ABRIL 2024'} Image={'assets/blog_5.png'} 
                Legend="Story" color={'#000'}/>
                <CardS002 lesson={'14 DE MARÇO 2024'} Image={'assets/blog_24.png'} 
                Legend="Story" color={'#000'}/>
                <CardS002 lesson={'10 DE OUTUBRO 2024'} Image={'assets/blog_25.png'}
                 Legend="Story" color={'#000'}/>
            </ImgsContainer>
            <Centralization>
                <MoreBlog>Mais Blogs</MoreBlog>
            </Centralization>
    </Content>
  )
}

export default LastSession;