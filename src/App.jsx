import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Projects from './pages/Projects/projects.jsx';
import Resume from './pages/Resume/resume.jsx';
import Layout from './Layout.jsx';

function App() {
  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App
