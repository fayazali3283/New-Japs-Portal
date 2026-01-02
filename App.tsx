
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
  const [isExitingLoader, setIsExitingLoader] = useState(false);
  const [isDashboardLoading, setIsDashboardLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initial App Load sequence with smooth fade-out
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExitingLoader(true);
      setTimeout(() => setIsAppLoading(false), 800); // Wait for fade animation
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handlePortalSwitch = (show: boolean) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setShowAuth(show);
      setIsTransitioning(false);
    }, 450); // Matches the duration of the transition CSS
  };

  const handleLogin = (loggedUser: User) => {
    setIsTransitioning(true);
    setIsSidebarOpen(false);
    
    setTimeout(() => {
      setUser(loggedUser);
      setShowAuth(false);
      triggerDashboardLoad();
      setIsTransitioning(false);
    }, 500);
  };

  const triggerDashboardLoad = () => {
    setIsDashboardLoading(true);
    setTimeout(() => setIsDashboardLoading(false), 1200);
  };

  const handleLogout = () => {
    setIsTransitioning(true);
    setIsSidebarOpen(false);
    
    setTimeout(() => {
      setUser(null);
      setShowAuth(false);
      setIsTransitioning(false);
    }, 500);
  };

  const handleGoHome = () => {
    setIsSidebarOpen(false);
    if (user) {
      triggerDashboardLoad();
    } else {
      handlePortalSwitch(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Return loader with exit state
  if (isAppLoading) {
    return <JapsLoader isExiting={isExitingLoader} />;
  }

  return (
    <div className={`min-h-screen bg-[#07090e] transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.98] blur-md' : 'opacity-100 scale-100 blur-0'}`}>
      {!user && !showAuth && (
        <PublicLanding onEnterPortal={() => handlePortalSwitch(true)} />
      )}

      {!user && showAuth && (
        <AuthPortal onLogin={handleLogin} onBack={() => handlePortalSwitch(false)} />
      )}

      {user && (
        <div className="flex min-h-screen bg-[#07090e] text-slate-300 font-sans overflow-hidden">
          <Sidebar 
            role={user.role} 
            onLogoClick={handleGoHome} 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
          
          <div className="flex-1 flex flex-col min-w-0 h-screen">
            <Header 
              user={user} 
              onLogout={handleLogout} 
              onLogoClick={handleGoHome}
              onMenuToggle={toggleSidebar}
            />
            
            <main className="flex-1 p-4 md:p-8 overflow-y-auto relative scrollbar-hide">
              <div className="max-w-7xl mx-auto transition-opacity duration-300">
                {isDashboardLoading ? (
                  <SkeletonDashboard />
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                    {user.role === AppRole.STUDENT && <StudentDashboard />}
                    {user.role === AppRole.TEACHER && <TeacherDashboard user={user} />}
                    {user.role === AppRole.SECTION_HEAD && <SectionHeadDashboard user={user} />}
                    {user.role === AppRole.SECTIONAL_HEAD && <SectionalHeadDashboard user={user} />}
                    {user.role === AppRole.PRINCIPAL && <PrincipalDashboard />}
                    {user.role === AppRole.ADMIN && <AdminDashboard user={user} />}
                  </div>
                )}
              </div>
            </main>
          </div>

          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;