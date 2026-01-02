
import React from 'react';

const SkeletonDashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-pulse py-4">
      {/* Top Banner Skeleton */}
      <div className="h-48 bg-white/5 rounded-[3.5rem] border border-white/5 flex items-center px-12 relative overflow-hidden">
        <div className="space-y-4 w-2/3">
          <div className="h-10 bg-white/5 rounded-2xl w-1/2"></div>
          <div className="h-4 bg-white/5 rounded-full w-1/3"></div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Stats Cluster */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-[#11141b] rounded-[2.5rem] border border-white/5 p-6 flex flex-col justify-between">
            <div className="h-3 bg-white/5 rounded-full w-1/2"></div>
            <div className="h-8 bg-white/5 rounded-xl w-3/4"></div>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-[#11141b] rounded-[3rem] border border-white/5 p-10 space-y-8">
            <div className="flex justify-between items-center">
              <div className="h-8 bg-white/5 rounded-xl w-48"></div>
              <div className="h-8 bg-white/5 rounded-full w-24"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 bg-black/20 rounded-[2rem] border border-white/5"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="h-72 bg-[#1E3A8A]/20 rounded-[3rem] border border-white/5"></div>
          <div className="h-56 bg-[#11141b] rounded-[3rem] border border-white/5"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDashboard;
