import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import styled from 'styled-components';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactsHeader = () => {
    const SocialMedia = styled.ul`
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: row;
    `;

    const Item = styled.li`
    list-style: none;
    margin-left: 12px;
    color: #fff;

    &:hover {
        color: #5f2ded;
    }
    `;

    const HeaderCts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around ;
    height: 35px;
    width: 100%;
    background-color: #191b1e;
    `;

    const Icon = styled.p`
        color: #5f2ded;
    `;

    const Texto = styled.p`
        display: flex;
        font-size: 14.5px;
        color: #fff;
    `;

  return (
    <HeaderCts>
        <Texto>Entre em Contato: +55 80 123456789 - Email: Itcroc@gmail.com</Texto>
        <Texto>
        <Icon>
            <FaLocationDot />
        </Icon>
            684 West College St. Sun City, USA
        </Texto>
        <SocialMedia>
            <Item><FaFacebookF/></Item>
            <Item><FaTwitter/></Item>
            <Item><FaInstagram/></Item>
            <Item><FaYoutube/></Item>
        </SocialMedia>
    </HeaderCts>
  )
}

export default ContactsHeader