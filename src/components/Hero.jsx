import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Sparkles, Code, Terminal, Download, Users, Eye } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Hero = ({ onToggleAi, visitorCount }) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personalData.subtitles[currentSubtitleIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentSubtitleIndex((prev) => (prev + 1) % personalData.subtitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSubtitleIndex]);

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Frontend Projects", value: "30+" },
    { label: "Full Stack Apps", value: "15+" },
    { label: "Total Page Visits", value: visitorCount ? `${visitorCount.toLocaleString()}+` : "1,248+" }
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="custom-container">
        
        {/* Main Grid: Left Details & Right Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Pill & Live Visitor Counter */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for Full-Stack & AI Projects</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono backdrop-blur-md">
                <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>{visitorCount ? visitorCount.toLocaleString() : '1,248'} Views</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hey, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Shivam Yadav
              </span>
            </h1>

            {/* Typewriter Subtitle Box */}
            <div className="h-9 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-mono text-cyan-300 font-bold border-r-2 border-cyan-400 pr-1 animate-pulse">
                {displayedText}
              </span>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Full Stack Developer at <strong className="text-cyan-400 font-semibold">DigiCoders Technologies Pvt. Ltd.</strong> specializing in the <strong className="text-purple-400 font-semibold">MERN stack</strong>, Python, and PHP. Crafting high-performance digital products with 30+ client projects delivered.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button onClick={onToggleAi} className="btn-secondary group">
                <Bot className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Chat with ShivAI</span>
              </button>

              <a 
                href="/Shivam_Yadav_Resume.pdf" 
                download="Shivam_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/30 hover:border-emerald-400 text-xs font-bold transition-all shadow-md hover:shadow-emerald-500/20"
                title="Download Shivam's CV"
              >
                <Download className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>Download CV</span>
              </a>

              <a 
                href="#contact" 
                className="px-5 py-3 rounded-full text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400 text-xs font-semibold transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Tech Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {['#React.js', '#Node.js', '#MongoDB', '#Python', '#PHP', '#Express'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-slate-400">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Showcase (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900">
                <img 
                  src="/images/shiv intro.jpg" 
                  alt="Shivam Yadav" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Highlight Chips directly beneath photo */}
            <div className="mt-6 flex items-center gap-3">
              <div className="glass-card px-4 py-2 flex items-center gap-2.5 border-cyan-500/30">
                <Code className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-sm font-bold text-white leading-none">2+ Years</div>
                  <div className="text-[10px] text-slate-400 font-mono">MERN Stack</div>
                </div>
              </div>

              <div className="glass-card px-4 py-2 flex items-center gap-2.5 border-purple-500/30">
                <Terminal className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-sm font-bold text-white leading-none">45+ Apps</div>
                  <div className="text-[10px] text-slate-400 font-mono">Delivered</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Grid Bar Below Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 text-center border-white/10 hover:border-cyan-500/40">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
