import React from 'react';
import ComparisonSlider from './ComparisonSlider';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 mb-4">
            See the transformation
          </h2>
          <p className="text-slate-600">
            Drag the slider to compare before and after.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200">
          <ComparisonSlider 
            beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
