import React from "react";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub  } from "react-icons/ai";



const Socials2 = () => {
    return (
        <div className='contact__socials'>
            <a href='https://github.com/imadrianpaul' className='contact__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineGithub />
            </a>

            <a href='https://www.linkedin.com/in/adrian-pingkian-33711b279/' className='contact__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineLinkedin />
            </a>

            <a href='https://www.facebook.com/hitsuguyaakira' className='contact__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineFacebook />
            </a>

            <a href='https://www.instagram.com/adrianpinks/' className='contact__social-link' target='_blank' rel='noreferrer'>
                <AiOutlineInstagram />
            </a>
        </div>
    );
};

export default Socials2;