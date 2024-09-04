import React, { useState} from "react";
import Filter from "./Filter";
import "./Projects.css";
import { ReactComponent as Figma } from "../../assets/figma-icon.svg";
import { ReactComponent as GitHub } from "../../assets/github-icon.svg";
import { motion } from "framer-motion"; 


const Projects = () => {
    const [items, setItems] = useState(Filter);
    const [activeFilter, setActiveFilter] = useState(0);

    const filterItems = (categoryItem) => {
        const updatedItems = Filter.filter((curElem) => {
            return curElem.category.includes(categoryItem);
        });

        setItems(updatedItems);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">All Projects</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Filter); setActiveFilter(0) }}>
                    All
                </span>
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Development"); setActiveFilter(1) }}>
                    Development
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Design"); setActiveFilter(2) }}>
                    Design
                </span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Video Edits"); setActiveFilter(3) }}>
                    Video Edit
                </span>                
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, urlfigma, urlgithub } = elem;

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition = {{ duration: 0.2 }}
                            className="portfolio__card"
                            key= {id }>
                            <div className="portfolio__thumbnail">
                                <img src={ image } alt="" className="portfolio__img" height="267" />
                                <div className="portfolio__mask"></div>
                            </div>

                            <span className="portfolio__category">{ category.join(', ') }</span>
                            <h3 className ="portfolio__title">{ title }</h3>

                            <a href={ urlfigma } target="_blank" rel="noreferrer" className="portfolio__button">
                                <Figma className="portfolio__button-icon" />
                            </a>
                            <a href={ urlgithub } target="_blank" rel="noreferrer" className="portfolio__github-button">
                                <GitHub className="portfolio__button-icon" />
                            </a> 
                        </motion.div>
                            
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;