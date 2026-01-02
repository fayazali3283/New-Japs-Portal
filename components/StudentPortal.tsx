
import React from 'react';
import ChatWindow from './ChatWindow';

const StudentPortal: React.FC = () => {
  const cards = [
    {
      title: 'Academic Report',
      description: 'Term 1 Grades & Teacher Feedback',
      icon: '📈',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
      locked: false
    },
    {
      title: 'Attendance Summary',
      description: 'Current Session: 92.4%',
      icon: '📅',
      color: 'bg-green-50',
      textColor: 'text-green-700',
      locked: false
    },
    {
      title: 'Raise Ticket',
      description: 'Issue with Fee or Transportation?',
      icon: '🎫',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
      locked: false
    },
    {
      title: 'Monthly Report',
      description: 'Behavioral & Performance Review',
      icon: '🔒',
      color: 'bg-slate-100',
      textColor: 'text-slate-500',
      locked: true,
      badge: '3-Day Access Only'
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Grid Content */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 rounded-12 p-8 text-white shadow-lg overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Welcome, Parent of Aryan</h2>
            <p className="mt-2 text-blue-100 max-w-md">Stay updated with your child's progress. Your next fee installment is due in 12 days.</p>
            <button className="mt-6 bg-white text-[#1E3A8A] px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-blue-50 transition-colors">
              View Profile
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-12 shadow-sm border border-slate-100 flex flex-col justify-between h-48 transition-all hover:shadow-md cursor-pointer ${card.locked ? 'opacity-75 bg-slate-50/50' : 'bg-white'}`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 ${card.color} flex items-center justify-center rounded-12 text-2xl`}>
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight">
                      {card.badge}
                    </span>
                  )}
                </div>
                <h3 className={`mt-4 text-lg font-bold ${card.locked ? 'text-slate-500' : 'text-slate-800'}`}>
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{card.description}</p>
              </div>
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                {card.locked ? 'Locked Access' : 'View Details →'}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-12 shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {[
              { title: 'Annual Sports Day', date: 'Nov 12', type: 'Event' },
              { title: 'PTM - Mid Term', date: 'Nov 18', type: 'Academic' },
              { title: 'Winter Break Starts', date: 'Dec 22', type: 'Holiday' },
            ].map((event, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center bg-white px-3 py-1 rounded border border-slate-200 min-w-[60px]">
                    <span className="block text-xs font-bold text-slate-400 uppercase">{event.date.split(' ')[0]}</span>
                    <span className="block text-lg font-bold text-[#1E3A8A]">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{event.title}</h4>
                    <span className="text-xs text-slate-500">{event.type}</span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-[#1E3A8A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Chat Column */}
      <div className="lg:col-span-1">
        <ChatWindow />
      </div>
    </div>
  );
};

export default StudentPortal;
