// components/Navbar.tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-slate-200 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">FanClash</div>
        <div className="md:flex space-x-4">
          <a href="#" className="hover:text-slate-400">Home</a>
        </div>
      </div>
    </nav>
  );
}
