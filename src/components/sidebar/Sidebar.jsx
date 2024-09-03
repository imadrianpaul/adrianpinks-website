import React, {useState} from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightMode from "../../assets/sun-icon.svg";
import HomeButton from "../../assets/home-icon.svg";




const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav_logo">
                    <img src={props.theme === 'light' ? LightMode : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <img src={HomeButton} alt="Home Icon" />
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar