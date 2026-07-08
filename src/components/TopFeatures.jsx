import React from 'react';
import { krData } from '../data/krData';
import { Sliders, Box, MousePointerClick, Percent, Sparkles, TrendingUp } from 'lucide-react';

export default function TopFeatures() {
  const iconMap = {
    Sliders: Sliders,
    Box: Box,
    MousePointerClick: MousePointerClick,
    Percent: Percent,
    Sparkles: Sparkles,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="features" className="py-20 bg-[#f8f9fa] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1640] tracking-tight">
            {krData.topFeatures.title}
          </h2>
        </div>

        {/* 6 Features Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {krData.topFeatures.list.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Box;
            return (
              <div
                key={feature.id}
                className="kr-card flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Yellow Circle Icon matching Screenshot 1 */}
                  <div className="w-14 h-14 rounded-full bg-[#ffd600] flex items-center justify-center text-[#1a1640] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1640] mb-3 group-hover:text-[#4f46e5] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#33305c] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom decorative bar on hover */}
                <div className="w-0 group-hover:w-full h-1 bg-[#ffd600] rounded-full transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
