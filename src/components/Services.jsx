import React from 'react';
import { services } from '../data/portfolioData';
import { Code2, Server, Layout, Bot, CheckCircle } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Server: Server,
  Layout: Layout,
  Bot: Bot
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="section-title">
          <h2>My Services</h2>
          <p>End-to-end digital solutions, full-stack architecture, and custom AI integration</p>
          <div className="title-line"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="glass-card p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent Corner Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-500/60 transition-colors">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullet points */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
