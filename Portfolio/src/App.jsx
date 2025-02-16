import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/profile/Portfolio";
import Navbar from "./Components/layout/Navbar";
import Contact from "./Components/sources/Contact";
import AboutMe from "./Components/sources/Aboutme";
import Skills from "./Components/sources/Skills";
import Footer from "./Components/layout/Footer";
import Projects from "./Components/sources/Projects";
import Resume from "./Components/sources/Resume";



function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;
