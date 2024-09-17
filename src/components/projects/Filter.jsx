import Proj3 from "../../assets/lunarshift-mockup-3.png";
import Proj4 from "../../assets/camluxe-mockup.png";
import Proj1 from "../../assets/bpi-website-mockup.png"
import Proj5 from "../../assets/csol-mockup-2.png"
import Proj2 from "../../assets/wbst-prtfl.png"
import capstoneProj from "../../assets/capstonedoc.pdf";


const Filter = [
    {
        id: 1,
        image: Proj4,
        title: "Camluxe",
        category: ["design", "ui"],
        urlfigma: "https://www.figma.com/proto/gKd63mCSptT0kltp37R5cw/Camluxe?node-id=721-674",
        description: "Camluxe is a platform I designed for photographers to share their work in a clean and beautiful way. It features four categories—Portrait, Fashion, Landscape, and Lifestyle—so users can easily view or organize their photos and let their creativity stand out.",
    },
    {
        id: 2,
        image: Proj2,
        title: "Website Portfolio",
        category: ["frontend", "html", "css", "reactjs"],
        urlgithub: "https://github.com/imadrianpaul/adrianpinks-website.git",
        description: "A personal website portfolio to showcase projects and skills using HTML5, CSS3, and ReactJS. The website features a clean, responsive design. The site is hosted on Vercel for seamless performance and accessibility."
    },
    {
        id: 3,
        image: Proj3,
        title: "The E-commerce Lunarshift Case Study",
        category: ["design", "ui/ux"],
        urlfigma: "https://www.figma.com/proto/fkFWVuS017CpeHWeyeDnxw/Lunarshift-%7C-E-commerce-Website?node-id=880-4342&starting-point-node-id=880%3A4342",
        description: "LunarShift is a tech-focused e-commerce site offering high-performance gaming peripherals with a cosmic theme. Its purpose is to provide gamers with top-quality gear while creating an immersive, visually striking shopping experience."
    },
    {
        id: 4,
        image: Proj1,
        title: "Bureau of Plant Industry",
        category: ["backend", "php", "laravel"],
        urlpage: "",
        description: "Bureau of Plant Industry, tasked to update a website branch upgrading the framework from Laravel 10 to 11 with PHP. Gained experience in familiarizing with Laravel components, routing techniques, and enhancing the overall understanding of the framework."
        
    },
    {
        id: 5,
        image: Proj5,
        title: "Hardware Device Monitoring System (Capstone Project)",
        category: ["project"],
        urlgithub: "https://github.com/imadrianpaul",
        urlstudy: capstoneProj,
        description: " The system helps IT technicians track hardware statuses in real-time, detect issues early, and manage network resources through a visual mapping feature. It reduces their workload and ensures optimal computer performance."
    },
    
];

export default Filter;