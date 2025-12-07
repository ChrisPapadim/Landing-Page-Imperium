import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I use Interium to quickly mock up ideas for clients before we even sign a contract. It saves me hours of rendering time."
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "We couldn't decide between a modern or rustic look for our living room. Interium showed us both in our actual space. Incredible."
  },
  {
    name: "Elena Rodriguez",
    role: "Real Estate Agent",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "Virtual staging used to cost me $50 per photo. Now I do it myself in seconds on my phone. My listings sell 2x faster."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Loved by Designers & Homeowners</h2>
          <p className="text-slate-600">Join thousands of happy users creating beautiful spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed font-medium">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{review.name}</h4>
                  <p className="text-slate-500 text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;