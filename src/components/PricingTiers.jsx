import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { pricingPlans, faqData } from '../data/mockData';

export default function PricingTiers() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="pricing" className="py-24 bg-slate-900/40 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
            <span>Flexible Subscription Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing, <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">Instant ROI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Start with our 14-day free trial. Upgrade or cancel anytime with zero cancellation fees.
          </p>

          {/* Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-14 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-300 shadow-md ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full bg-brand-500/20 border border-brand-500/40 text-[10px] font-bold text-brand-400 uppercase tracking-wider animate-pulse">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {pricingPlans.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-brand-500 shadow-2xl shadow-brand-500/10 lg:-translate-y-4'
                    : 'glass-panel border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-400 to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400 min-h-[40px] mb-6">{plan.tagline}</p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-white">${price}</span>
                    <span className="text-sm text-slate-400">/ month</span>
                    {annualBilling && (
                      <span className="text-xs text-slate-500 block ml-2">billed annually</span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-4 mb-8">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-slate-950 shadow-brand-500/20 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Frequently Asked Questions (FAQ) Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h3>
            <p className="text-sm text-slate-400">Everything you need to know about CustomCraft Pro deployment and billing.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border-slate-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left font-semibold text-base text-white flex items-center justify-between gap-4 hover:text-brand-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
