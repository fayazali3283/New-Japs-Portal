
import React from 'react';

interface JapsLoaderProps {
  isExiting?: boolean;
}

const JapsLoader: React.FC<JapsLoaderProps> = ({ isExiting = false }) => {
  return (
    <div className={`fixed inset-0 bg-[#07090e] flex flex-col items-center justify-center z-[100] transition-all duration-700 ease-in-out overflow-hidden ${isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative flex items-center space-x-4 mb-12">
        {['J', 'A', 'P', 'S'].map((char, index) => (
          <div 
            key={index}
            className="relative"
          >
            <div 
              className="w-20 h-24 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl opacity-0"
              style={{ 
                animation: `letter-reveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${index * 0.15}s` 
              }}
            >
              <span className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                {char}
              </span>
            </div>
            {/* Sequential underline glow */}
            <div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full opacity-0 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              style={{ 
                animation: `glow-line 2s infinite ease-in-out ${index * 0.2 + 0.8}s` 
              }}
            ></div>
          </div>
        ))}
      </div>
      
      <div className="text-center space-y-6 relative z-10">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] animate-pulse">
            Establishing Secure Connection
          </span>
        </div>
        
        <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full animate-scan"></div>
        </div>
      </div>

      <style>{`
        @keyframes letter-reveal {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.8) rotateX(-45deg); 
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0); 
            filter: blur(0);
          }
        }
        @keyframes glow-line {
          0%, 100% { opacity: 0; transform: translateX(-50%) scaleX(0.5); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1.5); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default JapsLoader;