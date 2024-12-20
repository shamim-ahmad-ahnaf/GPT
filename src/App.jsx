import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // React Router import
import Navbar from './portfolio/Navbar';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from "./portfolio/Project";
import Contact from "./portfolio/Contact";

function App() {
  return (
    <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="Skills" element = {<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  
  );
}

export default App;
