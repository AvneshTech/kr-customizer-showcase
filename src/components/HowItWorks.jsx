import React from 'react';
import { Plug, UploadCloud, Sliders, TrendingUp, ArrowRight } from 'lucide-react';
import { howItWorksSteps } from '../data/mockData';

export default function HowItWorks() {
  const iconMap = {
    Plug: Plug,
    UploadCloud: UploadCloud,
    Sliders: Sliders,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-900/40 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
            <span>Seamless Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Go Live in <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">4 Simple Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From standard product photos to an interactive 3D studio in less than an hour. No developers or complex 3D modeling required.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {howItWorksSteps.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Plug;
            return (
              <div key={item.step} className="relative group">
                
                {/* Step Card */}
                <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between border-slate-800/80 hover:border-brand-500/50 transition-all duration-300 relative z-10">
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-4xl font-black bg-gradient-to-br from-slate-700 to-slate-800 bg-clip-text text-transparent group-hover:from-brand-400 group-hover:to-emerald-500 transition-all duration-300">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step status */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-emerald-400 transition-colors" />
                    <span>Step {index + 1} of 4</span>
                  </div>
                </div>

                {/* Connecting Arrow on Desktop (except last item) */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2 w-8 items-center justify-center text-slate-700 group-hover:text-brand-400 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">Ready to test with your own products?</h4>
            <p className="text-sm text-slate-400">Our onboarding team will upload your first 3 products for free during your trial.</p>
          </div>
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap"
          >
            Claim Free Setup Assistance
          </a>
        </div>

      </div>
    </section>
  );
}
