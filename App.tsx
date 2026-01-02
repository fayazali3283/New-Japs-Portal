
import React, { useState, useEffect } from 'react';
import { AppRole, User } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AuthPortal from './components/AuthPortal';
import PublicLanding from './components/PublicLanding';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import SectionHeadDashboard from './components/dashboards/SectionHeadDashboard';
import SectionalHeadDashboard from './components/dashboards/SectionalHeadDashboard';
import PrincipalDashboard from './components/PrincipalDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import JapsLoader from './components/ui/JapsLoader';
import SkeletonDashboard from './components/ui/SkeletonDashboard';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isDashboardLoading, setIsDashboardLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initial App Load Simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (loggedUser: User) => {
    setIsAppLoading(true);
    setIsSidebarOpen(false);
    setTimeout(() => {
      setUser(loggedUser);
      setShowAuth(false);
      setIsAppLoading(false);
      triggerDashboardLoad();
    }, 2000);
  };

  const triggerDashboardLoad = () => {
    setIsDashboardLoading(true);
    setTimeout(() => setIsDashboardLoading(false), 1200);
  };

  const handleLogout = () => {
    setIsAppLoading(true);
    setIsSidebarOpen(false);
    setTimeout(() => {
      setUser(null);
      setShowAuth(false);
      setIsAppLoading(false);
    }, 1500);
  };

  const handleGoHome = () => {
    setIsSidebarOpen(false);
    if (user) {
      triggerDashboardLoad();
    } else {
      setShowAuth(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (isAppLoading) {
    return <JapsLoader />;
  }

  // Public Landing State
  if (!user && !showAuth) {
    return <PublicLanding onEnterPortal={() => setShowAuth(true)} />;
  }

  // Auth Portal State
  if (!user && showAuth) {
    return <AuthPortal onLogin={handleLogin} onBack={() => setShowAuth(false)} />;
  }

  const renderDashboardContent = () => {
    if (isDashboardLoading) {
      return <SkeletonDashboard />;
    }

    switch (user?.role) {
      case AppRole.STUDENT: return <StudentDashboard />;
      case AppRole.TEACHER: return <TeacherDashboard user={user} />;
      case AppRole.SECTION_HEAD: return <SectionHeadDashboard user={user} />;
      case AppRole.SECTIONAL_HEAD: return <SectionalHeadDashboard user={user} />;
      case AppRole.PRINCIPAL: return <PrincipalDashboard />;
      case AppRole.ADMIN: return <AdminDashboard user={user} />;
      default: return <div className="p-10 text-center text-slate-500">Node path not resolved for role {user?.role}</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#07090e] text-slate-300 font-sans overflow-hidden">
      {/* Sidebar - Desktop and Mobile Overlay */}
      <Sidebar 
        role={user!.role} 
        onLogoClick={handleGoHome} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <Header 
          user={user!} 
          onLogout={handleLogout} 
          onLogoClick={handleGoHome}
          onMenuToggle={toggleSidebar}
        />
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto relative scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            {renderDashboardContent()}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
