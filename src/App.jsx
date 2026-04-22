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
      <Scroller /> {/* resets scroll on route change */}

      <div className="flex-1">
        <Routes>
          {/* Home route: stacked sections */}
          <Route
            path="/"
            element={
              <div className="overflow-y-auto">
                <section className="min-h-screen">
                  <Home />
                </section>
                <section className="min-h-screen">
                  <About />
                </section>
                <section className="min-h-screen">
                  <Project />
                </section>
                <section className="min-h-screen">
                  <Contact />
                </section>
              </div>
            }
          />

          {/* Other routes: standalone pages */}
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
