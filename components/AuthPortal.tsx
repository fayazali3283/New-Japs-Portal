
import React, { useState, useEffect } from 'react';
import { AppRole, User } from '../types';

interface AuthPortalProps {
  onLogin: (user: User) => void;
  onBack: () => void;
}

const AuthPortal: React.FC<AuthPortalProps> = ({ onLogin, onBack }) => {
  const [mode, setMode] = useState<'STUDENT_LOGIN' | 'STUDENT_REG' | 'STAFF_LOGIN'>('STUDENT_LOGIN');
  const [selectedRole, setSelectedRole] = useState<AppRole>(AppRole.PRINCIPAL);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    grade: '',
    roll: ''
  });

  // Default to Principal when switching to Staff mode as it's the top of the requested list
  useEffect(() => {
    if (mode === 'STAFF_LOGIN') {
      setSelectedRole(AppRole.PRINCIPAL);
    }
  }, [mode]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const finalRole = mode === 'STAFF_LOGIN' ? selectedRole : AppRole.STUDENT;
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: mode === 'STUDENT_REG' ? formData.name || 'New Student' : `JAPS ${finalRole.toLowerCase().replace('_', ' ')}`,
      role: finalRole,
      email: formData.email || 'user@japs.edu',
    };
    onLogin(user);
  };

  const tabs = [
    { id: 'STUDENT_LOGIN', label: 'Student' },
    { id: 'STUDENT_REG', label: 'Join' },
    { id: 'STAFF_LOGIN', label: 'Management' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07090e] p-2 md:p-6 font-sans animate-in fade-in zoom-in-95 duration-700">
      <div className="bg-[#11141b] rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row border border-white/10 relative transition-transform duration-500 hover:scale-[1.005]">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        {/* Branding Side */}
        <div className="hidden lg:flex lg:w-[40%] bg-[#1E3A8A] p-12 text-white flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 animate-in slide-in-from-left duration-700 delay-100">
            <button onClick={onBack} className="mb-12 flex items-center text-blue-300 font-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-all group outline-none">
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Institutional Landing
            </button>
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Institutional <br /><span className="text-blue-400">Security</span> <br />Node</h2>
            <p className="text-blue-100/60 text-sm font-medium leading-relaxed max-w-xs">
              MERN-integrated architecture ensuring encrypted data transmission between the institutional node and cloud servers.
            </p>
          </div>
          
          <div className="relative z-10 animate-in slide-in-from-bottom duration-700 delay-300">
            <div className="bg-black/20 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/10">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Network Operational</span>
               </div>
               <p className="text-xs text-blue-200">Encryption Level: 256-bit AES</p>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-[60%] p-8 md:p-16 lg:p-24 bg-[#11141b] flex flex-col justify-center text-slate-300 h-full animate-in slide-in-from-right duration-700 delay-200">
          <button onClick={onBack} className="lg:hidden mb-10 flex items-center text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] outline-none active:scale-95 transition-transform">
            ← Return
          </button>

          <div className="max-w-md mx-auto w-full">
            {/* Tab Selection */}
            <div className="flex bg-black/40 p-1.5 rounded-2xl md:rounded-[2rem] mb-12 border border-white/5 shadow-inner">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id as any)}
                  className={`flex-1 py-3.5 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl md:rounded-[1.5rem] transition-all duration-300 outline-none ${
                    mode === tab.id ? 'bg-blue-600 text-white shadow-xl scale-[1.02]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mb-10 text-center lg:text-left">
               <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3 leading-none uppercase animate-fade-in-up">
                {mode === 'STAFF_LOGIN' ? 'Executive' : mode === 'STUDENT_REG' ? 'Enroll' : 'Access'}
               </h3>
               <p className="text-slate-500 font-medium tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Institutional identity required for portal entry.</p>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              {/* Management Selection Smooth Expand */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mode === 'STAFF_LOGIN' ? 'max-h-[500px] opacity-100 mb-8 scale-100' : 'max-h-0 opacity-0 mb-0 scale-95'
                }`}
              >
                <div className="grid grid-cols-2 gap-3 p-4 bg-black/20 rounded-3xl border border-white/5 shadow-inner">
                  <p className="col-span-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1 ml-2">Select Hierarchy Level</p>
                  {[
                    { role: AppRole.PRINCIPAL, label: 'Principal' },
                    { role: AppRole.ADMIN, label: 'Admin' },
                    { role: AppRole.SECTIONAL_HEAD, label: 'Sectional Head' },
                    { role: AppRole.SECTION_HEAD, label: 'Unit Head' },
                    { role: AppRole.TEACHER, label: 'Faculty' }
                  ].map((role) => (
                    <button
                      key={role.role}
                      type="button"
                      onClick={() => setSelectedRole(role.role)}
                      className={`py-3.5 px-3 text-[9px] md:text-[10px] font-black uppercase rounded-2xl border transition-all duration-300 outline-none ${
                        selectedRole === role.role 
                          ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                          : 'bg-transparent border-white/5 text-slate-600 hover:border-white/10 hover:text-slate-400'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Join Smooth Expand */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mode === 'STUDENT_REG' ? 'max-h-[100px] opacity-100 mb-4 scale-100' : 'max-h-0 opacity-0 mb-0 scale-95'
                }`}
              >
                <div className="relative">
                  <input 
                    type="text" 
                    required={mode === 'STUDENT_REG'}
                    placeholder="Full Legal Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl md:rounded-[1.75rem] text-sm text-white focus:border-blue-500 focus:bg-white/[0.08] outline-none transition-all placeholder-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-4 animate-in slide-in-from-bottom duration-700 delay-300">
                <input 
                  type="email" 
                  required
                  placeholder="Username / Institution Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl md:rounded-[1.75rem] text-sm text-white focus:border-blue-500 focus:bg-white/[0.08] outline-none transition-all placeholder-slate-700"
                />
                <input 
                  type="password" 
                  required
                  placeholder="Security Credential"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl md:rounded-[1.75rem] text-sm text-white focus:border-blue-500 focus:bg-white/[0.08] outline-none transition-all placeholder-slate-700"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-6 rounded-2xl md:rounded-[2rem] font-black text-[11px] md:text-xs uppercase tracking-[0.4em] shadow-2xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-8 outline-none"
              >
                {mode === 'STUDENT_REG' ? 'Request Admission' : 'Authorize Entrance'}
              </button>
            </form>

            <div className="mt-16 pt-10 border-t border-white/5 text-center opacity-60 animate-in fade-in duration-1000 delay-500">
               <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.4em] mb-6">RESTRICTED JAPS NETWORK NODE</p>
               <div className="flex flex-wrap justify-center gap-6">
                  <a href="#" className="text-[10px] font-black text-slate-600 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-blue-500">Legal Core</a>
                  <a href="#" className="text-[10px] font-black text-slate-600 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-blue-500">Support Terminal</a>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default AuthPortal;
