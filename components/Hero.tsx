import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Redesign your room <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">in seconds.</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Upload a photo, choose a style, and watch AI transform your space. Generate videos and get shoppable furniture references.
        </p>
        
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-xl font-semibold hover:from-brand-600 hover:to-brand-800 transition-all">
            Try AI For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
