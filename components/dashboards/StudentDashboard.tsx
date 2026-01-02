
import React, { useState } from 'react';

const StudentDashboard: React.FC = () => {
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [leaveData, setLeaveData] = useState({ reason: '', dates: '' });

  const submitLeave = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Leave request for "${leaveData.reason}" submitted to JAPS Central Registry.`);
    setShowLeaveForm(false);
    setLeaveData({ reason: '', dates: '' });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-20">
      {/* Hero Welcome */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#11141b] p-16 rounded-[4rem] border border-white/5 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/20 rounded-full text-[9px] font-black text-blue-400 uppercase tracking-widest mb-8">
              Verified Academic Profile
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Excel Beyond <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Boundaries.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-medium text-lg leading-relaxed max-w-lg">
              Your academic trajectory has increased by <span className="text-blue-400 font-black">12.4%</span> since the previous term. Maintain this momentum.
            </p>
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <button className="bg-white text-[#0a0c10] px-12 py-5 rounded-[2rem] font-black text-sm hover:scale-105 transition-all shadow-2xl shadow-white/10">Download Report Q3</button>
              <button 
                onClick={() => setShowLeaveForm(true)}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-5 rounded-[2rem] font-black text-sm hover:bg-white/10 transition-all"
              >
                Apply for Leave
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 h-64 bg-black/40 rounded-[4rem] border border-white/5 flex flex-col items-center justify-center p-10 text-center shadow-inner group">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors">Cumulative GPA</p>
            <p className="text-7xl font-black text-white mt-4 tracking-tighter shadow-blue-500">3.92</p>
            <div className="w-full h-2 bg-white/5 rounded-full mt-10 overflow-hidden">
              <div className="w-[92%] h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
            </div>
          </div>
        </div>
        
        {/* Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-[#11141b] p-12 rounded-[4rem] border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center">
                <span className="w-3 h-10 bg-blue-600 rounded-full mr-6"></span>
                Registry Tasks
              </h3>
              <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full uppercase tracking-widest">3 Active</span>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Biology Lab (Microscopy)', due: 'Oct 30', subject: 'Life Sciences', tag: 'High', status: 'Pending' },
                { title: 'Algebra Equations Set 4', due: 'Nov 2', subject: 'Mathematics', tag: 'Normal', status: 'Submitted' },
                { title: 'French Oral Presentation', due: 'Nov 5', subject: 'Languages', tag: 'High', status: 'Pending' },
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-8 bg-black/20 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 hover:bg-black/30 transition-all cursor-pointer">
                  <div className="flex items-center space-x-8">
                    <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                      {item.status === 'Submitted' ? '💠' : '📑'}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-2xl tracking-tight leading-none mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{item.subject} • Due {item.due}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-2xl ${
                      item.tag === 'High' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-slate-500/10 text-slate-400 border border-white/5'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-[#1E3A8A] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
               <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Direct Support</h3>
               <p className="text-blue-100/60 text-sm mb-12 font-medium leading-relaxed">Encrypted channel for faculty consultation and technical assistance.</p>
               <button className="w-full bg-white text-blue-900 py-5 rounded-[2rem] font-black text-sm shadow-2xl group-hover:scale-[1.02] transition-all">Launch Chat Terminal</button>
            </div>
            <div className="absolute top-[-10%] left-[-10%] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-[#11141b] p-12 rounded-[4rem] border border-white/5 shadow-2xl">
             <h3 className="text-sm font-black text-slate-500 mb-10 uppercase tracking-[0.3em]">Institutional Presence</h3>
             <div className="flex items-end justify-between mb-6">
               <span className="text-5xl font-black text-white tracking-tighter">96.4%</span>
               <span className="text-[10px] font-black text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full uppercase border border-blue-500/20">Elite Node</span>
             </div>
             <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[96.4%] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
             </div>
          </div>
        </div>
      </div>

      {showLeaveForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4">
          <div className="bg-[#11141b] rounded-[3.5rem] w-full max-w-lg shadow-[0_32px_120px_rgba(0,0,0,0.8)] animate-in zoom-in duration-500 overflow-hidden border border-white/10">
            <div className="p-12 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Absence Request</h3>
              <button onClick={() => setShowLeaveForm(false)} className="text-4xl font-light text-slate-500 hover:text-white transition-colors">&times;</button>
            </div>
            <form onSubmit={submitLeave} className="p-12 space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Target Date Range</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Nov 12 - Nov 14" 
                    required
                    value={leaveData.dates}
                    onChange={(e) => setLeaveData({...leaveData, dates: e.target.value})}
                    className="w-full p-6 bg-black/20 border border-white/5 rounded-3xl text-sm text-white outline-none focus:border-blue-500/50 transition-all placeholder-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Substantiation</label>
                  <textarea 
                    required
                    placeholder="Briefly state your reason for absence..."
                    value={leaveData.reason}
                    onChange={(e) => setLeaveData({...leaveData, reason: e.target.value})}
                    className="w-full h-40 p-6 bg-black/20 border border-white/5 rounded-3xl text-sm text-white outline-none focus:border-blue-500/50 transition-all resize-none placeholder-slate-800"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                Transmit to Faculty
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
