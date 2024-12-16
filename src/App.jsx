import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // React Router import
import Home from "./portfolio/Home";
import About from "./portfolio/About";
import Projects from "./portfolio/Project";
import Contact from "./portfolio/Contact";
import Navbar from './portfolio/Navbar';

function App() {
  return (
    <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
