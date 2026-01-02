
import React, { useState } from 'react';
import { User } from '../../types';

interface TeacherDashboardProps {
  user: User;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ user }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aryan Khan', roll: '101', present: true },
    { id: 2, name: 'Bhavya Singh', roll: '102', present: true },
    { id: 3, name: 'Chetan Bhagat', roll: '103', present: false },
    { id: 4, name: 'Divya Dutta', roll: '104', present: true },
  ]);
  const [view, setView] = useState<'SCHEDULE' | 'ATTENDANCE'>('SCHEDULE');

  const toggleAttendance = (id: number) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  const saveAttendance = () => {
    alert("Attendance data encrypted and pushed to JAPS Core Database.");
    setView('SCHEDULE');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Focus on Learning, <br />Prof. {user.name.split(' ')[1] || user.name}</h1>
          <p className="text-slate-500 mt-2 font-medium">Session: Term 2 • Next Class in 12m (Mathematics)</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setView('ATTENDANCE')}
            className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${view === 'ATTENDANCE' ? 'bg-[#1E3A8A] text-white shadow-xl' : 'bg-slate-100 text-slate-600'}`}
          >
            Daily Attendance
          </button>
          <button className="bg-blue-50 text-blue-700 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-100 transition-all">Upload Marks</button>
        </div>
      </div>

      {view === 'SCHEDULE' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { subject: 'Advanced Algebra', class: 'Grade 10-A', time: '08:30 AM', students: 32, icon: '🧮' },
            { subject: 'Calculus Basics', class: 'Grade 11-C', time: '10:15 AM', students: 28, icon: '📐' },
            { subject: 'Linear Equations', class: 'Grade 10-B', time: '01:00 PM', students: 34, icon: '📊' },
          ].map((cls, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{cls.icon}</div>
                <span className="text-[10px] font-black px-3 py-1 bg-green-100 text-green-700 rounded-lg uppercase tracking-[0.2em]">Active Class</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-1">{cls.subject}</h3>
              <p className="text-slate-400 font-bold text-sm uppercase tracking-wider">{cls.class} • {cls.time}</p>
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                <p className="text-xs font-black text-slate-700">{cls.students} Enrolled</p>
                <button className="text-xs font-black text-blue-600 uppercase hover:underline">Start Lesson →</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-10 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Grade 10-A Attendance Ledger</h3>
            <button onClick={() => setView('SCHEDULE')} className="text-xs font-black text-slate-400 hover:text-slate-800">Close Ledger</button>
          </div>
          <div className="divide-y divide-slate-50 px-4">
            {students.map(s => (
              <div key={s.id} className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <span className="text-xs font-black text-slate-300 w-8">{s.roll}</span>
                  <p className="font-bold text-slate-800 text-lg">{s.name}</p>
                </div>
                <button 
                  onClick={() => toggleAttendance(s.id)}
                  className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    s.present ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {s.present ? 'Present' : 'Absent'}
                </button>
              </div>
            ))}
          </div>
          <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-center">
            <button 
              onClick={saveAttendance}
              className="bg-[#1E3A8A] text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-900/40 hover:scale-105 active:scale-95 transition-all"
            >
              Sign & Commit Ledger
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
