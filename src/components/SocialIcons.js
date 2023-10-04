import React from 'react';
import {FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledIcons } from './styles/SocialIcons.styled';

const SocialIcons = () => {
    return (
        <StyledIcons>
            <li>
                <a href="https://twitter.com/">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://facebook.com/">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="https://Linkedin.com/">
                    <FaLinkedin />
                </a>
            </li>
        </StyledIcons>
    )
}

export default SocialIcons
