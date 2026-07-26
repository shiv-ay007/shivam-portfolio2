import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, Eye, X, Sparkles, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web App', 'UI/UX'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/60">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="section-title">
          <h2>Featured Client Projects</h2>
          <p>Highlights of 30+ frontend and 15+ full-stack web applications delivered</p>
          <div className="title-line"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-slate-900/80 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card border border-white/10 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
                  {project.category}
                </span>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:scale-110 transition-transform"
                    title="View Project Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:text-cyan-400 hover:scale-110 transition-all border border-white/20"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup Component */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-cyan-500/40 relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeModalProject.image}
              alt={activeModalProject.title}
              className="w-full h-64 object-cover rounded-xl border border-white/10"
            />

            <div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {activeModalProject.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Key Technical Capabilities:</span>
              </h4>
              <ul className="space-y-2">
                {activeModalProject.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {activeModalProject.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-secondary"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
