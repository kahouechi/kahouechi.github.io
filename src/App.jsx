import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Opening from './pages/Opening/opening.jsx';
import Home from './pages/Home/home.jsx';
import Projects from './pages/Projects/projects.jsx';
import Resume from './pages/Resume/resume.jsx';
import Contact from './pages/Contact/contact.jsx';
import Layout from './Layout.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';

function App() {
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App
