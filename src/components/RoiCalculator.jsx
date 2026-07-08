import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(50000);
  const [avgOrderValue, setAvgOrderValue] = useState(120);

  // Calculations
  const baselineConversionRate = 0.022; // 2.2%
  const customizerConversionRate = 0.0326; // +48% lift (3.26%)
  const customizerAovBoost = 1.25; // +25% AOV from premium materials/customization fee

  const baselineMonthlyOrders = Math.round(monthlyVisitors * baselineConversionRate);
  const baselineMonthlyRevenue = Math.round(baselineMonthlyOrders * avgOrderValue);

  const newMonthlyOrders = Math.round(monthlyVisitors * customizerConversionRate);
  const newAov = Math.round(avgOrderValue * customizerAovBoost);
  const newMonthlyRevenue = Math.round(newMonthlyOrders * newAov);

  const monthlyRevenueLift = newMonthlyRevenue - baselineMonthlyRevenue;
  const annualRevenueLift = monthlyRevenueLift * 12;

  return (
    <section id="roi-calculator" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">Revenue Lift</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            See how much additional revenue CustomCraft Pro can generate for your store by increasing conversion rates and order value.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-slate-800 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Monthly Visitors */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-400" />
                    <span>Monthly Store Visitors</span>
                  </label>
                  <span className="text-xl font-bold text-white bg-slate-900 px-3 py-1 rounded-xl border border-slate-800">
                    {monthlyVisitors.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>5,000</span>
                  <span>100,000</span>
                  <span>250,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Order Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-brand-400" />
                    <span>Average Order Value (AOV)</span>
                  </label>
                  <span className="text-xl font-bold text-white bg-slate-900 px-3 py-1 rounded-xl border border-slate-800">
                    ${avgOrderValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>$20</span>
                  <span>$250</span>
                  <span>$500+</span>
                </div>
              </div>

              {/* Lift Metrics Breakdown */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Conversion Rate Lift</span>
                  <span className="text-lg font-bold text-emerald-400">+48% Increase</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">From 2.2% to 3.26%</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">AOV Premium Boost</span>
                  <span className="text-lg font-bold text-emerald-400">+25% Increase</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Custom materials & engraving</span>
                </div>
              </div>

            </div>

            {/* Right Column: Results Box */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-brand-500/30 relative overflow-hidden shadow-2xl">
                
                {/* Glow badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-500 to-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-md">
                  Estimated Lift
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Estimated Monthly Revenue Lift
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-white mt-1 flex items-baseline gap-1">
                      <span className="text-brand-400">+${monthlyRevenueLift.toLocaleString()}</span>
                      <span className="text-sm font-normal text-slate-400">/mo</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Current Estimated Revenue:</span>
                      <span className="font-semibold text-slate-300">${baselineMonthlyRevenue.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">With CustomCraft Pro:</span>
                      <span className="font-bold text-brand-400">${newMonthlyRevenue.toLocaleString()}/mo</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-bold">
                      <span className="text-white">Projected Annual Profit Lift:</span>
                      <span className="text-emerald-400 text-base">+${annualRevenueLift.toLocaleString()}/yr</span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-slate-950 font-bold text-base shadow-xl shadow-brand-500/20 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Unlock This Revenue Lift Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-[11px] text-center text-slate-500">
                    *Estimates based on aggregated data across 1,200+ merchant deployments.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
