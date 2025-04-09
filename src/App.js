import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useLocalStorage } from 'usehooks-ts';
import gradientBgLight from './assets/gradientbg-light.jpg';
import gradientBgDark from './assets/gradientbg-dark.jpg';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const backgroundImage = theme === 'light' ? gradientBgLight : gradientBgDark;

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Sidebar theme={theme} switchTheme={switchTheme} />
        <main className="main">
          <Routes>
            <Route path="/" element={
              <>
                {/* Home section with custom background */}
                <div className="home__section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                  <Home />
                </div>
                
                {/* Background starts from About */}
                <div className="main__background">
                  <About />
                  <Projects />
                  <Timeline />
                  <Contact />
                  <Footer />
                </div>
              </>
            } />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
