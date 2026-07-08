import React from 'react';
import { Box, Calculator, FileOutput, Smartphone, RefreshCw, Sparkles, ArrowUpRight } from 'lucide-react';
import { softwareFeatures } from '../data/mockData';

export default function FeaturesGrid() {
  const iconMap = {
    Box: Box,
    Calculator: Calculator,
    FileOutput: FileOutput,
    Smartphone: Smartphone,
    RefreshCw: RefreshCw,
    Sparkles: Sparkles,
  };

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
            <span>Powerful Software Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for E-Commerce <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">Performance & Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Everything you need to build, launch, and scale interactive product configurators without writing a single line of 3D code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Box;
            return (
              <div
                key={feature.id}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 group-hover:border-brand-500/40 group-hover:text-brand-300 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-brand-400 transition-colors">
                  <span>Explore Specification</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Subtle corner glow on hover */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
