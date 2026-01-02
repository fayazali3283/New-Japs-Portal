
import React, { useState } from 'react';
import { User, AppRole } from '../../types';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const [showRegModal, setShowRegModal] = useState(false);
  const [newFaculty, setNewFaculty] = useState({ name: '', role: AppRole.TEACHER, dept: '' });
  const [loading, setLoading] = useState(false);

  const registerFaculty = async () => {
    if(!newFaculty.name || !newFaculty.dept) {
      alert("Missing required data for MERN user creation.");
      return;
    }
    setLoading(true);
    // Simulate Server Action
    await new Promise(r => setTimeout(r, 1200));
    alert(`Authorized Registration: User identity ${newFaculty.name} initialized. Encrypted credentials provisioned.`);
    setShowRegModal(false);
    setNewFaculty({ name: '', role: AppRole.TEACHER, dept: '' });
    setLoading(false);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-slate-200 pb-10 gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">System Kernel</h1>
          <p className="text-slate-500 font-medium text-lg">Root management of institutional data, users, and security logs.</p>
        </div>
        <button 
          onClick={() => setShowRegModal(true)}
          className="bg-[#1E3A8A] text-white px-10 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-900/20 hover:-translate-y-1 transition-all"
        >
          Provision Faculty
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* User Statistics */}
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Node Health</h3>
            <div className="space-y-5">
              {[
                { label: 'Active Sessions', val: '42', color: 'text-green-600' },
                { label: 'Database Calls', val: '1.2k', color: 'text-blue-600' },
                { label: 'Storage Used', val: '12%', color: 'text-purple-600' },
                { label: 'Failed Logins', val: '0', color: 'text-slate-400' },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                  <span className={`text-lg font-black ${s.color}`}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0c10] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="relative z-10">
               <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Manual Backup</h3>
               <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">Force a synchronization between the cloud MERN hub and the local institutional server.</p>
               <button className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all">Execute Sync</button>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Real-time Logs */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-sm border border-slate-100 p-10">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">Kernel Access Logs</h3>
            <div className="flex space-x-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Streaming</span>
            </div>
          </div>
          
          <div className="space-y-2">
            {[
              { user: 'Principal Node', action: 'Approved Leave Request #99', time: 'Just now', type: 'AUTH' },
              { user: 'Teacher (Grade 10)', action: 'Batch marks entry committed', time: '8m ago', type: 'DATA' },
              { user: 'Admin Console', action: 'System scrub successful', time: '1h ago', type: 'SYS' },
              { user: 'New Student', action: 'Auth creation successful', time: '3h ago', type: 'AUTH' },
              { user: 'Unknown IP', action: 'Blocked login attempt', time: '5h ago', type: 'WARN' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-5 hover:bg-slate-50 rounded-[1.5rem] transition-all group">
                <div className="flex items-center space-x-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[10px] ${
                    log.type === 'AUTH' ? 'bg-blue-100 text-blue-600' : 
                    log.type === 'WARN' ? 'bg-red-100 text-red-600' :
                    log.type === 'DATA' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {log.type}
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-800">{log.user}</p>
                    <p className="text-xs text-slate-400 font-medium tracking-tight uppercase">{log.action}</p>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-300 group-hover:text-slate-500">{log.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showRegModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-[3rem] w-full max-w-lg shadow-[0_32px_120px_rgba(0,0,0,0.5)] animate-in zoom-in duration-300 overflow-hidden border border-slate-100">
            <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">User Provisioning</h3>
              <button onClick={() => setShowRegModal(false)} className="text-4xl font-light text-slate-400 hover:text-slate-800 transition-colors">&times;</button>
            </div>
            <div className="p-10 space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Institutional Role</label>
                  <select 
                    value={newFaculty.role}
                    onChange={(e) => setNewFaculty({...newFaculty, role: e.target.value as AppRole})}
                    className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none"
                  >
                    <option value={AppRole.PRINCIPAL}>Principal</option>
                    <option value={AppRole.ADMIN}>Admin</option>
                    <option value={AppRole.SECTIONAL_HEAD}>Sectional Head</option>
                    <option value={AppRole.SECTION_HEAD}>Unit Head</option>
                    <option value={AppRole.TEACHER}>Faculty</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Legal Full Name"
                    value={newFaculty.name}
                    onChange={(e) => setNewFaculty({...newFaculty, name: e.target.value})} 
                    className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" 
                  />
                  <input 
                    type="text" 
                    placeholder="Department / Block Index"
                    value={newFaculty.dept}
                    onChange={(e) => setNewFaculty({...newFaculty, dept: e.target.value})} 
                    className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" 
                  />
                </div>
              </div>
              <button 
                onClick={registerFaculty}
                disabled={loading}
                className="w-full bg-[#1E3A8A] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? 'Committing to Cloud...' : 'Commit to Database'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
