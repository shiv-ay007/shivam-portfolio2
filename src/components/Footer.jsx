import React from 'react';
import { ArrowUp, Heart, Bot, Eye } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Footer = ({ onToggleAi, visitorCount }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 relative">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/shivam-logo.png" 
              alt="Shivam Yadav" 
              className="h-9 w-9 rounded-full object-cover border border-cyan-500/40"
            />
            <div>
              <span className="font-extrabold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SHIVAM YADAV
              </span>
              <p className="text-xs text-slate-400">Full Stack MERN & AI Developer</p>
            </div>
          </div>

          {/* Center Copyright & Visitor Count */}
          <div className="text-center text-xs text-slate-400 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] mb-1">
              <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Total Visitors: <strong>{visitorCount ? visitorCount.toLocaleString() : '1,248'}</strong></span>
            </div>
            <p>© 2026 Shivam Yadav. All Rights Reserved.</p>
            <p className="flex items-center justify-center gap-1">
              Crafted with React.js & <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for DigiCoders Technologies
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleAi}
              className="px-3.5 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-all flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Ask ShivAI</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
