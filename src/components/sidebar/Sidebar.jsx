import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation from react-router-dom
import "./Sidebar.css";
import { VscHome, VscChecklist, VscMail } from "react-icons/vsc";
import { BiUser, BiMenu } from "react-icons/bi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

// Import your images
import Logo1 from "../../assets/logo1.jpg";
import Logo2 from "../../assets/logo2.svg";
import Logo3 from "../../assets/logo3.svg";
import Logo4 from "../../assets/logo4.svg";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(Logo1);
    const location = useLocation(); // To track URL changes

    // List of logo images
    const logos = [Logo1, Logo2, Logo3, Logo4];

    // Function to randomly change the logo
    const changeLogo = () => {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setCurrentLogo(logos[randomIndex]);
    };

    // Scroll to the section when location changes (when hash is updated)
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                {/* Use Link for logo to navigate to the home page */}
                <Link to="/#home" className="nav_logo" onClick={changeLogo}>
                    <img src={currentLogo} alt="logo" />
                </Link>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                {/* Use Link for home with the hash for the home section */}
                                <Link to="/#home" className="nav__link">
                                    <VscHome />
                                </Link>
                            </li>
                            <li className="nav__item">
                                {/* Use Link for about with the hash for the about section */}
                                <Link to="/#about" className="nav__link">
                                    <BiUser />
                                </Link>
                            </li>
                            <li className="nav__item">
                                {/* Use Link for portfolio with the hash for the portfolio section */}
                                <Link to="/#portfolio" className="nav__link">
                                    <VscChecklist />
                                </Link>
                            </li>
                            <li className="nav__item">
                                {/* Use Link for contact with the hash for the contact section */}
                                <Link to="/#contact" className="nav__link">
                                    <VscMail />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle); }} className="nav__link footer__button">
                        {props.theme === 'light' ? <IoMoonOutline /> : <IoSunnyOutline />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <BiMenu />
            </div>
        </>
    );
};

export default Sidebar;
