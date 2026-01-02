
import React from 'react';
import { User } from '../../types';

interface SectionHeadDashboardProps {
  user: User;
}

const SectionHeadDashboard: React.FC<SectionHeadDashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800">Middle School Section Console</h2>
            <p className="text-slate-500">Monitoring 12 Faculty members and 320 Students.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Section Avg</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">82.4%</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Attendance</p>
                <p className="text-2xl font-bold text-green-600 mt-1">96.1%</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Flagged Activities</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
              Faculty Compliance Matrix
            </h3>
            <table className="w-full text-sm">
              <thead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-slate-50">
                <tr>
                  <th className="text-left pb-3">Name</th>
                  <th className="text-left pb-3">Attendance Taken</th>
                  <th className="text-left pb-3">Marks Uploaded</th>
                  <th className="text-right pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Dr. Emily Blunt', att: '100%', marks: '8/8', status: 'Compliant' },
                  { name: 'Mr. James Bond', att: '100%', marks: '4/8', status: 'Incomplete' },
                  { name: 'Ms. Lara Croft', att: '85%', marks: '8/8', status: 'Attention' },
                ].map((fac, i) => (
                  <tr key={i}>
                    <td className="py-4 font-bold text-slate-700">{fac.name}</td>
                    <td className="py-4 text-slate-500">{fac.att}</td>
                    <td className="py-4 text-slate-500">{fac.marks}</td>
                    <td className="py-4 text-right">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                        fac.status === 'Compliant' ? 'bg-green-50 text-green-600' : 
                        fac.status === 'Incomplete' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {fac.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1E3A8A] p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold mb-4">Sectional Leave Requests</h3>
            <div className="space-y-4">
              {[
                { name: 'John Doe', reason: 'Medical', date: 'Oct 28' },
                { name: 'Sam Smith', reason: 'Family Event', date: 'Oct 29' },
              ].map((req, i) => (
                <div key={i} className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold">{req.name}</p>
                    <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded">{req.date}</span>
                  </div>
                  <p className="text-xs text-blue-100 italic">"{req.reason}"</p>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 bg-white text-[#1E3A8A] text-[10px] font-bold py-1.5 rounded hover:bg-blue-50">Grant</button>
                    <button className="flex-1 border border-white/30 text-white text-[10px] font-bold py-1.5 rounded hover:bg-white/5">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadDashboard;
