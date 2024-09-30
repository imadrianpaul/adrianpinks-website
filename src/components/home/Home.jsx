import React from "react";
import './Home.css';
import SDown from './SDown';
import Socials from './Socials';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <h1 className="home__name">Adrian Paul Pingkian</h1>
                <div className="home__education">I'm a UI/UX Designer and a Web Developer</div>

                <Socials />

                <a href="#contact" className="btn"> @me </a>

                <SDown />
            </div>
        </section>
    )
}

export default Home