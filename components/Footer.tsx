import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/Interium Logo.png" alt="Interium" className="h-6 w-6" />
            <span className="text-base font-serif text-slate-900">Interium</span>
          </div>
          <p className="text-slate-500 text-sm">© 2025 Interium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
