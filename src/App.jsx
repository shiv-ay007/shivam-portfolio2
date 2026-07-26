import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Bot, MessageCircle } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visitorCount, setVisitorCount] = useState(1248);

  // 1. Prevent unwanted auto-scroll on page load & refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  // 2. Live Visitor Count Logic
  useEffect(() => {
    const savedCount = localStorage.getItem('shivam_portfolio_visitor_count');
    const initialBase = 1248;
    
    let newCount = initialBase;
    if (savedCount) {
      newCount = parseInt(savedCount, 10) + 1;
    } else {
      newCount = initialBase + 1;
    }

    localStorage.setItem('shivam_portfolio_visitor_count', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  // 3. Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 4. Scroll progress & Active Section tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ['home', 'about', 'skills', 'services', 'projects', 'ai-section', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAi = () => {
    const aiSection = document.getElementById('ai-section');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/917266079663?text=Hello%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!";

  return (
    <div className="min-h-screen transition-colors duration-400">
      
      {/* Custom Glowing Cursor & Shadow */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <div 
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Header / Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onToggleAi={handleToggleAi} 
        theme={theme}
        onToggleTheme={toggleTheme}
        visitorCount={visitorCount}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onToggleAi={handleToggleAi} visitorCount={visitorCount} />
        <About />
        <Skills />
        <Services />
        <Projects />
        <AiAssistant />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onToggleAi={handleToggleAi} visitorCount={visitorCount} />

      {/* Floating Action Button 1: WhatsApp (Bottom Left) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab group"
        title="Chat on WhatsApp (+91 7266079663)"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20 group-hover:scale-110 transition-transform" />
      </a>

      {/* Floating Action Button 2: AI Chatbot (Bottom Right) */}
      <button 
        onClick={handleToggleAi}
        className="ai-fab group"
        title="Ask ShivAI Assistant"
        aria-label="Ask ShivAI"
      >
        <Bot className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <span className="ai-badge">AI</span>
      </button>

    </div>
  );
}

export default App;
