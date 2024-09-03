import React, { useState} from "react";
import "./Projects.css";

import Filter from "./Filter";

const Projects = () => {
    const [items, setItems] = useState(Filter);
    const [activeFilter, setActiveFilter] = useState(0);
    const filterItems = (categoryItem) => {
        const updatedItems = Filter.filter((curElem) => {
            return curElem.category.includes(categoryItem);
        });

        setItems(updatedItems);
    };
}

export default Projects