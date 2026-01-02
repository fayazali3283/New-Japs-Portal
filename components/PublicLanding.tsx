
import React from 'react';

interface PublicLandingProps {
  onEnterPortal: () => void;
}

const PublicLanding: React.FC<PublicLandingProps> = ({ onEnterPortal }) => {
  const schoolFeatures = [
    { title: 'ACADEMICS', items: ['Global LMS Node', 'Performance Analytics', 'Smart Attendance'], icon: '📖' },
    { title: 'OPERATIONS', items: ['Unified Fee Desk', 'Inventory Control', 'Compliance Logs'], icon: '🏫' },
    { title: 'CHANNELS', items: ['Institutional Mail', 'Parent Broadcasts', 'Alert Sync'], icon: '📣' },
    { title: 'PROTOCOLS', items: ['RBAC Security', 'MERN Database', 'Session Audits'], icon: '🔐' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden animate-in fade-in duration-1000">
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 max-w-7xl mx-auto backdrop-blur-xl bg-white/[0.02] border-b border-white/5 sticky top-0 animate-in slide-in-from-top duration-700">
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center space-x-3 group outline-none"
        >
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">J</div>
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors">JAPS <span className="text-blue-500 font-medium tracking-normal text-base md:text-lg ml-1">Institutions</span></span>
        </button>
        <div className="flex items-center space-x-4 md:space-x-10">
          <a href="#" className="hidden sm:block text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Web Node</a>
          <button 
            onClick={onEnterPortal}
            className="bg-white text-[#0a0c10] px-5 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 hover:shadow-white/20 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Access Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="text-center lg:text-left animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.25em]">Secured Institutional Cloud</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
              Next-Gen <br />Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Hub.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
              Empowering the institutional ecosystem with integrated performance analytics, secure administrative nodes, and real-time collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={onEnterPortal}
                className="w-full sm:w-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-10 md:px-14 py-5 md:py-6 rounded-[2rem] font-black text-sm md:text-base uppercase tracking-widest shadow-[0_20px_60px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-blue-500/40 active:translate-y-0 transition-all duration-300"
              >
                Launch Portal Terminal
              </button>
              <div className="flex flex-col items-center sm:items-start opacity-60">
                <span className="text-white font-black text-lg">Verified Access</span>
                <span className="text-[9px] text-slate-600 uppercase tracking-[0.4em] font-black">Institutional Authority</span>
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000 animate-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-blue-500/20 rounded-[4rem] blur-[100px] transition-all group-hover:bg-blue-500/30"></div>
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-14 rounded-[3.5rem] md:rounded-[4.5rem] shadow-2xl transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-[1.02]">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-10 border-b border-white/10 pb-6 uppercase tracking-tight">Institutional Core</h3>
              <div className="space-y-8 mb-12">
                {[
                  'Advanced Academic Analytics',
                  'Faculty Performance Metrics',
                  'Executive Financial Command',
                  'Cross-Section Compliance Hub'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center space-x-5 text-blue-400 font-bold group/item">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-[10px] transition-colors group-hover/item:bg-blue-500/20">✓</span>
                    <span className="text-base md:text-lg tracking-tight transition-transform group-hover/item:translate-x-1 duration-300">{text}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['Registry', 'Faculty', 'Management'].map(role => (
                  <div key={role} className="bg-white/5 border border-white/10 p-4 rounded-3xl text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none group-hover:text-blue-400">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <section className="mt-40 animate-in slide-in-from-bottom duration-1000">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.6em] mb-4">System Infrastructure</h2>
            <div className="h-px w-24 bg-blue-500/30 animate-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {schoolFeatures.map((feature, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 hover:border-blue-500/40 transition-all duration-500 hover:bg-white/[0.05] group">
                <div className="text-5xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 inline-block">{feature.icon}</div>
                <h4 className="text-blue-400 font-black text-xl mb-6 tracking-widest uppercase">{feature.title}</h4>
                <ul className="space-y-4">
                  {feature.items.map((item, j) => (
                    <li key={j} className="text-slate-500 font-bold flex items-center text-sm md:text-base group-hover:text-slate-300 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-blue-600/60 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-white/5 text-center relative z-10 bg-black/20">
        <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] mb-4">Institutional Node • Securely Protected by JAPS Security</p>
        <div className="flex justify-center space-x-10 text-[9px] font-black text-slate-600 uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors duration-300">Privacy Protocol</a>
           <a href="#" className="hover:text-white transition-colors duration-300">Terms of Node</a>
        </div>
      </footer>
      <style>{`
        @keyframes grow {
          from { width: 0; }
          to { width: 96px; }
        }
        .animate-grow {
          animation: grow 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PublicLanding;
