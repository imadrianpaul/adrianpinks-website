import React from 'react';
import './Timeline.css';
import { motion } from 'framer-motion';
import { GoBriefcase } from "react-icons/go";
import { TbColorFilter } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";




const Timeline = () => {
    const timelineData = [
        {
            id: 1,
            year: '2024 - Present',
            title: 'Fullstack Web Developer',
            company: 'One',
            description: 'Working on frontend and backend development using Svelte, Laravel, and other techs.',
            icon: <GoBriefcase />
        },
        {
            id: 2,
            year: '2024',
            title: 'UI/UX Designer',
            company: 'Building Portfolio',
            description: 'Created user interfaces and experiences for web and mobile applications. ',
            icon: <TbColorFilter />
        },
        {
            id: 3,
            year: '2020 - 2024',
            title: 'Bachelor of Science in Information Technology',
            company: 'Adamson University',
            description: 'Studied technology with networking, programming, and web development.',
            icon: <RiGraduationCapLine />
        }
    ];

    return (
        <section className="timeline container section" id="timeline">
            <h2 className="section__title">My Journey</h2>

            <div className="timeline__container">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`timeline__item ${index % 0 === 1 ? 'left' : 'right'}`}
                    >
                        <div className="timeline__content">
                            <div className="timeline__icon">{item.icon}</div>
                            <span className="timeline__date">{item.year}</span>
                            <h3 className="timeline__title">{item.title}</h3>
                            <h4 className="timeline__company">{item.company}</h4>
                            <p className="timeline__text">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;