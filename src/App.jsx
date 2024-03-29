import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import home from './pages/Home/home.jsx';
import projects from './pages/Projects/projects.jsx';
import resume from './pages/Resume/resume.jsx';
import contact from './pages/Contact/contact.jsx';
import Layout from './Layout.jsx';

function App() {
  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<home />} />
          <Route path="/projects" element={<projects />} />
          <Route path="/resume" element={<resume />} />
          <Route path="/contact" element={<contact />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App
