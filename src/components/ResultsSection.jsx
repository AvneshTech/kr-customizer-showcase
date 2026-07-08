import React from 'react';
import { krData } from '../data/krData';
import { TrendingUp, Award, Users, CheckCircle } from 'lucide-react';

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Results Banner matching Screenshot 2 top */}
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: TV / Monitor Dashboard Graphic matching Screenshot 2 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative group max-w-lg w-full">
                <img
                  src={krData.results.image}
                  alt="Results Brands Can See Analytics Dashboard"
                  className="w-full h-auto rounded-2xl shadow-xl border border-slate-200 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Copy matching Screenshot 2 */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1640] tracking-tight">
                {krData.results.title}
              </h2>

              <p className="text-base sm:text-lg text-[#33305c] leading-relaxed">
                {krData.results.description}
              </p>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                {krData.results.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-2xl sm:text-3xl font-black text-[#1a1640] block">{m.value}</span>
                    <span className="text-xs font-bold text-[#33305c] uppercase tracking-wider mt-1 block">{m.label}</span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">{m.sub}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Centered Action Buttons matching Screenshot 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#faqs" className="kr-btn-primary w-full sm:w-auto">
            {krData.hero.primaryCta}
          </a>
          <a href="#hero" className="kr-btn-secondary w-full sm:w-auto">
            {krData.hero.secondaryCta}
          </a>
        </div>

      </div>
    </section>
  );
}
