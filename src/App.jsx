import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Scroller from "./components/Scroller";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      {/* Scroller MUST be inside router (you already did correctly) */}
      <Scroller />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;