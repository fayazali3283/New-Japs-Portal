
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
  onLogoClick?: () => void;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, onLogoClick, onMenuToggle }) => {
  return (
    <header className="bg-[#11141b] border-b border-white/5 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-2xl bg-opacity-90">
      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2.5 bg-white/5 border border-white/10 rounded-xl text-blue-400 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div 
          onClick={onLogoClick}
          className="hidden md:flex bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group shrink-0"
        >
          <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        
        <div onClick={onLogoClick} className="cursor-pointer min-w-0">
          <h2 className="text-sm md:text-base font-black text-white tracking-tight uppercase leading-none truncate">
            {user.role.replace('_', ' ')} <span className="text-slate-500 font-medium ml-1">Terminal</span>
          </h2>
          <p className="text-[8px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1 truncate">Session: Node #{Math.floor(Math.random()*9000)+1000}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 md:space-x-8">
        <div className="hidden sm:flex items-center space-x-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">MERN Sync Active</span>
        </div>

        <div className="flex items-center group cursor-pointer relative">
          <div className="hidden md:block text-right mr-4">
            <p className="text-sm font-black text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors truncate max-w-[120px]">{user.name}</p>
            <p className="text-[10px] text-slate-500 font-bold tracking-tight mt-1 uppercase truncate max-w-[120px]">{user.email}</p>
          </div>
          <div className="relative shrink-0">
            <img 
              src={user.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
              alt="User" 
              className="w-10 h-10 md:w-11 md:h-11 rounded-2xl border-2 border-white/5 object-cover shadow-2xl group-hover:border-blue-500 transition-all duration-300" 
            />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#11141b] rounded-full shadow-lg shadow-green-500/20"></div>
          </div>
          
          <button 
            onClick={onLogout}
            className="ml-3 md:ml-6 p-2 md:p-2.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all group"
            title="Terminate Session"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
