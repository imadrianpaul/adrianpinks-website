import React from "react";
import './About.css';
import Resume from '../../assets/Adrian Pingkian  Resume.pdf';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <div className="about__info">
                    <p className="about__description">
                        I'm Adrian, a web designer living in Philippines, Cavite Province. I studied at Adamson University, earned Bachelor's Degree and received the 
                        diploma in Information Technology. <br/><br/>
                        I've always been fascinated by the world of designing.<br/><br/>
                    </p>
                    <ul className="about__list">
                        <li>React</li>
                        <li>Laravel</li>
                        
                        
                    </ul>
                    <button className="btn" onClick={downloadResume}>Download CV</button>
                </div>
            </div>
        </section>
    )

}

export default About