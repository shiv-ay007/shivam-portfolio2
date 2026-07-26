import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, X, MessageSquare, Zap, CheckCircle2 } from 'lucide-react';
import { aiKnowledgeBase, defaultAiPrompts, personalData } from '../data/portfolioData';

const AiAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Namaste! 👋 I am **ShivAI**, Shivam Yadav's personal AI Assistant. Ask me anything about Shivam's MERN stack experience, DigiCoders projects, skills, or contact info!`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // AI Project Recommender State
  const [userReq, setUserReq] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [isMatching, setIsMatching] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    // Only scroll chat stream when user sends a message, preventing unwanted page auto-scroll on refresh
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isTyping]);

  // Knowledge base query resolver
  const findBestResponse = (query) => {
    const qLower = query.toLowerCase();

    for (const item of aiKnowledgeBase) {
      const match = item.keywords.some(kw => qLower.includes(kw));
      if (match) return item.response;
    }

    return `Shivam Yadav is a Full Stack MERN & PHP Developer at DigiCoders Technologies Pvt. Ltd., Lucknow with 2+ years experience delivering 30+ frontend and 15+ full stack projects. For direct collaboration, feel free to email Shivam at Shivamyadav.cse01@gmail.com or call +91 7266079663!`;
  };

  const handleSendMessage = (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botReplyText = findBestResponse(textToSend);
      setMessages(prev => [...prev, { sender: 'bot', text: botReplyText }]);
      setIsTyping(false);
    }, 600);
  };

  const handleRecommendProject = (e) => {
    e.preventDefault();
    if (!userReq.trim()) return;

    setIsMatching(true);
    setAiRecommendation(null);

    setTimeout(() => {
      const textLower = userReq.toLowerCase();
      let recommendedStack = "MERN Stack (MongoDB, Express, React.js, Node.js)";
      let estimatedTime = "2 to 4 Weeks";

      if (textLower.includes('python') || textLower.includes('automation') || textLower.includes('data')) {
        recommendedStack = "Python Backend & REST APIs + React Frontend";
        estimatedTime = "1 to 3 Weeks";
      } else if (textLower.includes('php') || textLower.includes('mysql')) {
        recommendedStack = "PHP Core / Laravel + MySQL Database + Tailwind/CSS UI";
        estimatedTime = "2 Weeks";
      }

      setAiRecommendation({
        title: `Recommended Tech Solution for: "${userReq}"`,
        stack: recommendedStack,
        estimatedTime: estimatedTime,
        deliverables: [
          "Responsive React.js / Modern Glassmorphism Frontend",
          "Secure RESTful API Endpoints & Auth Architecture",
          "Database Schemas & Optimized Queries",
          "Complete Source Code & Deployment Guidance by Shivam"
        ]
      });
      setIsMatching(false);
    }, 800);
  };

  return (
    <section id="ai-section" className="py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="section-title">
          <h2>Embedded AI Assistant (ShivAI)</h2>
          <p>Powered by intelligent knowledge matching to answer your recruiter & project queries instantly</p>
          <div className="title-line"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Chat Bot */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-cyan-500/30 overflow-hidden shadow-2xl flex flex-col h-[580px]">
              
              {/* Chat Header */}
              <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <span>ShivAI Intelligence</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        ONLINE
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">Ask about Shivam's skills, DigiCoders work & projects</p>
                  </div>
                </div>

                <button
                  onClick={() => setMessages([{ sender: 'bot', text: 'Chat reset! How can I assist you today?' }])}
                  className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-colors"
                  title="Reset Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/40">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-cyan-400" />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-tr-none shadow-md'
                          : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none backdrop-blur-md'
                      }`}
                    >
                      <div className="whitespace-pre-line">{msg.text}</div>
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-purple-400" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                    <Bot className="w-4 h-4 animate-spin" />
                    <span>ShivAI is thinking...</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center gap-2 overflow-x-auto">
                <span className="text-[11px] font-mono text-slate-400 shrink-0 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-cyan-400" /> Suggestions:
                </span>
                {defaultAiPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 shrink-0 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a question for ShivAI..."
                  className="flex-1 bg-slate-950 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white disabled:opacity-40 hover:scale-105 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

          {/* Right Column: AI Smart Project Matcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 border border-purple-500/30 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Project Recommender</h3>
                  <p className="text-xs text-slate-400">Input your project idea to get optimal stack recommendation</p>
                </div>
              </div>

              <form onSubmit={handleRecommendProject} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What kind of app/software do you need?
                  </label>
                  <textarea
                    rows={3}
                    value={userReq}
                    onChange={(e) => setUserReq(e.target.value)}
                    placeholder="e.g. I need an E-commerce store with admin panel & online payment integration"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isMatching || !userReq.trim()}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {isMatching ? (
                    <>
                      <Bot className="w-4 h-4 animate-spin" />
                      <span>Analyzing Architecture...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate AI Solution Plan</span>
                    </>
                  )}
                </button>
              </form>

              {/* AI Recommendation Result */}
              {aiRecommendation && (
                <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-purple-500/40 space-y-3 animate-fade-in">
                  <h4 className="text-sm font-bold text-cyan-300">
                    {aiRecommendation.title}
                  </h4>
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      <strong>Recommended Tech:</strong> <span className="text-purple-300">{aiRecommendation.stack}</span>
                    </div>
                    <div className="text-slate-300">
                      <strong>Estimated Timeline:</strong> <span className="text-emerald-400">{aiRecommendation.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-400">Included Deliverables:</span>
                    {aiRecommendation.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="block text-center py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold text-xs hover:bg-cyan-500/30 transition-colors mt-2"
                  >
                    Discuss this solution with Shivam →
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiAssistant;
