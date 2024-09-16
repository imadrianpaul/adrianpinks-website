import React from "react";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub  } from "react-icons/ai";



const Socials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/imadrianpaul' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineGithub />
            </a>

            <a href='https://www.linkedin.com/in/adrian-pingkian-33711b279/' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineLinkedin />
            </a>

            <a href='https://www.facebook.com/hitsuguyaakira' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineFacebook />
            </a>

            <a href='https://www.instagram.com/adrianpinks/' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineInstagram />
            </a>
        </div>
    );
};

export default Socials;