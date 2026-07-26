import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { Layers, Code2, Database, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="section-title">
          <h2>My Technical Skills</h2>
          <p>Core programming languages, frameworks, databases, and developer tools</p>
          <div className="title-line"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-slate-900/80 text-slate-400 border border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header of Skill Card */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
