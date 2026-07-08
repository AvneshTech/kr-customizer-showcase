import React from 'react';
import { krData } from '../data/krData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyDifferent() {
  return (
    <section id="why-different" className="py-20 bg-[#fcf8ff] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 2 bottom */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1640] tracking-tight">
            {krData.whyDifferent.title}
          </h2>
          <p className="text-base sm:text-lg text-[#33305c] leading-relaxed font-normal">
            {krData.whyDifferent.subtitle}
          </p>
        </div>

        {/* Two Comparison / Feature Cards matching Screenshot 2 bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Built for Real Shopping Behavior (Headphones graphic) */}
          <div className="kr-card flex flex-col justify-between overflow-hidden relative group">
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-black text-[#1a1640] group-hover:text-[#4f46e5] transition-colors">
                {krData.whyDifferent.cards[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#33305c] leading-relaxed">
                {krData.whyDifferent.cards[0].description}
              </p>
            </div>

            {/* Right/Bottom Image Box with Headphones matching Screenshot 2 */}
            <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
              <img
                src={krData.whyDifferent.cards[0].image}
                alt="3 Headphones Real-time preview"
                className="w-full max-w-xs h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2: Simple for Teams, Powerful for Stores (Laptop management graphic) */}
          <div className="kr-card flex flex-col justify-between overflow-hidden relative group">
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-black text-[#1a1640] group-hover:text-[#4f46e5] transition-colors">
                {krData.whyDifferent.cards[1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#33305c] leading-relaxed">
                {krData.whyDifferent.cards[1].description}
              </p>
            </div>

            {/* Right/Bottom Image Box with Laptop Dashboard matching Screenshot 2 */}
            <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
              <img
                src={krData.whyDifferent.cards[1].image}
                alt="Store teams dashboard laptop"
                className="w-full max-w-sm h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
