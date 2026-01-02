
import React, { useState, useEffect } from 'react';
import { ApprovalItem } from '../types';

const PrincipalDashboard: React.FC = () => {
  const [items, setItems] = useState<ApprovalItem[]>(() => {
    const saved = localStorage.getItem('japs_approvals');
    return saved ? JSON.parse(saved) : [
      { id: '1', type: 'SLC_REQUEST', requester: 'Rahul Sharma (Grade 10-A)', detail: 'Relocation to Mumbai. Dues cleared.', date: 'Oct 24, 2023', status: 'PENDING' },
      { id: '2', type: 'STAFF_RESIGNATION', requester: 'Ms. Anita Singh', detail: 'Notice period started.', date: 'Oct 22, 2023', status: 'PENDING' }
    ];
  });

  const [mailContent, setMailContent] = useState('');
  const [mailTo, setMailTo] = useState('');
  const [comment, setComment] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('japs_approvals', JSON.stringify(items));
  }, [items]);

  const handleAction = async (id: string, action: 'APPROVED' | 'REJECTED') => {
    if (!comment.trim()) {
      alert("Executive comment is mandatory for MERN audit logs.");
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setItems(prev => prev.map(item => item.id === id ? { ...item, status: action } : item));
    setComment('');
    setSelectedId(null);
    setLoading(false);
  };

  const sendInternalMail = (e: React.FormEvent) => {
    e.preventDefault();
    if(!mailTo || !mailContent) return;
    setLoading(true);
    setTimeout(() => {
       alert(`Secured Node: Message dispatched to ${mailTo} via Encrypted Channel.`);
       setMailTo('');
       setMailContent('');
       setLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-20">
      {/* Principal Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-5xl font-black text-white tracking-tighter mb-2">Executive Console</h1>
          <p className="text-slate-500 font-medium text-lg">Institutional monitoring, financial health, and command hierarchy.</p>
        </div>
        <div className="flex items-center space-x-6">
           <div className="text-right">
              <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest">Global Status</span>
              <span className="text-2xl font-black text-white tracking-tight">Node: Active</span>
           </div>
           <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 animate-pulse border border-blue-500/20">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
           </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Students', value: '1,420', trend: '↑ 2%', color: 'text-blue-400' },
              { label: 'Faculty', value: '112', trend: 'Sync', color: 'text-indigo-400' },
              { label: 'Revenue', value: '$420k', trend: '92%', color: 'text-emerald-400' },
              { label: 'Incidents', value: '0', trend: 'Secure', color: 'text-slate-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#11141b] p-6 rounded-[2rem] border border-white/5 hover:border-blue-500/30 hover:bg-[#161a22] transition-all group">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h4 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h4>
                  <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Approvals Unit */}
          <section className="bg-[#11141b] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
             <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Authority Queue</h3>
                <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest shadow-lg shadow-blue-600/20">
                  {items.filter(i => i.status === 'PENDING').length} PENDING ACTIONS
                </span>
             </div>
             
             <div className="divide-y divide-white/5">
                {items.filter(i => i.status === 'PENDING').map((item) => (
                  <div key={item.id} className="p-10 hover:bg-white/[0.01] transition-all">
                    <div className="flex flex-col space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                           <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-500/20">{item.type}</span>
                           <h4 className="text-2xl font-black text-white tracking-tight leading-none mb-3">{item.requester}</h4>
                           <p className="text-slate-400 font-medium leading-relaxed">{item.detail}</p>
                        </div>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{item.date}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <textarea 
                          placeholder="Audit comment required..."
                          value={selectedId === item.id ? comment : ''}
                          onChange={(e) => { setSelectedId(item.id); setComment(e.target.value); }}
                          className="w-full h-24 p-6 bg-black/20 border border-white/5 rounded-[2rem] text-sm text-white outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all resize-none placeholder-slate-700"
                        />
                        <div className="flex space-x-4">
                           <button 
                            onClick={() => handleAction(item.id, 'APPROVED')}
                            disabled={loading}
                            className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-900/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                           >
                            {loading && selectedId === item.id ? 'Syncing...' : 'Authorize Request'}
                           </button>
                           <button 
                            onClick={() => handleAction(item.id, 'REJECTED')}
                            className="flex-1 bg-white/5 border border-white/10 text-slate-300 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                           >
                            Dismiss
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {items.filter(i => i.status === 'PENDING').length === 0 && (
                  <div className="p-24 text-center">
                    <div className="text-5xl mb-6">✅</div>
                    <p className="text-slate-500 font-black uppercase tracking-[0.5em]">Executive Queue Cleared</p>
                  </div>
                )}
             </div>
          </section>
        </div>

        <div className="space-y-10">
          {/* Secure Mailer */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
             <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-xl">📨</div>
                  <h3 className="text-xl font-black uppercase tracking-widest">Secured Core</h3>
                </div>
                <form onSubmit={sendInternalMail} className="space-y-4">
                   <input 
                    type="text" 
                    placeholder="Auth Identity Code" 
                    value={mailTo}
                    onChange={(e) => setMailTo(e.target.value)}
                    className="w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-sm placeholder-blue-200 outline-none focus:bg-white/20 transition-all"
                   />
                   <textarea 
                    placeholder="Encrypted Payload..."
                    value={mailContent}
                    onChange={(e) => setMailContent(e.target.value)}
                    className="w-full h-40 p-5 bg-white/10 border border-white/20 rounded-2xl text-sm placeholder-blue-200 outline-none focus:bg-white/20 transition-all resize-none"
                   />
                   <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-blue-900 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50"
                   >
                    {loading ? 'Transmitting...' : 'Execute Dispatch'}
                   </button>
                </form>
             </div>
             <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
          </section>

          {/* Financial Tracking */}
          <section className="bg-[#11141b] p-10 rounded-[3rem] border border-white/5 shadow-2xl">
             <h3 className="text-sm font-black text-slate-500 mb-10 uppercase tracking-[0.3em]">Fiscal Telemetry</h3>
             <div className="space-y-10">
                {[
                  { label: 'Fee Pipeline', val: '88%', color: 'bg-emerald-500' },
                  { label: 'Operating Cost', val: '64%', color: 'bg-blue-500' },
                  { label: 'Reserve Fund', val: '22%', color: 'bg-orange-500' },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-3">
                       <span className="text-slate-500 tracking-widest">{bar.label}</span>
                       <span className="text-white">{bar.val}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <div className={`h-full ${bar.color} transition-all duration-1000 shadow-[0_0_15px_rgba(0,0,0,0.5)]`} style={{ width: bar.val }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
