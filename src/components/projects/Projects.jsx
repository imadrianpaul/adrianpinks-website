import React, { useState, useEffect, useRef } from "react";
import Filter from "./Filter";
import "./Projects.css";
import { VscGithubAlt } from "react-icons/vsc";


import { AiOutlineFileSearch } from "react-icons/ai";
import { PiFigmaLogoLight } from "react-icons/pi";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // Import the "up arrow" icon

const Projects = () => {
    const [items, setItems] = useState(Filter);
    const [activeFilter, setActiveFilter] = useState(0);
    const [showScroll, setShowScroll] = useState(false); // State to track scroll visibility

    const projectsRef = useRef(null); // Ref to scroll back to the projects section

    // Function to filter projects
    const filterItems = (categoryItem) => {
        const updatedItems = Filter.filter((curElem) => {
            if (Array.isArray(categoryItem)) {
                return categoryItem.some(category => curElem.category.includes(category));
            }
            return curElem.category.includes(categoryItem);
        });
        setItems(updatedItems);
    };

    // Function to scroll back to the Projects section
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    // Function to handle scroll visibility of the "Back to Top" button
    const checkScrollTop = () => {
        const projectsSection = projectsRef.current;
        const rect = projectsSection.getBoundingClientRect();

        const isVisibleInViewport = rect.top <window.innerHeight && rect.bottom > 0;
        const isScrolledDown = window.scrollY > projectsSection.offsetTop;

        if (isVisibleInViewport && isScrolledDown) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, []);

    return (
        <section className="portfolio container section" id="portfolio" ref={projectsRef}>
            <h2 className="section__title">Projects</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Filter); setActiveFilter(0); }}>
                    Works
                </span>
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems(["frontend", "backend", "development"]); setActiveFilter(1); }}>
                    Development
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("design"); setActiveFilter(2); }}>
                    Design
                </span>
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, description, urlfigma, urlgithub, urlstudy } = elem;

                    return (
                        <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="portfolio__grid-container"
                            key={id}>
                            <div className="portfolio__card">
                                <div className="portfolio__thumbnail">
                                    <img src={image} alt="" className="portfolio__img" height="267" />
                                </div>
                            </div>
                            <div className="portfolio__desc">
                                <h3 className="portfolio__title">{title}</h3>
                                <div className="portfolio__info">
                                    <p>{description}</p>
                                </div>
                                <div className="portfolio__category-container">
                                    {category.map((cat, index) => (
                                        <span key={index} className="portfolio__category">{cat}</span>
                                    ))}
                                </div>
                                <div className="portfolio__buttons">
                                    <a href={urlfigma} target="_blank" rel="noreferrer" className="portfolio__button">
                                        <PiFigmaLogoLight />
                                    </a>
                                    <a href={urlgithub} target="_blank" rel="noreferrer" className="portfolio__github-button">
                                        <VscGithubAlt />
                                    </a>
                                    <a href={urlstudy} target="_blank" rel="noreferrer" className="portfolio__vs-button">
                                    <AiOutlineFileSearch />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Back to Top Button */}
            {showScroll && (
                <div className="back-to-top" onClick={scrollToProjects}>Back to top
                    <FaArrowUp className="back-to-top-icon" />
                </div>
            )}
        </section>
    );
};

export default Projects;
