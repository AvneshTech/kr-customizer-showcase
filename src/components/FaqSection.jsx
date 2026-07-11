import React, { useState } from 'react';
import { krData } from '../data/krData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 3 bottom */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1640] tracking-tight">
            FAQs
          </h2>
          <p className="text-sm sm:text-base text-[#33305c] mt-2">
            Everything you need to know about KR Customizer software and deployment.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {krData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'bg-slate-50/80 border-slate-250 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-base text-[#1a1640] flex items-center justify-between gap-4 hover:text-[#4f46e5] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#ffd600] text-[#1a1640]' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#33305c] leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
