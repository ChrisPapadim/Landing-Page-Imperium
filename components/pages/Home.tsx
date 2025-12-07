import React, { useState } from 'react';
import Hero from '../Hero';
import Showcase from '../Showcase';
import { Zap, Video, ShoppingBag, Palette, Download, Smartphone, ChevronDown } from 'lucide-react';

const allFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant AI Renders",
    description: "Get photorealistic designs in under 30 seconds. Our AI understands room dimensions and lighting to create believable transformations."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Generation",
    description: "Generate stunning walkthrough videos from a single image—see your redesigned space come to life from every angle."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Furniture References",
    description: "Every generated design comes with shoppable links to similar furniture pieces so you can actually build your dream room."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "30+ Design Styles",
    description: "Choose from Minimalist, Bohemian, Industrial, Japandi, Mid-Century Modern, Scandinavian, and many more curated styles."
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "HD Downloads",
    description: "Export high-resolution images perfect for sharing with contractors, printing, or posting on social media."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Works Everywhere",
    description: "Use Interium on any device—desktop, tablet, or phone. Take a photo and transform it on the go."
  }
];

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Showcase />
      
      {/* Full Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 mb-4">All Features</h2>
            <p className="text-lg text-slate-600">Everything you need to redesign your space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-slate-200 text-slate-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 mb-6 text-center">About Interium</h2>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              Interium is an AI-powered interior design tool that helps you visualize and transform your living spaces. Whether you're a homeowner planning a renovation, a real estate agent staging properties, or an interior designer working with clients—Interium makes it easy to see possibilities.
            </p>
            
            <h3 className="text-xl font-serif text-slate-900 pt-4">How It Works</h3>
            <p>
              Simply upload a photo of your room, select from over 30 design styles, and our AI will generate photorealistic renders of your transformed space in seconds. You can even generate walkthrough videos from a single image, plus get shoppable furniture references to bring your vision to life.
            </p>
            
            <h3 className="text-xl font-serif text-slate-900 pt-4">Our Mission</h3>
            <p>
              We believe everyone deserves to live in a space they love. Our mission is to democratize interior design by making professional-quality visualization accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
};

const faqs = [
  {
    question: "How does Interium work?",
    answer: "Simply upload a photo of your room, select a design style, and our AI will generate photorealistic renders of your transformed space in under 30 seconds. You can also generate videos from your image."
  },
  {
    question: "What file types are supported?",
    answer: "We support JPG, PNG, and WEBP images up to 50MB. From your uploaded image, you can generate both redesigned images and walkthrough videos."
  },
  {
    question: "Can I get the furniture shown in my designs?",
    answer: "Yes! Every generated design comes with shoppable furniture references—links to similar items you can purchase to recreate the look."
  },
  {
    question: "How many design styles are available?",
    answer: "We offer over 30 curated styles including Minimalist, Bohemian, Industrial, Japandi, Mid-Century Modern, Scandinavian, Coastal, and many more."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Your photos are encrypted and processed securely. We never share your data with third parties and you can delete your uploads at any time."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-serif text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
