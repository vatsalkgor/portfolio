import React from "react";
import {
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoIosMail,
} from "react-icons/io";

export default function SocialLinks() {
    return (
        <>
            <a href="mailto:vatsalkgor@gmail.com">
                <IoIosMail size="2em"></IoIosMail>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/vatsalkgor/"
                rel="noopener noreferrer"
            >
                <IoLogoLinkedin size="2em"></IoLogoLinkedin>
            </a>
            <a
                target="_blank"
                href="https://www.github.com/vatsalkgor/"
                rel="noopener noreferrer"
            >
                <IoLogoGithub size="2em"></IoLogoGithub>
            </a>
            <a
                target="_blank"
                href="https://www.facebook.com/vatsal.gor"
                rel="noopener noreferrer"
            >
                <IoLogoFacebook size="2em"></IoLogoFacebook>
            </a>
            <a
                target="_blank"
                href="https://www.instagram.com/vatsalthecleveridiot/"
                rel="noopener noreferrer"
            >
                <IoLogoInstagram size="2em"></IoLogoInstagram>
            </a>
        </>
    );
}
