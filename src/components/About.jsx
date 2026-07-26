import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, UserCheck, Shield, Clock, MessageSquare, Cpu } from 'lucide-react';
import { personalData, experiences } from '../data/portfolioData';

const About = () => {
  const softSkills = [
    { title: "Software Developer", icon: Cpu, desc: "Building full-stack web applications" },
    { title: "Time Management", icon: Clock, desc: "Delivering client projects on deadline" },
    { title: "Web developer", icon: Shield, desc: "Implementing safe auth & data practices" },
    { title: "Problem Solver", icon: UserCheck, desc: "Analytical mindset for complex code" },
    { title: "Strong Communication", icon: MessageSquare, desc: "Effective client & team collaboration" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="section-title">
          <h2>About Me</h2>
          <p>My technical journey, career milestones, and core expertise</p>
          <div className="title-line"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 border border-white/10 space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </span>
                <span>Passionate Full Stack Developer</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                Hello! <strong className="text-cyan-400">I'm Shivam Yadav</strong>, a Full Stack Developer specializing in crafting dynamic, scalable web applications with the <strong className="text-purple-400">MERN stack (MongoDB, Express, React, Node.js)</strong>, 
              </p>

              <p className="text-slate-300 leading-relaxed">
                My career kicked off with hands-on technical training:
              </p>

              <ul className="space-y-3 pl-2">
                {/* <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  <span>
                    <strong>45-Day UI Training</strong> at Kamadgiri Software Solutions Chitrakoot — awarded the <span className="text-amber-400 font-semibold">"Star Performance Award"</span>.
                  </span>
                </li> */}
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  <span>
                    <strong>2-Month Summer Training in Python</strong> at Techpile Technology Lucknow  — awarded the <span className="text-amber-400 font-semibold">"Best Performance Award"</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  <span>
                    <strong>Full-Time Full Stack Developer</strong> at DigiCoders Technologies Pvt. Ltd. Lucknow — successfully built and deployed <span className="text-cyan-300 font-bold">15+ frontend</span> and <span className="text-purple-300 font-bold">5+ full-stack projects</span>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Awards & Achievements Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalData.awards.map((award, index) => (
                <div key={index} className="glass-card p-5 border border-amber-500/30 bg-amber-500/5 hover:border-amber-500 transition-all">
                  <div className="flex items-center gap-3 mb-2 text-amber-400">
                    <Award className="w-6 h-6 shrink-0" />
                    <h4 className="font-bold text-lg text-white">{award.title}</h4>
                  </div>
                  <div className="text-xs text-amber-300 font-medium">{award.issuer}</div>
                  <p className="text-xs text-slate-300 mt-2">{award.detail}</p>
                </div>
              ))}
            </div>

            {/* Core Capabilities */}
            <div className="glass-card p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Core Professional Qualities</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center">
                      <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Work Experience Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <span>Experience & Timeline</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/50" />
                  
                  <div className="glass-card p-6 border border-white/10 group-hover:border-cyan-500/40 transition-all">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2">{exp.role}</h4>
                    <p className="text-xs text-purple-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{exp.description}</p>
                    
                    <ul className="mt-3 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
