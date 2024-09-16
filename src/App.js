import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Works from './components/projects/Works'; // Import Works component

import { useLocalStorage } from 'usehooks-ts';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Sidebar theme={theme} switchTheme={switchTheme} />
        <main className="main">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/works" element={<Works />} /> {/* Works page route */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
