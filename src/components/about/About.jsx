import React from "react";
import { motion } from "framer-motion";
import './About.css';
import Resume from '../../assets/Adrian Pingkian  Resume.pdf';
import codingImage from '../../assets/codingimg.jpg';
import figmaImage from '../../assets/figmaImage.jpg';


import { ReactComponent as CSharp } from '../../assets/csharp.svg';
import { ReactComponent as CSS } from '../../assets/css.svg';
import { ReactComponent as HTML } from '../../assets/HTML.svg';
import { ReactComponent as PHPDark } from '../../assets/PHPDark.svg';
import { ReactComponent as JavaScript } from '../../assets/JavaScript.svg';
import { ReactComponent as ReactDark } from '../../assets/ReactDark.svg';
import { ReactComponent as Laravel } from '../../assets/LaravelDark.svg';

import { ReactComponent as Figma } from '../../assets/Figma.svg';
import { ReactComponent as Git } from '../../assets/Git.svg';
import { ReactComponent as GitHub } from '../../assets/GitHub.svg';
import { ReactComponent as Illustrator } from '../../assets/Illustrator.svg';
import { ReactComponent as Photoshop } from '../../assets/Photoshop.svg';
import { ReactComponent as Premiere } from '../../assets/Premiere.svg';
import { ReactComponent as VSCode } from '../../assets/VSCode.svg';
import { ReactComponent as VSS } from '../../assets/VSS.svg';
import { ReactComponent as XD } from '../../assets/XD.svg';




const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 }, 
    visible: {
        opacity: 1, 
        scale: 1, 
        x: 0, // Move to the original position
        transition: { duration: 1, ease: "easeInOut", type: "spring", bounce: 0.4 },
    }
};


const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">


            <div className="about__container grid">
                <div className="about__data grid">
                    <div className="about__info">
                        <div className="section__title">About Me</div>
                        <p className="about__description">
                            I'm Adrian, a web designer living in Philippines, Cavite Province. I studied at Adamson University, earned Bachelor's Degree and received the 
                            diploma in Information Technology. <br/><br/>
                            I've always been fascinated by the world of designing. I want to see my creative ideas transform from vision to reality.
                            Also, I like lines.<br/><br/>
                        </p>
                        <ul className="about__list">    
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>

                <div className="about__skills grid">
                    <div className="about__wholebox">
                        <div className="about__box1">
                            <h3 className="about__label">Technologies</h3>
                            <div className="about__language">
                                {[
                                    { Component: HTML, delay: 0 },
                                    { Component: CSS, delay: 0.3 },
                                    { Component: JavaScript, delay: 0.3 },
                                    { Component: ReactDark, delay: 0.3 },
                                    { Component: PHPDark, delay: 0.3 },
                                    { Component: Laravel, delay: 0.3 },
                                    { Component: CSharp, delay: 0.3 }
                                ].map(({ Component, delay }, index) => (
                                    <motion.div
                                        key={index}
                                        className="about__icon"
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay }}
                                    >
                                        <Component width="32px" height="32px" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="about__pic1">
                            <img src={codingImage} alt="Coding" />
                        </div>

                        <div className="about__box2">
                            <h3 className="about__label">Tools</h3>
                            <div className="about__apps">
                                {[
                                    { Component: GitHub, delay: 0 },
                                    { Component: Git, delay: 0.3 },
                                    { Component: VSCode, delay: 0.3 },
                                    { Component: VSS, delay: 0.3 },
                                    { Component: Photoshop, delay: 0.3 },
                                    { Component: Premiere, delay: 0.3 },
                                    { Component: Illustrator, delay: 0.3 },
                                    { Component: XD, delay: 0.3 },
                                    { Component: Figma, delay: 0.3 }
                                ].map(({ Component, delay }, index) => (
                                    <motion.div
                                        key={index}
                                        className="about__icon"
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay }}
                                    >
                                        <Component width="32px" height="32px" />
                                    </motion.div>
                                ))}
                            </div>                     
                        </div>

                        <div className="about__pic2">
                            <img src={figmaImage} alt="Coding" />           
                        </div> 
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default About