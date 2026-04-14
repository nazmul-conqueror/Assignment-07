import React from 'react';
import { HiPlus } from 'react-icons/hi'; // Ensure react-icons is installed

const FriendsBanner = () => {
  const stats = [
    { label: 'Total Friends', value: 10 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
    <section className="bg-base-100 py-12 px-4 flex flex-col items-center text-center">
      {/* Header Section */}
      <div className="max-w-2xl mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>
        
        {/* DaisyUI Button with React Icon */}
        <button className="btn btn-neutral normal-case px-6 bg-[#1a3a32] hover:bg-[#132b25] border-none text-white">
          <HiPlus className="text-lg" />
          Add a Friend
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-100 rounded-lg shadow-sm py-8 px-4 flex flex-col items-center justify-center"
          >
            <span className="text-3xl font-bold text-slate-800 mb-1">
              {stat.value}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendsBanner;
