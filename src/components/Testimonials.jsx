import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-brand-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
            <span>Proven Customer Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">E-Commerce Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            See how innovative apparel, footwear, and luxury brands use CustomCraft Pro to increase conversions and customer loyalty.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between border-slate-800/80 hover:border-brand-500/50 transition-all duration-300 relative group"
            >
              <div>
                {/* Top Row: Stars & Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-400/40"
                />
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-brand-400 transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>

              {/* Subtle background quote icon */}
              <Quote className="absolute bottom-6 right-6 w-16 h-16 text-slate-800/20 group-hover:text-brand-500/10 transition-colors pointer-events-none -z-10" />
            </div>
          ))}
        </div>

        {/* Aggregate Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white block">1,200+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">Active Stores</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-400 block">+48%</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">Avg Conversion Lift</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white block">-60%</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">Return Rate Reduction</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block">4.9/5</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">Overall Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
