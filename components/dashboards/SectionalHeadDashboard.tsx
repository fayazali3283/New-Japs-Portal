
import React from 'react';
import { User } from '../../types';

interface SectionalHeadDashboardProps {
  user: User;
}

const SectionalHeadDashboard: React.FC<SectionalHeadDashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white border-l-4 border-[#1E3A8A] p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-slate-800">High School Block Leadership Hub</h1>
        <p className="text-slate-500">Overseeing Grade 9 to Grade 12. Strategic coordination and faculty block management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Grade 9', teachers: 8, performance: '84%', color: 'border-blue-200' },
          { label: 'Grade 10', teachers: 9, performance: '79%', color: 'border-green-200' },
          { label: 'Grade 11', teachers: 12, performance: '88%', color: 'border-purple-200' },
          { label: 'Grade 12', teachers: 12, performance: '91%', color: 'border-orange-200' },
        ].map((block, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border-2 ${block.color}`}>
            <h3 className="text-lg font-bold text-slate-800">{block.label} Unit</h3>
            <p className="text-xs text-slate-400 mt-1">{block.teachers} Teachers assigned</p>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Block Score</span>
                <span className="text-2xl font-black text-slate-800">{block.performance}</span>
              </div>
              <button className="text-xs font-bold text-blue-600 hover:underline">Coordination File</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 text-lg">Cross-Section Resource Coordination</h3>
          <button className="text-xs bg-slate-100 px-4 py-2 rounded-lg font-bold hover:bg-slate-200">Requisition History</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Requisitions</h4>
            {[
              { item: 'Chemistry Lab Chemicals', dept: 'Science Block', priority: 'High' },
              { item: 'Smart TV for Grade 11', dept: 'Secondary Block', priority: 'Medium' },
            ].map((req, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-800">{req.item}</p>
                  <p className="text-xs text-slate-500">{req.dept}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${req.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                  {req.priority}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Block Policy Alert</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Reminder to all Sectional Heads: The mid-term performance reviews for high-school faculty must be finalized by the end of this week. Coordination meetings are scheduled for Wednesday.
            </p>
            <button className="mt-4 w-full bg-white border border-slate-200 text-xs font-bold py-2.5 rounded-lg hover:shadow-sm">Acknowledge Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionalHeadDashboard;
