import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Linkedin, Github, Instagram, MessageCircle, Sun, Moon, Eye, Users } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Navbar = ({ activeSection, onToggleAi, theme, onToggleTheme, visitorCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Assistant', href: '#ai-section' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark'
            ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-lg py-3'
          : theme === 'dark'
            ? 'bg-[#070b14]/60 backdrop-blur-sm py-4 border-b border-white/5'
            : 'bg-white/60 backdrop-blur-sm py-4 border-b border-slate-200/50'
      }`}
    >
      <div className="custom-container flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 shrink-0 group"
        >
          <div className="relative">
            <img 
              src="/images/shivam-logo.png" 
              alt="Shivam Yadav" 
              className="h-10 w-10 rounded-full object-cover border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#070b14]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-none">
              SHIVAM YADAV
            </span>
            <span className={`text-[10px] font-mono tracking-widest uppercase mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border ${
          theme === 'dark' 
            ? 'bg-slate-900/80 border-white/10' 
            : 'bg-white/80 border-slate-200 shadow-sm'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase().replace(' ', '-');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions: Visitor Counter, Theme Switcher, AI Button, Socials */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Visitor Count Badge */}
          <div 
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all ${
              theme === 'dark'
                ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                : 'bg-purple-100 border-purple-300 text-purple-700'
            }`}
            title="Total Page Views / Visitors"
          >
            <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span className="font-bold">{visitorCount ? visitorCount.toLocaleString() : '1,248'}</span>
            <span className="text-[10px] opacity-75">Visits</span>
          </div>

          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900 border-white/10 text-amber-400 hover:bg-slate-800 hover:border-amber-400/50'
                : 'bg-slate-100 border-slate-300 text-purple-600 hover:bg-slate-200 hover:border-purple-400'
            }`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Ask ShivAI Button */}
          <button
            onClick={onToggleAi}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-500 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
          >
            <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Ask ShivAI</span>
          </button>

          {/* Social Quick Links */}
          <div className={`hidden xl:flex items-center gap-1.5 border-l pl-2 ${
            theme === 'dark' ? 'border-white/10 text-slate-400' : 'border-slate-300 text-slate-600'
          }`}>
            <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalData.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-colors" title="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-slate-900 border-white/10 text-slate-300 hover:text-cyan-400'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b backdrop-blur-xl px-6 py-5 mt-3 transition-all ${
          theme === 'dark'
            ? 'bg-[#070b14]/95 border-white/10'
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            {/* Mobile Visitor Badge */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-purple-400" />
                <span>Total Visitors:</span>
              </span>
              <span className="font-bold">{visitorCount ? visitorCount.toLocaleString() : '1,248'}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-200 hover:text-cyan-400 hover:bg-white/5'
                    : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className={`pt-4 mt-2 border-t flex items-center justify-around ${
              theme === 'dark' ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalData.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={personalData.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
