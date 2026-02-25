import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalCursorGlow from "./components/effects/GlobalCursorGlow";
import ScrollReveal from "./components/effects/ScrollReveal";

import TopInfoBar from "./components/infoStrip/TopInfoBar";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
function App() {
  const [theme, setTheme] = useState("light");

  // initial theme: localStorage -> system preference -> light
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initial = prefersDark ? "dark" : "light";

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  // apply + persist theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
      <ScrollReveal />
      <GlobalCursorGlow />
      <TopInfoBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;