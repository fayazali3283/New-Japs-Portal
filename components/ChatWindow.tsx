
import React, { useState, useEffect, useRef } from 'react';
import { Message } from '../types';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'SYSTEM', text: 'Welcome to JAPS Helpdesk. How can we assist you today?' },
    { id: '2', sender: 'USER', text: 'Hi, I need to talk to the transport manager. Can I have his phone number?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'USER', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate system response/validation
    setTimeout(() => {
      const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
      const phoneRegex = /(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

      if (emailRegex.test(userMsg.text) || phoneRegex.test(userMsg.text) || userMsg.text.toLowerCase().includes('phone') || userMsg.text.toLowerCase().includes('number')) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'SYSTEM',
          text: 'Personal contact info (phone/email) is blocked for privacy and security reasons. Please raise a support ticket for official communication.',
          isError: true
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'SYSTEM',
          text: 'Your request has been noted. A representative will get back to you.'
        }]);
      }
    }, 800);
  };

  return (
    <div className="bg-white rounded-12 shadow-sm border border-slate-100 flex flex-col h-[700px] sticky top-24">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <h3 className="font-bold text-slate-800">Direct Support</h3>
        </div>
        <span className="text-[10px] bg-blue-100 text-[#1E3A8A] px-2 py-0.5 rounded font-bold uppercase">Live</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'USER' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                msg.sender === 'USER' 
                  ? 'bg-[#1E3A8A] text-white rounded-br-none' 
                  : msg.isError 
                    ? 'bg-red-50 text-red-700 border border-red-100 rounded-bl-none' 
                    : 'bg-slate-100 text-slate-700 rounded-bl-none'
              }`}
            >
              {msg.isError && (
                <div className="flex items-center space-x-1 mb-1 font-bold text-[10px] uppercase">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  <span>System Filter</span>
                </div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-12">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-12 shadow-sm"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 p-1.5 text-[#1E3A8A] hover:bg-blue-50 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center uppercase tracking-tighter">Powered by JAPS-SafeChat™ Enterprise</p>
      </form>
    </div>
  );
};

export default ChatWindow;
