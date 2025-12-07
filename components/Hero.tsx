import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-brand-200/30 to-brand-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-300/20 to-brand-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-[10%] w-20 h-20 border border-brand-200/40 rounded-2xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-16 h-16 border border-brand-300/30 rounded-full animate-float-reverse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-brand-100/40 rounded-xl animate-drift" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 right-[25%] w-8 h-8 bg-brand-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-[10%] w-14 h-14 border border-brand-200/30 rounded-lg rotate-12 animate-float-reverse" style={{ animationDelay: '1.5s' }} />
        
        {/* Small dots */}
        <div className="absolute top-32 left-[30%] w-3 h-3 bg-brand-400/40 rounded-full animate-drift" />
        <div className="absolute top-48 right-[30%] w-2 h-2 bg-brand-500/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 left-[40%] w-2 h-2 bg-brand-400/30 rounded-full animate-drift" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Redesign your room <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">in seconds.</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Upload a photo, choose a style, and watch AI transform your space. Generate videos and get shoppable furniture references.
        </p>
        
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-xl font-semibold hover:from-brand-600 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Try AI For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
