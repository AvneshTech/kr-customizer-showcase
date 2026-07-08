import React, { useState } from 'react';
import { krData } from '../data/krData';
import { Palette, Type, ShoppingBag, Grid, Plus, Check, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-[#fcf8ff] border-b border-slate-100 relative overflow-hidden">
      {/* Subtle lavender background glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Buttons matching Screenshot 1 */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1640] tracking-tight leading-[1.15]">
              {krData.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-[#33305c] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {krData.hero.description}
            </p>

            {/* Action Buttons matching Screenshot 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#faqs" className="kr-btn-primary w-full sm:w-auto">
                {krData.hero.primaryCta}
              </a>
              <a href="#results" className="kr-btn-secondary w-full sm:w-auto">
                {krData.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Column: Pristine Figma Graphic matching Screenshot 1 */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg flex items-center justify-center">
              <img
                src={krData.hero.handbag.image}
                alt="KR Customizer Studio Preview"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
