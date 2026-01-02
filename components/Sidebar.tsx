
import React from 'react';
import { AppRole } from '../types';

interface SidebarProps {
  role: AppRole;
  onLogoClick?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onLogoClick, isOpen, onClose }) => {
  const getLinks = () => {
    switch(role) {
      case AppRole.STUDENT: return [
        { name: 'My Portal', icon: '🏠', active: true },
        { name: 'Academic Log', icon: '📚', active: false },
        { name: 'Fee Terminal', icon: '💳', active: false },
        { name: 'Resource Hub', icon: '📖', active: false },
      ];
      case AppRole.TEACHER: return [
        { name: 'Registry', icon: '👨‍🏫', active: true },
        { name: 'Mark Sheets', icon: '📝', active: false },
        { name: 'Attendance', icon: '📅', active: false },
        { name: 'Curriculum', icon: '📂', active: false },
      ];
      case AppRole.SECTION_HEAD: return [
        { name: 'Section Hub', icon: '🏢', active: true },
        { name: 'Faculty Ops', icon: '👤', active: false },
        { name: 'Authorization', icon: '✉️', active: false },
        { name: 'Data Center', icon: '📉', active: false },
      ];
      case AppRole.SECTIONAL_HEAD: return [
        { name: 'Block Management', icon: '🏗️', active: true },
        { name: 'Team Cluster', icon: '🤝', active: false },
        { name: 'Resource Map', icon: '📊', active: false },
        { name: 'Plan v2', icon: '🗓️', active: false },
      ];
      case AppRole.PRINCIPAL: return [
        { name: 'Exec Console', icon: '👔', active: true },
        { name: 'Financials', icon: '💰', active: false },
        { name: 'Audit Logs', icon: '📋', active: false },
        { name: 'Strategy', icon: '🎯', active: false },
      ];
      case AppRole.ADMIN: return [
        { name: 'Root Control', icon: '⚙️', active: true },
        { name: 'Identity Index', icon: '👥', active: false },
        { name: 'Cloud Sync', icon: '☁️', active: false },
        { name: 'Security v4', icon: '🛡️', active: false },
      ];
      default: return [];
    }
  };

  const links = getLinks();

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 w-80 bg-[#0a0c10] border-r border-white/5 
      text-slate-400 flex flex-col h-screen z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-8 md:p-10 border-b border-white/5">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-4 mb-3 group outline-none focus:outline-none w-full text-left"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-xl group-hover:scale-105 transition-transform">
              J
            </div>
          </div>
          <div className="text-left overflow-hidden">
            <h1 className="text-2xl font-black tracking-tighter leading-none text-white group-hover:text-blue-400 transition-colors truncate">
              JAPS <span className="text-blue-500 animate-pulse">Hub</span>
            </h1>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Institutional Node</p>
          </div>
        </button>
        <div className="mt-8 flex items-center bg-white/5 border border-white/5 px-4 py-2.5 rounded-2xl">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-3 shrink-0"></span>
          <p className="text-[10px] text-blue-400 uppercase tracking-widest font-black leading-none truncate">{role.replace('_', ' ')}</p>
        </div>
      </div>

      <nav className="flex-1 px-6 py-10 space-y-2 overflow-y-auto scrollbar-hide">
        <p className="px-4 text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] mb-4">Nav Terminal</p>
        {links.map((link) => (
          <a
            key={link.name}
            href="#"
            onClick={(e) => { e.preventDefault(); onClose(); }}
            className={`flex items-center px-6 py-5 text-sm font-black rounded-[1.75rem] transition-all group relative overflow-hidden ${
              link.active 
                ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30' 
                : 'text-slate-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={`mr-5 text-2xl transition-transform duration-300 group-hover:scale-110 ${link.active ? 'opacity-100' : 'opacity-40'}`}>{link.icon}</span>
            <span className="tracking-tight uppercase text-xs truncate">{link.name}</span>
            {link.active && (
              <div className="absolute top-0 right-0 h-full w-1.5 bg-white/30 rounded-full my-3 mr-3"></div>
            )}
          </a>
        ))}
      </nav>

      <div className="p-8 mt-auto">
        <div className="p-6 bg-[#11141b] rounded-[2.5rem] border border-white/5 space-y-4">
           <p className="text-[9px] text-slate-600 uppercase font-black tracking-[0.4em] mb-2 text-center">Protocol Actions</p>
           <button className="w-full text-left text-[9px] uppercase font-black tracking-widest bg-white/5 p-4 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all flex items-center border border-white/5 shadow-inner">
             <span className="mr-3 text-lg opacity-60">📢</span> Broadcast
           </button>
           <button className="w-full text-left text-[9px] uppercase font-black tracking-widest bg-red-500/10 p-4 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center border border-red-500/20">
             <span className="mr-3 text-lg opacity-80">🆘</span> Emergency
           </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
