import React, { useState } from "react";
import "./Contact.css";
import Socials2 from "./Socials2";

const Contact = () => {
    const [tooltipText, setTooltipText] = useState("Click to copy");

    // Function to copy the email to the clipboard
    const copyEmail = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText("youadrianppaul@gmail.com").then(() => {
            setTooltipText("Copied!");  // Change tooltip text on click
            setTimeout(() => {
                setTooltipText("Click to copy"); // Reset tooltip after 2 seconds
            }, 2000);
        });
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Reach Me</h2>
            <div className="contact__me grid">
                <div className="contact__phrase">
                    <p>If you have any questions and want to reach me, copy the email below!</p>
                </div>
                <div className="contact__email">
                    <a
                        href="mailto:youadrianppaul@gmail.com"
                        className="contact__elink"
                        id="emaillink"
                        onClick={copyEmail}
                    >
                        youadrianppaul@gmail.com
                    </a>
                    <span className="contact__tooltip" id="tooltip">
                        {tooltipText}
                    </span>
                    
                </div>
                <Socials2 />
            </div>
        </section>
    );
};

export default Contact;
