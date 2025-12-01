import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import RoutesPage from "@/pages/Routes";
import Cases from "@/pages/Cases";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import Contact from "@/pages/Contact";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState<"zh" | "en">("zh");

  const logout = () => {
    setIsAuthenticated(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "zh" ? "en" : "zh");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/about" element={<About language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/services" element={<Services language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/routes" element={<RoutesPage language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/cases" element={<Cases language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/news" element={<News language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/news/:id" element={<NewsDetail language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/contact" element={<Contact language={language} toggleLanguage={toggleLanguage} />} />
      </Routes>
    </AuthContext.Provider>
  );
}
